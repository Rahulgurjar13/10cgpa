import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Context from './utils/context.jsx';


const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>

   
        <App />
     

  </StrictMode>
);
