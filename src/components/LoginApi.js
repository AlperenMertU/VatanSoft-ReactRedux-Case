import React from 'react';
import { connect } from 'react-redux';
import { setApiKey } from '../store/actions/setApiKey';
import Input from '@mui/material/Input';

    
const LoginApi = ({ apiKey, setApiKey }) => {
    const handleApiKeySubmit = (event) => {
        event.preventDefault();
        const apiKey = event.target.apiKey.value;
        setApiKey(apiKey);
      };
  
    return (
        <form onSubmit={handleApiKeySubmit}>
         <Input/>
        </form>
    );

};


export default LoginApi;
