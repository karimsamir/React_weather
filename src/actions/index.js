import axios from 'axios';

const API_KEY = "1513a1fa0d9c85cc87a27b1115cd7026";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";
//http://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b1b15e88fa797225412429c1c50c122a1

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},eg`;
  const request = axios.get(url);

  console.log("request", request);
  
  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
