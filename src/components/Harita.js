import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {deneme}  from '../styles/hartia.css'
const Harita = () => {

  const weather = useSelector(state => state.hava.key)
  console.log(weather);  



  const [cities, setCities] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const setCity = (event) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue);

  let ilAd = "denizli"
  //api miz weather ile sorunsuz Harita bileşenimize geliyor, sorun axios ta çünkü daha api mi göndermeden hata veriyor

  /* try {
    https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  const url = `https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=${weather}`;
  const response = await axios.get(url);
  const weatherData = response.data.list
  setCities(weatherData);
} catch (error) {
  console.log('burada hata var:', error);
}  */
   /////////////7

  
  
   useEffect(() => {
    const makeAPIRequest = async () => {
      try {                                    
                                              //il adı dışarıdan girince hata alıyorum diğer türlü her şey normal. bu sorunu çöz. 
                                              //sorunun çözümü inputu submit etmediğimden oluyor olabilir bir buton koy ve sub et sonra aktar değişkenee
    //    const response = await axios.get(`https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=${weather}`);
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ilAd}&appid=${weather}`);

        const data = response.data;
        setCities(data);
        console.log(data);

      } catch (error) {
        console.error(error);
      }
    };

    makeAPIRequest();
    console.log(makeAPIRequest);
  }, [weather, ilAd]); 
///////////////
 


/*
    axios.get(`https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=${weather}`)
    .then(response => {

      const data = response.data.list
      setCities(data);
    })
    .catch(error => {
      console.log("hata", error);
    })

  */

  //2 saniye bir gel fonksiyonu çalışıyor.

  
  return (
    <div className='container'>
       <div className='city'>
         
         <input onChange={(e)=>setCity(e)} value="" onSubmit={}/>
       </div>
      {
       
      }
    </div>

  );
}

export default Harita;
