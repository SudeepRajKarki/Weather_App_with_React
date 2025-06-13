import React,{useState,useEffect} from "react";
const API_KEY = "38e3d3fd7d0e407092a153758250506"; 
function Weather(){
    
    const [city, setCity] = useState('');
      const [weather, setWeather] = useState(null);
      const [error, setError] = useState('');
    
      const fetchWeather = async () => {
        if (!city) return;
    
        try {
          setError('');
          setWeather(null);
    
          const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
          );
    
          const data = await res.json();
    
          if (data.error) {
            throw new Error(data.error.message);
          }
    
          setWeather(data);
        } catch (err) {
          setError(err.message);
        }
      };
    
      return (
        <div className="app">
          <h1>Weather App</h1>
          <div className="input-group">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
    </div>
    
    
          {error && <p style={{ color: 'red' }}>{error}</p>}
    
          {weather && (
            <div className="weather-info">
              <h2>{weather.location.name}, {weather.location.country}</h2>
              <p>{weather.current.condition.text}</p>
              <p>Temperature: {weather.current.temp_c}°C</p>
              <img
                src={weather.current.condition.icon}
                alt="weather icon"
              />
            </div>
          )}
        </div>
      );
}
export default Weather;