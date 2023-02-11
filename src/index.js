import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App1, App2,App3,App4,App5 ,App6} from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App1 />
    <App2 />
    <App3 name="Aakash"/>
    <App4 city="banglore"/>
    <App5  name="['akash' , 'abc' ,123]"/>
    <App6 name="ff"/>
  </StrictMode>
);
