import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BannerImage from './components/BannerImage';
import avatar from "./images/Alfredo.png"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);