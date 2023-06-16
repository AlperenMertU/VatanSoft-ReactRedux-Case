import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select'
import {} from './styles/harita.module.css'
const Harita = () => {
  const weather = useSelector(state => state.hava.key);
  const [il, setIl] = useState(null);
  const [ilDeger, setIlDeger] = useState(null);
  var iller = [
    { value: 'adana', label: 'adana' },
    { value: 'adıyaman', label: 'Adıyaman' },
    { value: 'afyonkarahisar', label: 'Afyonkarahisar' },
    { value: 'ağrı', label: 'Ağrı' },
    { value: 'amasya', label: 'Amasya' },
    { value: 'ankara', label: 'Ankara' },
    { value: 'antalya', label: 'Antalya' },
    { value: 'artvin', label: 'Artvin' },
    { value: 'aydın', label: 'Aydın' },
    { value: 'balıkesir', label: 'Balıkesir' },
    { value: 'bilecik', label: 'Bilecik' },
    { value: 'bingöl', label: 'Bingöl' },
    { value: 'bitlis', label: 'Bitlis' },
    { value: 'bolu', label: 'Bolu' },
    { value: 'burdur', label: 'Burdur' },
    { value: 'bursa', label: 'Bursa' },
    { value: 'çanakkale', label: 'Çanakkale' },
    { value: 'çankırı', label: 'Çankırı' },
    { value: 'çorum', label: 'Çorum' },
    { value: 'denizli', label: 'Denizli' },
    { value: 'diyarbakır', label: 'Diyarbakır' },
    { value: 'edirne', label: 'Edirne' },
    { value: 'elazığ', label: 'Elazığ' },
    { value: 'erzincan', label: 'Erzincan' },
    { value: 'erzurum', label: 'Erzurum' },
    { value: 'eskişehir', label: 'Eskişehir' },
    { value: 'gaziantep', label: 'Gaziantep' },
    { value: 'giresun', label: 'Giresun' },
    { value: 'gümüşhane', label: 'Gümüşhane' },
    { value: 'hakkari', label: 'Hakkari' },
    { value: 'hatay', label: 'Hatay' },
    { value: 'ısparta', label: 'Isparta' },
    { value: 'mersin', label: 'Mersin' },
    { value: 'istanbul', label: 'İstanbul' },
    { value: 'izmir', label: 'İzmir' },
    { value: 'kars', label: 'Kars' },
    { value: 'kastamonu', label: 'Kastamonu' },
    { value: 'kayseri', label: 'Kayseri' },
    { value: 'kırklareli', label: 'Kırklareli' },
    { value: 'kırşehir', label: 'Kırşehir' },
    { value: 'kocaeli', label: 'Kocaeli' },
    { value: 'konya', label: 'Konya' },
    { value: 'kütahya', label: 'Kütahya' },
    { value: 'malatya', label: 'Malatya' },
    { value: 'manisa', label: 'Manisa' },
    { value: 'kahramanmaraş', label: 'Kahramanmaraş' },
    { value: 'mardin', label: 'Mardin' },
    { value: 'muğla', label: 'Muğla' },
    { value: 'muş', label: 'Muş' },
    { value: 'nevşehir', label: 'Nevşehir' },
    { value: 'niğde', label: 'Niğde' },
    { value: 'ordu', label: 'Ordu' },
    { value: 'rize', label: 'Rize' },
    { value: 'sakarya', label: 'Sakarya' },
    { value: 'samsun', label: 'Samsun' },
    { value: 'siirt', label: 'Siirt' },
    { value: 'sinop', label: 'Sinop' },
    { value: 'sivas', label: 'Sivas' },
    { value: 'tekirdağ', label: 'Tekirdağ' },
    { value: 'tokat', label: 'Tokat' },
    { value: 'trabzon', label: 'Trabzon' },
    { value: 'tunceli', label: 'Tunceli' },
    { value: 'şanlıurfa', label: 'Şanlıurfa' },
    { value: 'uşak', label: 'Uşak' },
    { value: 'van', label: 'Van' },
    { value: 'yozgat', label: 'Yozgat' },
    { value: 'zonguldak', label: 'Zonguldak' },
    { value: 'aksaray', label: 'Aksaray' },
    { value: 'bayburt', label: 'Bayburt' },
    { value: 'karaman', label: 'Karaman' },
    { value: 'kırıkkale', label: 'Kırıkkale' },
    { value: 'batman', label: 'Batman' },
    { value: 'şırnak', label: 'Şırnak' },
    { value: 'bartın', label: 'Bartın' },
    { value: 'ardahan', label: 'Ardahan' },
    { value: 'ığdır', label: 'Iğdır' },
    { value: 'yalova', label: 'Yalova' },
    { value: 'karabük', label: 'Karabük' },
    { value: 'kilis', label: 'Kilis' },
    { value: 'osmaniye', label: 'Osmaniye' },
    { value: 'düzce', label: 'Düzce' }
  ];

  useEffect(() => {
    const makeAPIRequest = async () => {
      try {
        if (il) {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${il.value}&appid=${weather}`);
          const data = response.data;
          setIlDeger(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    makeAPIRequest();
  }, [weather, il]);

  let celsius = null

  if (ilDeger) {
    celsius = (ilDeger.main.temp - 273.15).toFixed(0)
  }
  //tekrar apı girdikten sonra hata alıyorum. ama api gilirmişse ve şehir seçilmişse ahata lamıyorum bu sornu çöz
  return (
    <div className='container'>
      <div className='city'>
        <Select options={iller} onChange={(e) => setIl(e)} />
      </div>

      <div className='weatherElementz'>
        {ilDeger && (
          <div className='temp'>
          <p>sıcaklık:12313 {celsius}°C</p>
          </div>
        )}

        <div className='temp2'>
        <p>sıcaklık:12313°C</p>
        </div>

      </div>

    </div>
  )

}

export default Harita;
