import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductListing from './pages/ProductListing'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductListing />
  </StrictMode>,
)
