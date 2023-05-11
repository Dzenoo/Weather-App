import React, { useState } from "react";
import "./App.css";

const API_KEY = "6dbe1a97e872bf79ee409ba9b2378c53";
const URL = "https://api.openweathermap.org/data/2.5";

const App = () => {
  const [city, setcity] = useState("Novi Pazar");
  //   const [isLoading, setisLoading] = useState(false);
  const [data, setdata] = useState();

  //   useEffect(() => {
  //     setisLoading(true);
  //     const fetchWeather = async () => {
  //       const response = await fetch(URL2);
  //       const responseData = await response.json();
  //       setdata(responseData);
  //       setisLoading(false);
  //     };
  //     fetchWeather();
  //   }, []);

  const fetchByCity = async () => {
    const response = await fetch(`${URL}/weather/?q=${city}&appid=${API_KEY}`);
    setdata(await response.json());
  };

  //   if (isLoading || !data) {
  //     return <p>Loading...</p>;
  //   }

  return (
    <>
      <input type="text" onChange={(e) => setcity(e.target.value)} />
      <button onClick={fetchByCity}>Fetch By City</button>
      <div className="list">
        {data && (
          <div className="card">
            <h1>{data.name}</h1>
            <h2>{data.weather[0].main}</h2>
            <h2>{data.weather[0].description}</h2>
            <img
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt="icon"
            />
            <p>Clouds: {data.clouds.all}</p>
            <p>Wind: {data.wind.speed}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
