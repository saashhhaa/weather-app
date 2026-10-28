import Card from "./Card.tsx";
import {useSuspenseQuery} from "@tanstack/react-query";
import {getWeather} from "../../api.ts";
import {lat, lon} from "../../latLon.ts";

export default function HourlyForecast() {

    const {data} = useSuspenseQuery({
        queryKey: ['weather'],
        queryFn: () => getWeather({lat: lat, lon:lon})
    })

    return (

        <Card title='Hourly Forecast' childClassName='flex flex-row gap-8 overflow-x-scroll '>
            <div className='flex flex-row gap-8  p-6 border-gray-500/50 border-1 rounded-lg'>
                {data.forecast.forecastday.flatMap(day =>  day.hour).slice(0,24).map(
                    (hour, _) => (
                        <div key={_} className='flex flex-col gap-2 items-center'>
                            <p className='text-gray-500'>{(hour.time).slice(-5)}</p>
                            <img src={hour.condition.icon} alt=""/>
                            <p>{Math.round(hour.temp_c)}°C</p>

                        </div>
                    )
                )

                }
            </div>
            <div className='flex flex-row gap-8   p-6 border-gray-500/50 border-1 rounded-lg'>
                {data.forecast.forecastday.flatMap(day =>  day.hour).slice(24,48).map(
                    (hour, _) => (
                        <div key={_} className='flex flex-col gap-2 items-center'>
                            <p className='text-gray-500'>{(hour.time).slice(-5)}</p>
                            <img src={hour.condition.icon} alt=""/>
                            <p>{Math.round(hour.temp_c)}°C</p>

                        </div>
                    )
                )

                }
            </div>

        </Card>
    );
};