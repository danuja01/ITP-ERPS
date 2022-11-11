import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DegreeContextProvider } from './Context/DegreeContext';
import { AuthProvider } from './Context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <DegreeContextProvider>
        <App />
      </DegreeContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
