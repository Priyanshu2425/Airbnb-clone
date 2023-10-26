import React from "react"
import "../styles/onlinexp.css"
import Card from "./Card"
import data from "../assets/data"

export default function OnlineExperiences(){
    const cards = data.map(function(item){
        return (
            <Card key={item.id} img={item.coverImg}
                price={item.price}
                rating={item.stats.rating}
                title={item.title}
                reviewCount = {item.stats.reviewCount}
                country="USA"
            />
        )
    })
    return (
        <>  
            <div>
                <div className="onlineContent">
                    <h1> OnlineExperiences </h1>
                    <p> Join unique interactive activities
                    led by one-of-a-kind hosts—all without 
                    leaving home. </p>
                </div>

                <div className="cardPanel">
                    {cards}
                </div>
                
            </div>

            
            
        </>
    )
}