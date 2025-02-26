import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Calendar from './Calendar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calendar />
  </StrictMode>,
)
