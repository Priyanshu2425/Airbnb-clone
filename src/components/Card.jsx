import React from "react"
import Star from "../assets/star.png"
import "../styles/card.css"
export default function Card(props){
    var badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT";
    }else{
        badgeText = "ONLINE"
    }
    return (
        <>
            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img className="card-image" src={props.img}/>
                <div className="card--stats">
                    <img className="starLogo" src={Star}></img>
                    <p className="grey">{props.rating}</p>
                    <p className="grey">({props.reviewCount})</p>
                    •
                    <p className="grey">{props.country}</p>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span>/person</p>
            </div>
        </>
    )
}