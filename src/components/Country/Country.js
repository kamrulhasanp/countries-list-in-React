import React from 'react';
import './Country.css';
const Country = (props) => {
    const {area, region,population, name, flags} = props.country;
    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="flag" />
            <p>Country population: {population}</p>
            <p><small>Area: {area}</small></p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;