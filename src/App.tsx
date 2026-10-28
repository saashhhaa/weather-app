
import './App.css'
import {useQuery} from "@tanstack/react-query";
import {getWeather} from "./api.ts";
import Card from "./components/cards/Card.tsx";
import DailyForecast from "./components/cards/DailyForecast.tsx";
import HourlyForecast from "./components/cards/HourlyForecast.tsx";

function App() {
const {data} = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 64, lon:64})
})
  return (
    <div className='flex flex-col gap-8'>

        <DailyForecast/>
        <Card title='Current'>{JSON.stringify(data?.current.temp_c)}</Card>

        <Card title='Location'>{JSON.stringify(data?.location.name)}</Card>
        <HourlyForecast/>

    </div>
  )
}

export default App
