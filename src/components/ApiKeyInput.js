import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getApi} from "../features/weather/weatherSlice";

const ApiKeyInput = () => {
  const [apiKey, setApiKey] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getApi(apiKey)); //weatherSlice da gelen apikey
    setApiKey('');
  };
  console.log(apiKey);
  return ( 
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ApiKeyInput;
