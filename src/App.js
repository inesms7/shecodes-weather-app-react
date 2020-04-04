import React from "react";
import "./App.css";
/*import Creator from "./Creator";*/
import Forecast from "./Forecast";
import WeatherSearch from "./WeatherSearch";

export default function App() {
	return (
		<div className="wrapper">
			<WeatherSearch />
			<p id="date">10 February, 2020</p>
			<p id="time">10:00 Monday</p>

			<div>
				<div>
					<div className="button-current-location" id="location">
						Current Location
					</div>
					<div />
				</div>
				<div className="col">
					<h4>
						A GREAT DAY TO GO FOR A WALK <span> 😎</span>
					</h4>
				</div>
			</div>
			<Forecast />
		</div>
		/* <div>
            <Creator />   
      </div>  
    */
	);
}
