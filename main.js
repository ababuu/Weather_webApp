const faran=document.querySelector('.F-btn');
const cel=document.querySelector('.C-btn');
const cityName=document.querySelector('.city-name');
const icon=document.querySelector('.icon');
const temp=document.querySelector('.temp');
const feelsLike=document.querySelector('.feels-like');
const detail=document.querySelector('.detail');
const maxTemp=document.querySelector('.max-value');
const minTemp=document.querySelector('.min-value');
const wind=document.querySelector('.wind-value');
const humidity=document.querySelector('.humidity-value');
const pressure=document.querySelector('.pressure-value');
const description=document.querySelector('.description');
//event listeners for the buttons
cel.addEventListener('click',()=>{
    faran.classList.remove('selected');
    cel.classList.add('selected');
})
faran.addEventListener('click',()=>{
    cel.classList.remove('selected');
    faran.classList.add('selected');
});

(async function() {
	cityName.textContent=await getName();
    icon.src=await getIcon();
    temp.textContent=await getTemperature();
    let feelsLikeText=await getTempFeelsLike();
    feelsLike.textContent=  `Feels Like ${feelsLikeText}`;
    detail.textContent=await getTodayWeather();
    description.textContent=await getDescription();
    maxTemp.textContent=await getMaxTemp();
    minTemp.textContent=await getMinTemp();
    wind.textContent=await getWind();
    humidity.textContent=await getHumidity();
    pressure.textContent=await getPressure();

})();

async function apiCall(){
    let response= await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cc6eab723af7048e058f86b0e00298e2',{mode: 'cors'});
    console.log(response.json());
}
async function getWeather(location){
    let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=cc6eab723af7048e058f86b0e00298e2`,{mode: 'cors'});
    let data=await response.json();
    return data;
}
async function getTemperature(){
    let data= await getWeather('addis ababa');
    console.log(data);
    const temperature=data.main.temp;
    console.log(temperature);
    return temperature
}
async function getTempFeelsLike(){
    let data= await getWeather('addis ababa');
    const feelsLike=data.main.feels_like;
    console.log(feelsLike);
    return feelsLike;
}
async function getMaxTemp(){
    let data= await getWeather('addis ababa');
    const maxTemp=data.main.temp_max;
    console.log(maxTemp);
    return maxTemp;
}
async function getMinTemp(){
    let data= await getWeather('addis ababa');
    const minTemp=data.main.temp_min;
    console.log(minTemp);
    return minTemp;
}
async function getWind(){
    let data= await getWeather('addis ababa');
    const wind=data.wind.speed;
    console.log(wind);
    return wind;
}
async function getHumidity(){
    let data= await getWeather('addis ababa');
    const humidity=data.main.humidity;
    console.log(humidity);
    return humidity;
}
async function getPressure(){
    let data= await getWeather('addis ababa');
    const pressure=data.main.pressure;
    console.log(pressure);
    return pressure;
}
async function getTodayWeather(){
    let data= await getWeather('hawassa');
    const weather=data.weather[0].main;
    console.log(weather);
    return weather;
}
async function getDescription(){
    let data= await getWeather('hawassa');
    const desc=data.weather[0].description;
    console.log(desc);
    return desc;
}
async function getIcon(){
    let data= await getWeather('addis ababa');
    const icon=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    return icon;
}
async function getName(){
    let data= await getWeather('addis ababa');
    const name=data.name;
    console.log(name);
    return name;
}
async function getSunrise(){
    let data= await getWeather('addis ababa');
    let sunrise = data.sys.sunrise;
    let date = new Date(sunrise * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let formattedTime = hours + ':' + minutes.substr(-2);
    console.log(formattedTime);
    return formattedTime;
}
async function getSunset(){
    let data= await getWeather('addis ababa');
    let sunrise = data.sys.sunset;
    let date = new Date(sunrise * 1000);
    let hours = date.getHours()-12;
    let minutes = "0" + date.getMinutes();
    let formattedTime = hours + ':' + minutes.substr(-2);
    console.log(formattedTime);
    return formattedTime;
}

getTemperature();
