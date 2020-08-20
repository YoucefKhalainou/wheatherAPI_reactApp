import React from 'react'

const Information = (props) => {

    return (
        <div className="container">
            {props.city && props.country &&
                <h1 className="city-country">{props.city},{props.country}</h1>}
            {props.temperature &&
                <h1 className="py-4">{props.temperature}°</h1>}
            <h5 className="py-4">
                <i className={`wi ${props.weatherIcon} display-1`} />
            </h5>
            <h2 className="py-4">{props.description.charAt(0).toUpperCase() +
                props.description.slice(1)}
            </h2>
        </div>
    );
}


export default Information;