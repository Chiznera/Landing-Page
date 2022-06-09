import React from "react";
import PropType from "prop-types";

const Card = (props) => {


   
    return (
        <div className="card">
            <img src={props.imgsrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </div>
    )
}    

Card.propTypes = {
        title: PropType.string,
        description: PropType.string,
        imgsrc: PropType.string
    };

export default Card