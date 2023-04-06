const button = document.querySelector('button');
const weatherInput = document.querySelector('input');
const cityName = document.getElementById('cityName');
const temp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weatherIcon');
const apiKey = '283bbfafc7914369aac221608230504';
const textDiv = document.querySelector('.text');

//pulls weather data and logs to the console
const getWeather = async () => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName.value}&aqi=yes`);
    const weatherData = await response.json();
    console.log(weatherData);
  } catch(error) {
    console.error(error);
  }
};

//initial call to getWeather to log data to console
getWeather();

//adds event listener to button to fetch weather data and display it on the page
button.addEventListener('click', async () => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${weatherInput.value}&aqi=yes`);
    const weatherData = await response.json();
    const temperature = weatherData.current.temp_c;
    temp.textContent = `The temperature is ${temperature} degrees Celsius.`;
    const weatherIconUrl = `http:${weatherData.current.condition.icon}`;
    weatherIcon.setAttribute('src', weatherIconUrl);
    weatherIcon.setAttribute('alt', weatherData.current.condition.text);
  } catch(error) {
    console.error(error);
  }
});
