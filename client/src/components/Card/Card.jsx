import React from "react";

export default function Card (name, description, price, image){
    return(
        <div>
            <h1>Soy {name}!</h1>
            <img src={image} alt={name}></img>
            <p>{description}</p>
            <h3>{price}</h3>
        </div>
    )
}