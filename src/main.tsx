import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App';
import './styles.css';

const root = document.getElementById('root')!;
const hasPrerenderedMarkup = root.hasChildNodes();
const app = (
  <StrictMode>
    <App initialPathname={hasPrerenderedMarkup ? window.location.pathname : undefined} />
  </StrictMode>
);

if (hasPrerenderedMarkup) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
