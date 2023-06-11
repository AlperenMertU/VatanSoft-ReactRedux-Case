import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Harita = () => {

  const weather = useSelector(state => state.hava.key)
  console.log(weather);

  const deneme = useSelector(state => state.hide.key)
  console.log(deneme);

  const [cities, setCities] = useState([]);

  /* try {
  const url = `https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=${weather}`;
  const response = await axios.get(url);
  const weatherData = response.data.list
  setCities(weatherData);
} catch (error) {
  console.log('burada hata var:', error);
}  */

  axios.get(`https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=${weather}`)
    .then(response => {

      const data = response.data.list
      setCities(data);
    })
    .catch(error => {
      console.log("hata", error);
    })





  return (
    <div>

      Harita.js
      {
        cities.map((city, key) => (<h2 key={key}>{city.name}</h2>))
      }
    </div>

  );
}

export default Harita;
