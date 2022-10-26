import React from 'react'
import { Link } from 'react-router-dom'



function Menu() {


    const logout = ()=>{
        sessionStorage.removeItem("usuario-invalido")
        window.location = "/home"
    }

    const usuario = sessionStorage.getItem("usuario-valido")

    return(
        <div>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/home">Login</Link></li>
                <li><Link to="/produto">Produto</Link></li>
                <li><button onClick={logout}>{usuario} Logout</button></li>
            </ul>
        </div>
    )
}

export default Menu;