// Code to render the App component in the root element of the HTML file
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <App />

)
