
async function apiCall(){
    let response= await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cc6eab723af7048e058f86b0e00298e2',{mode: 'cors'});
    console.log(response.json());
}
async function getWeather(location){
    let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=cc6eab723af7048e058f86b0e00298e2`,{mode: 'cors'});
    let data=await response.json();
    console.log(data);
    return data;
}
async function getTemp(){
    let data= await getWeather('addis ababa');
    const temperature=data.main.temp;
    console.log(temperature);
}
// async function getWeather(){}
// async function getWeather(){}
// async function getWeather{}
// async function getWeather{}
// async function getWeather{}
// async function getWeather{}

getWeather('gonder');
getTemp();