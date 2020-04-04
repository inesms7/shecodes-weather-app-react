import React, { useState } from "react";
import "./Weather-Search-Engine.css";
import axios from "axios";

export default function WeatherSearch() {
	const [city, setCity] = useState("");
	const [weather, setWeather] = useState({});

	function displayWeather(response) {
		setWeather({
			temperature: response.data.main.temp,
			wind: response.data.wind.speed,
			humidity: response.data.main.humidity,
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			description: response.data.weather[0].description,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		let apiKey = "3cfbc7eebafcf9149917ab5969c53e6c";
		let weatherUrl = `https: //api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(weatherUrl).then(displayWeather);
	}

	function displayCity(event) {
		setCity(event.target.value);
	}

	return (
		<div className="search">
			<form id="form" onSubmit={handleSubmit}>
				<div className="input-group md-form form-sm form-1 pl-0" id="form">
					<div className="input-group-prepend">
						<span
							className="input-group-text purple lighten-3"
							id="basic-text1"
						>
							<i className="fas fa-search text-white" aria-hidden="true" />
						</span>
					</div>
					<input
						className="form-control my-0 py-1"
						type="text"
						placeholder="Search for a City"
						aria-label="Search"
						id="city"
						onChange={displayCity}
					/>
					<button
						className="btn btn-outline-secondary"
						type="button"
						id="button-addon2"
					>
						Search
					</button>
					<br />
				</div>
			</form>
			<div className="container" id="container_current_temp">
				<div className="row present_temperature">
					<div className="col">
						<img
							src="https://home.e-inscricao.com/wp-content/uploads/2015/10/sun1.png"
							alt="sunny_day"
							id="sunny"
							width="150px"
						/>
					</div>
					<div className="col" id="city-weather">
						<h1>LISBON</h1>
						<ul className="temp-conditions">
							<li>
								<strong>Humidity:</strong> <span id="humidity">10 </span> %
							</li>
							<li>
								<strong>Wind:</strong> <span id="wind">104</span> km/h
							</li>
						</ul>
					</div>
					<div className="w-100" />
					<div className="col col-CMax">
						<h2 id="temp"> 13º</h2>
					</div>
					<div className="col metrics">
						<span id="celsius">ºC | </span>
						<span id="farenheit">ºF</span>
					</div>
					<div className="w-100" />
					<div className="col">
						<button id="fht">F</button>
						<button id="cel">C</button>
					</div>
				</div>
			</div>
		</div>
	);
}
