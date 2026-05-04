import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ProductCard from './component/ProductCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ProductCard  name="Surakshya Nepali" price="1500"inStock="true"/>
  </StrictMode>
)
