import {WeatherSchema} from "./schemas/weatherScema.ts";

const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWeather({lat, lon}: {lat:number, lon: number}){
    const res = await fetch( `https://api.weatherapi.com/v1/forecast.json?` +
        `key=${API_KEY}&q=${lat},${lon}&lang=en&days=14`)
    const data = await res.json();
    return WeatherSchema.parse(data);
}

