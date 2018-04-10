import axios from 'axios';

const API_KEY = '95a15c4dd0de83098b096e3d3ccb85ca';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER_DATA = 'FETCH_WEATHER_DATA';

export function fetchWeatherData(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const requestPromise = axios.get(url);
  return {
    type: FETCH_WEATHER_DATA,
    payload: requestPromise
  };
}
