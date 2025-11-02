import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './views/Home'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Error404 } from './views/Error404'
import { Cart } from './views/Cart'
import { CartProvider } from './context/CartContext'
import { Checkout } from './views/Checkout'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:id' element={<><Navbar /><ItemListContainer /></>} />
          <Route path='/detail/:id' element={<><Navbar /><ItemDetailContainer /></>} />
          <Route path='/cart' element={<><Navbar/> <Cart/></>} />
          <Route path='/checkout' element={<><Navbar/> <Checkout/></>} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
