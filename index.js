//api call  http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

// api key= 502541642a897e0860be6adb8ea4f6ae

const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const weatherBox=document.querySelector('.weather-box');
const weatherDetails=document.querySelector('.weather-details');
const APIKey= '502541642a897e0860be6adb8ea4f6ae';


search.addEventListener('click', () => {
    const city = document.getElementById('search').value;
    console.log(city);
    if(city==''){
    console.log("City boş");
    return;
}
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}&lang=tr`)
.then(response => response.json())
.then(json => {
    const image = document.querySelector('.weather-box img');
    const temperature= document.querySelector('.weather-box .temperature');
    const description= document.querySelector('.weather-box .description');
    const humidity= document.querySelector('.weather-details .humidity span');
    const wind= document.querySelector('.weather-details .wind span');
    console.log(json.weather[0].main);
    switch(json.weather[0].main){
        case 'Clear':
            image.src="images/clear.png";

            break;
        case 'Rain':
            image.src="images/rain.png";
            break;
        case 'Clouds':
            image.src="images/cloud.png";
            break;
        case 'Snow':
            image.src="images/snow.png";
            break;
        case 'Mist':
            image.src="images/mist.png";
            break;
        default:
                image.src = '';
                break;
    }

    
    temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
    description.innerHTML = `${json.weather[0].description}`;
    humidity.innerHTML = `${json.main.humidity} %`;
    wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;
    weatherBox.classList.add('fadeIn');
    weatherDetails.classList.add('fadeIn');
    container.style.height = '590px';



});

})