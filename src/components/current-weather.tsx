import type {GeocodingResponse, WeatherData} from "@/api/types"

interface CurrentWeatherProps{
  data:WeatherData,
  locationName?:GeocodingResponse
}

const CurrentWeather = ({data,location}: CurrentWeatherProps) => {
  return (
    <div>CurrentWeather</div>
  )
}

export default CurrentWeather