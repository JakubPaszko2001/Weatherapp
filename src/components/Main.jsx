import React, { useState } from 'react'
import './Main.css'
import { BsSearch } from 'react-icons/bs'
import { FaWind } from 'react-icons/fa'
import { TbTemperature } from 'react-icons/tb'
import { IoIosSunny } from 'react-icons/io'
import { GiWaterDrop } from 'react-icons/gi'






// function go() {
//   fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)
//     .then(res => res.json())
//     .then(data => setWeather(data));
//     console.log(weather)
// }


const Main = () => {

const api = {
    key: "d0e7f53c0b4dca3cef0b6c4a16b86a2b",
    base: "https://api.openweathermap.org/data/2.5/"
}

const [search, setSearch] = useState('');
const [weather, setWeather] = useState({});

const data = evt => {
    if (evt.key === "Enter"){
        fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)
            .then(res => res.json())
            .then(result => {
                setSearch('');
                setWeather(result);
                console.log(result)
            });
    }
}

  return (
    <div className='container'>
        <div className='searchBar center'>
            <input placeholder='Search...'
            id='search'
            onChange={e => setSearch(e.target.value)}
            value={search}
            onKeyPress={data}
            />

            {/* <BsSearch size={30}/> */}
        </div>
        {(typeof weather.main != "undefined") ? (
        <div className='space'>
            <div className='city center'>
                <h1>{weather.name}</h1>
            </div>
            <div className='icon center'>
                {/* <IoIosSunny size={120}/> */}
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon"></img>
            </div>
            <div className='temp center'>
                <h1>{Math.round(weather.main.temp)}°</h1>
            </div>
            <div className='weather center'>
                <h1>{weather.weather[0].main}</h1>
            </div>
            <div className='stats'>
                <div className='wind row'>
                    <FaWind size={30}/>
                    <h1>{Math.round(weather.wind.speed)}</h1>
                    <h1>km/h</h1>
                </div>
                <div className='humidity row'>
                    <GiWaterDrop size={30} />
                    <h1>{weather.main.humidity}</h1>
                    <h1>%</h1>
                </div>
                <div className='feel row'>
                    <TbTemperature size={40}/>
                    <h1>{Math.round(weather.main.feels_like)}</h1>
                    <h1>°</h1>
                </div>
            </div>
            {/* <div className='days'>
                <div className='daysContainer'>
                    <div className='around'>
                        <h1>pon</h1>
                        <IoIosSunny size={50}/>
                        <h1>32°</h1>
                    </div>
                    <div className='around'>
                        <h1>pon</h1>
                        <IoIosSunny size={50}/>
                        <h1>32°</h1>
                    </div>
                    <div className='around'>
                        <h1>pon</h1>
                        <IoIosSunny size={50}/>
                        <h1>32°</h1>
                    </div>
                    <div className='around'>
                        <h1>pon</h1>
                        <IoIosSunny size={50}/>
                        <h1>32°</h1>
                    </div>
                </div>
            </div> */}
        </div>
        ) : ('')}
    </div>
  )
}

export default Main