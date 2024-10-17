
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/HeaderFooter/Header'
import HomeComponent from './Components/Home/HomeComponent'

function App() {

  const location = useLocation()

  return (
    <>
    <Header/>
    {
      (location.pathname == '/')?<HomeComponent/>: <Outlet/>
    }
    </>
  )
}

export default App
