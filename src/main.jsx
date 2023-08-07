import React from 'react'
import ReactDOM from 'react-dom/client'
import UserApp from './UserApp'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)