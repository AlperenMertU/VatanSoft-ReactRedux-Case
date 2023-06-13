import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Harita = () => {
  const weather = useSelector(state => state.hava.key);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const makeAPIRequest = async () => {
      try {                                    
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${weather}`);
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

      makeAPIRequest();
    
  }, [weather, inputValue]);

  const setCity = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='container'>
      <div className='city'>
        <input onChange={(e) => setCity(e)} value={inputValue} />
        <button type='submit'></button>
      </div>
     
    </div>
  );
}

export default Harita;
