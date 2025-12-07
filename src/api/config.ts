export const API_CONFIG = {

    BASE_URL:"https://api.openweathermap.org/data/2.5",
    GEO:"http://api.openwethermap.org/geo/1.0",
    Api_KEY:import.meta.env.KLIMATE_API_KEY,
    DEFAULT_PARAMS:{
      units:"matric",
      appid:import.meta.env.KLIMATE_API_KEY,
    },
};