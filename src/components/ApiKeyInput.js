import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApi } from "../features/weather/weatherSlice";
import login from "./styles/login.module.css"
import { getHide } from '../features/showHide/sayfaSlice';

const ApiKeyInput = () => {


  

  const [apiKey, setApiKey] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getApi(apiKey))
    dispatch(getHide());
  };
  
  const hide = useSelector(state => state.hide.key)
  console.log(hide);
  console.log(apiKey);

  return (
    <div className={login.container}>

      <div className='login'>
        <h2>Size verilen hava durumu APİ keyini girmeniz gerek!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <button type="submit">TAMAM</button>
        </form>
      </div>

    </div>
  );
};



export default ApiKeyInput;
