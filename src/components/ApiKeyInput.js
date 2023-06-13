import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApi } from "../features/weather/weatherSlice";
import {lgn} from "../styles/login.css"
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
    <div className='container'>

      <div className='login'>
        <h2>Size verilen hava durumu APİ keyini girmeniz lazım</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      </div>

    </div>
  );
};



export default ApiKeyInput;
