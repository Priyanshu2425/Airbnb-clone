import React from "react"
import Banner from "../assets/banner.png"
import "../styles/banner.css"

export default function banner(){
    return (
        <>
            <div className="banner">
                <img className="bannerImg" src={Banner}/>
            </div>
        </>
    )
}