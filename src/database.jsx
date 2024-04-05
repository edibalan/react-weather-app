const database = [
  {
    units: {
      gust: ' km/h',
      precip: ' mm',
      temp: '°C',
      vis: ' km',
      wind: ' km/h',
    },
    
    values: {
      feels: 'feelslike_c',
      gust: 'gust_kph',
      precip: 'precip_mm',
      temp: 'temp_c',
      vis: 'vis_km',
      wind: 'wind_kph'
    }
  },

  {
    day: 0,
    title: "Today's hourly forecast",
    btnText: "Tomorrow's forecast"
  }
];

export default database;