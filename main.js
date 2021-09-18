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
const sunrise=document.querySelector('.sunrise-time');
const sunset=document.querySelector('.sunset-time');
const search=document.querySelector('.search');
const searchBtn=document.querySelector('.search-btn');
const container=document.querySelector('.container');
const nav=document.querySelector('nav');
const spinner = document.getElementById("spinner1");
const spinner2 = document.getElementById("spinner2");
const spinner3 = document.getElementById("spinner3");
const spinner4 = document.getElementById("spinner4");
const spinner5 = document.getElementById("spinner5");
const spinner6 = document.getElementById("spinner6");
const spinner7 = document.getElementById("spinner7");
const spinner8 = document.getElementById("spinner8");
const spinner9 = document.getElementById("spinner9");
let loc;
let unit;

//event listeners for the buttons

cel.addEventListener('click',async()=>{
    faran.classList.remove('selected');
    cel.classList.add('selected');
    unit='metric';
    let tempValue=await getTemperature()
    temp.textContent=`${tempValue}°C`;
    let feelsLikeText=await getTempFeelsLike();
    feelsLike.textContent=  `Feels Like ${feelsLikeText}°C`;
    detail.textContent=await getTodayWeather();
    description.textContent=await getDescription();
    let maxTempValue=await getMaxTemp();
    maxTemp.textContent=`${maxTempValue}°C`;
    let minTempValue=await getMinTemp();
    minTemp.textContent=`${minTempValue}°C`;
})
faran.addEventListener('click',async()=>{
    cel.classList.remove('selected');
    faran.classList.add('selected');
    unit='imperial';
    let tempValue=await getTemperature()
    temp.textContent=`${tempValue}°F`;
    let feelsLikeText=await getTempFeelsLike();
    feelsLike.textContent=  `Feels Like ${feelsLikeText}°F`;
    detail.textContent=await getTodayWeather();
    description.textContent=await getDescription();
    let maxTempValue=await getMaxTemp();
    maxTemp.textContent=`${maxTempValue}°F`;
    let minTempValue=await getMinTemp();
    minTemp.textContent=`${minTempValue}°F`;
});

async function assignValue() {
	cityName.textContent=await getName();
    icon.src=await getIcon();
    let tempValue=await getTemperature()
    temp.textContent=`${tempValue}°F`;
    let feelsLikeText=await getTempFeelsLike();
    feelsLike.textContent=  `Feels Like ${feelsLikeText}°F`;
    detail.textContent=await getTodayWeather();
    description.textContent=await getDescription();
    let maxTempValue=await getMaxTemp();
    maxTemp.textContent=`${maxTempValue}°F`;
    let minTempValue=await getMinTemp();
    minTemp.textContent=`${minTempValue}°F`;
    let windText=await getWind()
    wind.textContent=`${windText}m/se`;
    let humidityText=await getHumidity();
    humidity.textContent=`${humidityText}g/mᶟ`;
    let pressureText=await getPressure()
    pressure.textContent=`${pressureText}Pa`
    let sunriseTime=await getSunrise();
    sunrise.textContent=`${sunriseTime}Am`;
    let sunsetTime=await getSunset();
    sunset.textContent=`${sunsetTime}Pm`;
};
assignValue();
searchBtn.addEventListener('click',()=>{
    loc=search.value;
    assignValue();
})
async function apiCall(){
    let response= await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cc6eab723af7048e058f86b0e00298e2',{mode: 'cors'});
    console.log(response.json());
}
async function getWeather(location,unit){
    
    try{
        let response;
        let data;
        if(unit=='metric'){
            if(location){
                response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=cc6eab723af7048e058f86b0e00298e2`,{mode: 'cors'});
                data=await response.json();
            }
            else{
                response= await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=cc6eab723af7048e058f86b0e00298e2',{mode: 'cors'});
                data=await response.json();
            }
        }
        else{
            if(location){
                response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=cc6eab723af7048e058f86b0e00298e2`,{mode: 'cors'});
                data=await response.json();
            }
            else{
                response= await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&APPID=cc6eab723af7048e058f86b0e00298e2',{mode: 'cors'});
                data=await response.json();
            }
        }
        return data;
    }
    catch(error){
        
            alert("error");
        
        
    }
    
}
window.onunhandledrejection=function(err){
    const errorMessage=document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent="An error occurred! Try again";
    nav.appendChild(errorMessage);

}
async function getTemperature(){
    spinner.removeAttribute('hidden');
    let data= await getWeather(loc,unit);
    console.log(data);
    const temperature=data.main.temp;
    console.log(temperature);
    spinner.setAttribute('hidden', '');
    return temperature
}
async function getTempFeelsLike(){
    let data= await getWeather(loc,unit);
    const feelsLike=data.main.feels_like;
    console.log(feelsLike);
    return feelsLike;
}
async function getMaxTemp(){ 
    spinner5.removeAttribute('hidden');
    let data= await getWeather(loc,unit);
    const maxTemp=data.main.temp_max;
    console.log(maxTemp);
    spinner5.setAttribute('hidden', '');
    return maxTemp;
}
async function getMinTemp(){
    spinner6.removeAttribute('hidden');
    let data= await getWeather(loc,unit);
    const minTemp=data.main.temp_min;
    console.log(minTemp);
    spinner6.setAttribute('hidden', '');
    return minTemp;
}
async function getWind(){
    spinner7.removeAttribute('hidden');
    let data= await getWeather(loc,'metric');
    const wind=data.wind.speed;
    console.log(wind);
    spinner7.setAttribute('hidden', '');
    return wind;
}
async function getHumidity(){
    spinner8.removeAttribute('hidden');
    let data= await getWeather(loc,'metric');
    const humidity=data.main.humidity;
    console.log(humidity);
    spinner8.setAttribute('hidden', '');
    return humidity;
}
async function getPressure(){
    spinner9.removeAttribute('hidden');
    let data= await getWeather(loc,'metric');
    const pressure=data.main.pressure;
    console.log(pressure);
    spinner9.setAttribute('hidden', '');
    return pressure;
}
async function getTodayWeather(){
    spinner2.removeAttribute('hidden');
    let data= await getWeather(loc,unit);
    const weather=data.weather[0].main;
    console.log(weather);
    spinner2.setAttribute('hidden', '');
    return weather;
}
async function getDescription(){
    let data= await getWeather(loc,unit);
    const desc=data.weather[0].description;
    console.log(desc);
    return desc;
}
async function getIcon(){
    let data= await getWeather(loc,unit);
    const icon=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    return icon;
}
async function getName(){
    let data= await getWeather(loc,unit);
    const cityName=data.name;
    const countryName=data.sys.country;
    console.log(cityName);
    console.log(countryName);
    return cityName+', '+countryName;
}
async function getSunrise(){
    spinner3.removeAttribute('hidden');
    let data= await getWeather(loc,unit);
    let sunrise = data.sys.sunrise;
    let date = new Date(sunrise * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let formattedTime = hours + ':' + minutes.substr(-2);
    console.log(formattedTime);
    spinner3.setAttribute('hidden', '');
    return formattedTime;
}
async function getSunset(){
    spinner4.removeAttribute('hidden');
    let data= await getWeather(loc,unit);
    let sunrise = data.sys.sunset;
    let date = new Date(sunrise * 1000);
    let hours = date.getHours()-12;
    let minutes = "0" + date.getMinutes();
    let formattedTime = hours + ':' + minutes.substr(-2);
    console.log(formattedTime);
    spinner4.setAttribute('hidden', '');
    return formattedTime;
}

window.onload= function(){
    faran.classList.add('selected');
}