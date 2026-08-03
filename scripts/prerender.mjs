import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(projectRoot, 'dist');
const ssrDir = join(projectRoot, 'dist-ssr');
const template = await readFile(join(distDir, 'index.html'), 'utf8');
const renderer = await import(pathToFileURL(join(ssrDir, 'prerender.js')).href);

function escapeAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function renderDocument(route, body) {
  const url = `https://filzinger.lab${route.path}`;
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttribute(route.title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*("\s*\/?>)/, `$1${escapeAttribute(route.description)}$2`)
    .replace(/(<meta\s+name="robots"\s+content=")[^"]*("\s*\/?>)/, `$1${route.indexable ? 'index,follow' : 'noindex,follow'}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/?>)/, `$1${url}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*("\s*\/?>)/, `$1${escapeAttribute(route.title)}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*("\s*\/?>)/, `$1${escapeAttribute(route.description)}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*("\s*\/?>)/, `$1${url}$2`)
    .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*("\s*\/?>)/, `$1${escapeAttribute(route.title)}$2`)
    .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*("\s*\/?>)/, `$1${escapeAttribute(route.description)}$2`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(route.jsonLd)}</script>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  return html;
}

async function writeRoute(route, pathname = route.path) {
  const outputPath = pathname === '/'
    ? join(distDir, 'index.html')
    : pathname === '/404'
      ? join(distDir, '404.html')
      : join(distDir, pathname.slice(1), 'index.html');
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, renderDocument(route, renderer.renderRoute(pathname)));
}

for (const route of renderer.indexableRoutes) await writeRoute(route);
await writeRoute(renderer.notFoundSeo);

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...renderer.indexableRoutes.map((route) => `  <url><loc>https://filzinger.lab${route.path}</loc></url>`),
  '</urlset>',
  '',
].join('\n');
await writeFile(join(distDir, 'sitemap.xml'), sitemap);
await writeFile(join(distDir, '_redirects'), '/* /404.html 404\n');
await rm(ssrDir, { recursive: true, force: true });
