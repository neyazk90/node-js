import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { APP_ROUTES } from './routes'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={APP_ROUTES} />
  </StrictMode>,
)
