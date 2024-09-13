import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./global.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
