import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/css/style.css"
import 'react-loading-skeleton/dist/skeleton.css'
import Web from "../routes/web.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Web/>
  </React.StrictMode>,
)