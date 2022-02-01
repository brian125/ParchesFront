import { Outlet } from 'react-router-dom'

const PrivateLayout = () => {
  const [menuOpen,setMenuOpen] = useState(true)
  return (
    <>
      <h1>Barra</h1>
      <BarraLateral menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Outlet />
    </>

  )
}
export default PrivateLayout
