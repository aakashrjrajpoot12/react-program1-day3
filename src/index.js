import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App1, App2 } from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App1 />
    <App2 />
  </StrictMode>
);
