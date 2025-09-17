import './App.css'
import { Navbar } from './components/navbar'
import { CartWidget } from './components/CartWidget'
import { ItemListContainer } from './components/ItemListContainer'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer saludo='Bienvenidos!'></ItemListContainer>
    </>
  )
}

export default App
