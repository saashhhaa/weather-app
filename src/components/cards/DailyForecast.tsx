import Card from "./Card.tsx";
import {useSuspenseQuery} from "@tanstack/react-query";
import {getWeather} from "../../api.ts";
// import {useState} from "react";

export default function DailyForecast() {

    // const [val, setVal] = useState<{lat:string; lon:string}>({lat: '0', lon: '0'})
    // const {data} = useSuspenseQuery({
    //     queryKey: ['weather', val],
    //     queryFn: () => getWeather({lat: Number(val.lat) || 0, lon:Number(val.lon)})
    // })
    const {data} = useSuspenseQuery({
        queryKey: ['weather'],
        queryFn: () => getWeather({lat: 64, lon:64})
    })

    return (

            <Card title='Daily Forecast' childClassName='flex flex-col gap-4'>
                {data?.forecast.forecastday.map(day => (
                    <div key={day.date_epoch} className='flex justify-between'>
                        <p className='w-9'>{(new Date(day.date_epoch * 1000).toLocaleDateString(undefined, {
                            weekday: "short"
                        })).toUpperCase()}</p>
                        <p className='flex items-center flex-row gap-2'>{day.day.condition.text}<img src={day.day.condition.icon} alt="" className='size-10'/></p>

                        <p>{Math.round(day.day.avgtemp_c)}°C</p>
                        <p className='text-gray-500/70'>{Math.round(day.day.maxtemp_c)}°C</p>
                        <p className='text-gray-500/70'>{Math.round(day.day.mintemp_c)}°C</p>
                    </div>
                ))}
        </Card>
    );
};

{/*<div>{data.location.name}</div>*/}
{/*<input type="text" placeholder='lat' value={val.lat} onChange={(e)=>setVal(prev => ({*/}
{/*    ...prev,*/}
{/*    lat: e.target.value}))}/>*/}
{/*<input type="text" placeholder='lon' value={val.lon} onChange={(e)=>setVal(prev => ({*/}
{/*    ...prev,*/}
{/*    lon: e.target.value}))}/>*/}