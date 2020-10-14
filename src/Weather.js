import React,{useState,useEffect} from 'react';


const Weather = ()=>{
    const [weather,setWeather]=useState({city:null, currentWeather:null})


    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      const API_KEY  = '09a64b62dcf8793223e05b1363f568aa';
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
          setWeather({...weather,city:data.name,currentWeather:data.weather[0].main})
        })
    })
},[])

    return weather.city===null ? <></> : <span className ="weathers">{weather.city}, {weather.currentWeather} now!</span>
}

export default Weather


