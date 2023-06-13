import './App.css';
import {React}  from 'react'
import ApiKeyInput from './components/ApiKeyInput';
import Harita from './components/Harita';
import { useSelector } from 'react-redux';


function App() {
  const hide = useSelector(state => state.hide.key)
  /*
  localStorage.setItem("1", hide);
  let local = localStorage.getItem("1")
  console.log(local);
  */
  return (
    <div className='App'>

    {
       hide ? <Harita/>  : <ApiKeyInput/> 
    }

  
    </div>
  );
}

export default App;
