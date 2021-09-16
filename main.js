const body=document.querySelector('body');
async function apiCall(){
    let response= await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cc6eab723af7048e058f86b0e00298e2',{mode: 'cors'});
    console.log(response.json());
}
async function getWeather(location){
    let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=cc6eab723af7048e058f86b0e00298e2`,{mode: 'cors'});
    let data=await response.json();
    //console.log(data);
    return data;
}
async function getTemperature(){
    let data= await getWeather('addis ababa');
    console.log(data);
    const temperature=data.main.temp;
    console.log(temperature);
}
async function getTempFeelsLike(){
    let data= await getWeather('addis ababa');
    const feelsLike=data.main.feels_like;
    console.log(feelsLike);
}
async function getMaxTemp(){
    let data= await getWeather('addis ababa');
    const maxTemp=data.main.temp_max;
    console.log(maxTemp);
}
async function getMinTemp(){
    let data= await getWeather('addis ababa');
    const minTemp=data.main.temp_min;
    console.log(minTemp);
}
async function getHumidity(){
    let data= await getWeather('addis ababa');
    const humidity=data.main.humidity;
    console.log(humidity);
}
async function getPressure(){
    let data= await getWeather('addis ababa');
    const pressure=data.main.pressure;
    console.log(pressure);
}
async function getTodayWeather(){
    let data= await getWeather('addis ababa');
    const weather=data.weather[0].main;
    console.log(weather);
}
async function getIcon(){
    let data= await getWeather('addis ababa');
    const img=document.createElement('img');
    img.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    body.appendChild(img);
}
async function getName(){
    let data= await getWeather('addis ababa');
    const name=data.name;
    console.log(name);
}


getTemperature();
getTempFeelsLike();
getMaxTemp();
getMinTemp();
getHumidity();
getPressure();
getTodayWeather();
getIcon();
getName();