import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const Deneme = () => {
  const number = useSelector(state => state.hava.key)
  const [cities, setCities] = useState([]);

  const fetchWeatherData = async () => {
/*
    fetch(`https://fakestoreapi.com/products/${number}`)
      .then(res => res.formData.list)
      .then(json => console.log(json))
      .catch(error => console.log(error))
*/

      axios.get(`https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=${number}`)
      .then(response => {
        const data = response.data.list
        setCities(data);
      })
      .catch(error => {
        console.log("hata",error);
      })
  };

  fetchWeatherData();

  return (
    <div>

      {
        cities.map((city, key) => (<p key={key}>{city.name}</p>))
      }
    </div>
  );
}

export default Deneme;
