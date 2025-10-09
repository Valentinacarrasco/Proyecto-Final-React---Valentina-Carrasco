import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './views/Home'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Error404} from './views/Error404'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:id' element={<><Navbar /><ItemListContainer /></>} />
        <Route path='/detail/:id' element={<><Navbar /><ItemDetailContainer /></>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
