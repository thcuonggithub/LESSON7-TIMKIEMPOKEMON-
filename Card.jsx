import React from 'react';
import './card.css';

const Card = (props) => {
    return (
        <div className="card" onClick={props.onClick}>
            <img src={props.img} alt={props.name} />
            <p className="pokemon_id">{props.id}</p>
            <p className="pokemon_name">{props.name}</p>
            <div className="pokemon_class_wrapper">
                {props.types.map((type, index) => (
                    <span className={type} key={index}>{type}</span>
                ))}
            </div>
        </div>
    );
};
export default Card;


