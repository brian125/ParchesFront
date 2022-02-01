import React from 'react';
import './barraLateral.scss';
import AddIcon from '@mui/icons-material/Add';
import People from '@mui/icons-material/People'
import Person from '@mui/icons-material/Person'
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LogoutIcon from '@mui/icons-material/Logout';

function BarraLateral({ menuAbierto, setMenuAbierto }) {
  return (
    <div className={"barra-lateral "+(menuAbierto && "active")}>
      <ul>
        <li onClick={()=>setMenuAbierto(false)}>
        <AddIcon className= "icon"/>
          <a href="#agregar"></a>
        </li>
        <li onClick={()=>setMenuAbierto(false)}>
          <People className="icon" />
          <a href="#parches">Mis parches</a>
        </li>
        <li onClick={()=>setMenuAbierto(false)}>
          <Person className="icon" />
          <a href="#perfil">Perfil</a>
        </li>
        <li onClick={()=>setMenuAbierto(false)}>
          <ContactSupportIcon className = "icon" />
          <a href="#asistencia">Asistencia</a>
        </li>
        <li onClick={()=>setMenuAbierto(false)}>
          <LogoutIcon className = "icon" />
          <a href="#cerrar">Cerrar sesion</a>
        </li>
      </ul>
  </div>
  );
}

export default BarraLateral;


