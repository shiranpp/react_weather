import axios from 'axios';

const API_KEY = "62782371bfcb55b24014d6b44243d1ae";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;
const FETCH_WEATHER = 'FETCH_WAETHER';
function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };


}
export {fetchWeather, FETCH_WEATHER};