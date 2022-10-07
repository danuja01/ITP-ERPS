import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DegreeContextProvider } from './Context/DegreeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DegreeContextProvider>
      <App />
    </DegreeContextProvider>
  </React.StrictMode>
);
