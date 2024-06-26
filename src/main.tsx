import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
