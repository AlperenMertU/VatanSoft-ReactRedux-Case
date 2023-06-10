import React from 'react';
import { useSelector } from 'react-redux';

const Deneme = () => {

    const weather = useSelector(state => state.hava.key)

    return (
        <div>
            011111
            <p style={{color:"red"}}>{weather}</p>
        </div>
    );
}

export default Deneme;
