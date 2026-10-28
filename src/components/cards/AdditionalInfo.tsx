import Card from "./Card.tsx";
import {useSuspenseQuery} from "@tanstack/react-query";
import {getWeather} from "../../api.ts";
import cloudIcon from '../../assets/icons/cloud.svg';
import eyeIcon from '../../assets/icons/eye.svg';
import moonIcon from '../../assets/icons/moon.svg';
import sunIcon from '../../assets/icons/sun.svg';
import sunRiseIcon from '../../assets/icons/sunrise.svg';
import sunSetIcon from '../../assets/icons/sunset.svg';

import {lat, lon} from "../../latLon.ts";

export default function AdditionalInfo() {

    const {data} = useSuspenseQuery({
        queryKey: ['weather'],
        queryFn: () => getWeather({lat: lat, lon:lon})
    })
    const infoList = [
        {
            icon: cloudIcon,
            label:'cloudiness',
            value:data.current.cloud
        },
        {
            icon: eyeIcon,
            label:'visibility',
            value:data.current.vis_km
        },
        {
            icon: sunIcon,
            label:'uv index',
            value: data.current.uv
        },

        {
            icon: sunRiseIcon,
            label:'sunrise',
            value: data.forecast.forecastday.flatMap(day => day.astro).slice(0,1).map(astro => astro.sunrise)
        },
        {
            icon: sunSetIcon,
            label:'sunset',
            value: data.forecast.forecastday.flatMap(day => day.astro).slice(0,1).map(astro => astro.sunset)
        },
        {
            icon: moonIcon,
            label:'moon phase',
            value: data.forecast.forecastday.flatMap(day => day.astro).slice(0,1).map(astro => astro.moon_phase)
        },

    ]

    return (

        <Card title='Additional Info' childClassName=' grid grid-cols-2 gap-4 w-full'>
            {infoList.map((item, index) => (
                <div key={index} className=' flex gap-4 justify-between p-2 border-gray-500/50 border-1 rounded-lg items-center'>
                    <div className='flex gap-2 items-center'>
                        <img className='size-5 opacity-50' src={item.icon} alt=""/>
                        <p className='text-gray-500'>{item.label}</p>
                    </div>
                    <p>{item.value}</p>
                </div>
            ))}
        </Card>
    );
};

