import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routes.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
    <ToastContainer
      position='top-right'
      autoClose={3000}
      theme='dark'
    />
    
  </StrictMode>,
)
