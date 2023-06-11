import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../features/weather/weatherSlice'
import sayfaReducer from '../features/hideandseek/sayfaSlice';

export default configureStore({
  reducer: {
    hava: weatherReducer,
    hide: sayfaReducer,
  }
})

