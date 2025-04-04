import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppHookContainer } from './AppHookContainer.tsx'
import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppHookContainer />
  </StrictMode>,
)
