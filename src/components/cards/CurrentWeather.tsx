import Card from "./Card.tsx";
import {useSuspenseQuery} from "@tanstack/react-query";
import {getWeather} from "../../api.ts";
import InfoBox from "./InfoBox.tsx";
import {lat, lon} from "../../latLon.ts";
import dropIcon from '../../assets/icons/drop.svg';
import windIcon from '../../assets/icons/wind.svg';

export default function CurrentWeather() {

    const {data} = useSuspenseQuery({
        queryKey: ['weather'],
        queryFn: () => getWeather({lat: lat, lon:lon})
    })

    const formatHourDiff = () => {
        const currHours = Number(new Date().toLocaleTimeString().slice(0, 2))
        const localHours = Number(data.location.localtime.slice(11, 13))
        const diff = localHours- currHours
        if(diff==0) return;
        if(diff<0) return diff;
        else if (diff> 0 ) return '+'+diff;
    }

    return (

        <Card title={JSON.stringify(data?.location.name).slice(1,-1)} childClassName='flex flex-col gap-4 items-center'>
            <div className='flex gap-3'>
                <p className='text-gray-500'>{(data.location.localtime).slice(-5)}</p>
                <span className='text-gray-500'>{formatHourDiff()}</span>
            </div>

            <h1 className='text-8xl font-bold'>
                {Math.round(data.current.temp_c)}
                <span className=' text-gray-500 text-5xl'>
                °C
            </span>
            </h1>
            <div className='flex flex-col items-center'>
                <img className='size-20' src={data.current.condition.icon} alt=""/>
                <p className='text-xl'>{data.current.condition.text}</p>
            </div>


            <div className='flex flex-row gap-4 items-center mt-5'>
                <InfoBox title='feels like' descr={`${String(Math.round(data.current.feelslike_c))}°C`}/>
                <InfoBox icon={windIcon} title='wind speed' descr={`${String(data.current.wind_kph)}mph`}/>
                <InfoBox icon={dropIcon} title='humidity' descr={`${String(data.current.humidity)}%`}/>
            </div>
        </Card>
    );
};

