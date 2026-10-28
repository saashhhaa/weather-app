import Card from "./Card.tsx";
import {useSuspenseQuery} from "@tanstack/react-query";
import {getWeather} from "../../api.ts";

export default function HourlyForecast() {

    const {data} = useSuspenseQuery({
        queryKey: ['weather'],
        queryFn: () => getWeather({lat: 64, lon:64})
    })

    return (

        <Card title='Hourly Forecast' childClassName='flex flex-row gap-8 overflow-x-scroll'>
            {data.forecast.forecastday.flatMap(day =>  day.hour).slice(0,48).map(
                    (hour, _) => (
                        <div key={_} className='flex flex-col gap-2 items-center'>
                            <p>{(hour.time).slice(-5)}</p>
                            <img src={hour.condition.icon} alt=""/>
                            <p>{Math.round(hour.temp_c)}°C</p>

                        </div>
                    )
                )

            }
        </Card>
    );
};