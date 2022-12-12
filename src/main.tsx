import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const worker = new Worker(new URL('./worker.ts', import.meta.url));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
