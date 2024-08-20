import Home from './views/Home/Home'
import MisTurnos from './views/Mis turnos/MisTurnos'
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import CrearTurnos from './views/CrearTurnos/CrearTurnos'

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mis-turnos' element={<MisTurnos />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/crear-turnos' element={<CrearTurnos />} />

      </Routes>

    </>
  )
  // {<Home />}

}

export default App
