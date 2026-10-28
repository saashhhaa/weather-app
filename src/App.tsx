
import './App.css'
import DailyForecast from "./components/cards/DailyForecast.tsx";
import HourlyForecast from "./components/cards/HourlyForecast.tsx";
import CurrentWeather from "./components/cards/CurrentWeather.tsx";
import AdditionalInfo from "./components/cards/AdditionalInfo.tsx";

function App() {

  return (
    <div className='flex flex-col'>
        <CurrentWeather/>
        <HourlyForecast/>
        <div className='flex'>
            <DailyForecast/>
            <AdditionalInfo/>
        </div>


    </div>
  )
}

export default App
