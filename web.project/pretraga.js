async function searchWeather(){
	const cityInput = document.getElementById("cityInput").value
	const widgetContainer = document.getElementById("weather-widget")

	if(cityInput.trim()===""){
	widgetContainer.innerHTML = ""
return
}

try {
	const apiKey = "ed8a951092ca4eac926183701231912"
	const apiUrl=`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}&api=no`
	const response=await fetch (apiUrl)


	if(response.ok){
		const weatherData=await response.json()

		const city=weatherData.location.name
		const temperature=weatherData.current.temp_c
		const humidity=weatherData.current.humidity

		widgetContainer.innerHTML=`
		<div class="weather-info">
		<h2>Vremenska prognoza u ${city}</h2>
		<p>Temperatura: ${temperature}°C</p>
		<p>Vlaznost: ${humidity}%</p>
		<!--Add more data as needed-->
		</div>
		`
		;
	
}
else{
	alter("failed to fetch weather data")
}
	
	
}
catch (error){
	console.error("An error occurred while fetching weather data:", error);
	alter("An error occurred. Please try again later")
}
}