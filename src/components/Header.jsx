import React from "react"
import Logo from "../assets/logo.png"
import "../styles/header.css"

export default function header(){
    
    return (
        <>
            <nav className="navbar">
                <img src={Logo} className="logo"/>
            </nav>
        </>
    )
}