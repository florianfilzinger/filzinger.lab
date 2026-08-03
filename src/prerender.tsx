import { renderToString } from 'react-dom/server';
import { App } from './App';
import { indexableRoutes, notFoundSeo, type RouteSeo } from './siteSeo';

export { indexableRoutes, notFoundSeo };
export type { RouteSeo };

export function renderRoute(pathname: string) {
  return renderToString(<App initialPathname={pathname} />);
}
