import { Outlet } from 'react-router-dom'
import BarraLateral from '../components/private/BarraLateral'
import {useState} from 'react'

const PublicLayout = () => {
  const [menuAbierto,setMenuAbierto] = useState(true)
  return (
    <>
      <BarraLateral menuAbierto={menuAbierto} setMenuAbierto={setMenuAbierto}/>
      <Outlet />
    </>
  )
}

export default PublicLayout
