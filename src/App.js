import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

export default function App(){
  const [name, setName] = useState(""); 
  const [weather, setweather] = useState(null); 
  const apiKey = 'hidden';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiKey}`
  
    
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(url).then((res) => {setweather(res.data)});
    console.log(name); 
  }

  return (
    <form onSubmit={handleSubmit} className = "allPage">
      <div className="searchLine">
        <input value={name} onChange={(e) => setName(e.target.value)} type="search" className="search" />
        <input type="submit" value="Search" />
      </div>
      {weather && 
      <>
        <p>{weather.name.toUpperCase()}, {weather.sys.country}</p>
        <p>
          {weather.main.temp}&deg;<br/>
          {weather.weather[0].main.toUpperCase()}<br/>
          feels like {weather.main.feels_like}&deg;
        </p>
      </>
      }
      
    </form>
  );
}
