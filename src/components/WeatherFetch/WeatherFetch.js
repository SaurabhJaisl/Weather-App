import React, { useState } from "react";
import './weatherFetch.css'


const WeatherFetch = () => {

  const [getData, setData] = useState({});
  const [errMsg, seterrMsg] = useState('');
  const [classes, setClass] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.weatherapi.com/v1/current.json?key=c8730c4d4a7244cd9c7135105220604&q=${e.target.city.value}`)
      .then(res => res.json())
      .then(result => {
        if (result != '') {
          setData(result)
        }
        if (result && result.error && result.error.message) {
          seterrMsg('No city found...');
          setClass('errMsg')
        }else {
          seterrMsg('')
          setClass('')
        }
      })
  }
  return (
    <div className="weather_app">
      <div className="container">
        <div className="weather_head">
          <h1>Weather Forecast</h1>
          <form onSubmit={submitHandler}>
            <div className="control">
              <input type={'text'} name='city' placeholder="Enter City" required/>
              <button type="submit">See Forecast</button>
              <p className={classes}>{errMsg}</p>
            </div>
          </form>
        </div>
        {getData.location != undefined &&

          <div className="weather_list">
            <div className="weather_list_inner">
              <div className="location">
                <span>
                  <img src={getData.current.condition.icon} alt={getData.current.condition.text} />
                  <p>{getData.current.condition.text}</p>
                </span>
                <span>{`${getData.location.name}, ${getData.location.region},  ${getData.location.country}`}</span></div>
              <div className="current_temp">
                <div className="other_info">
                  <span>Humidity: {getData.current.humidity}%</span>
                </div>
                <h2>{getData.current.temp_c}°c</h2>
                <div className="other_info">
                  <span>Wind: {getData.current.wind_kph} kph</span>
                </div>
              </div>
              <div className="temp"><p>Feels like {getData.current.feelslike_c}°c</p></div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default WeatherFetch