import React from "react";

export default function List(props) {
    return (
        
    <div className="container">
        <img src={props.image} className="image"/>
        <div className="person-details">
                <h4>{props.name}</h4>
                <p>{props.age} Years</p>
        </div>    
    </div>
        
    )
}