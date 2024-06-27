import React from "react";
import logo from './logo.svg'

const Logo = () =>{
    return (
    <a href="index.html">
        <img src={logo} alt="logo" style={{
        width: 50, // Adjust as needed
        height: 50, // Adjust as needed
        borderRadius: 5,
        
      }}></img>
    </a>
    
  )

}

const Navbar = () =>{
    return(
        <navbar className="nav">
            <Logo></Logo>
            <ul>
                <li>home</li>
                <li>yo</li>
                <li>vos</li>
                <li>muchos</li>

            </ul>
        </navbar>
    )
}

export default Navbar;