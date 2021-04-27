
console.log(4+8);


let searchbox= document.querySelector('.search-box');
let myicon = document.querySelector('.icon');

myicon.addEventListener('click',function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchbox.value+'&units=metric&appid=4eb35a54b1f68e680c6076f8f7686ff3')

   .then(weather=>{
     return weather.json();
   })
   .then(displayResults);
  })
function displayResults(weather){
  let cityName = document.querySelector('.location .city');
    let countryName = document.querySelector('.location .city1');
  var namecity=weather['name'];
var nameCountry= weather['sys']['country'];

cityName.innerHTML= namecity;
countryName.innerHTML= nameCountry;
  console.log(weather);

  let temperature = document.querySelector('.current .temp');
      let var4temp=Math.round(weather['main']['temp']);
      temperature.innerHTML=var4temp;

let weather2=document.querySelector('.current .weather');
let var4weather = weather['weather'][0]['main'];
weather2.innerHTML= var4weather;

let finaltemp=document.querySelector('.current .hi-low');
let minTemp = weather['main']['temp_min'];
let maxTemp = weather['main']['temp_max'];
let minmax= maxTemp+"°c / "+ minTemp+"°c ";
finaltemp.innerHTML=minmax;

  }
