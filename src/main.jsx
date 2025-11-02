import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD2uLFKhCH3OdOi4pOAOyKMDVowDD8Smx0",
  authDomain: "ecommercesolstice.firebaseapp.com",
  projectId: "ecommercesolstice",
  storageBucket: "ecommercesolstice.firebasestorage.app",
  messagingSenderId: "936536890801",
  appId: "1:936536890801:web:01af4eae22e013e7fb3190"
};

initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(<App />)
