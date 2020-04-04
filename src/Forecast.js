import React from "react";
import "./Forecast.css";

export default function Forecast() {
	return (
		<div className="container" id="container_forecast">
			<p className="forecast">NEXT HOURS:</p>

			<div className="row" id="forecast-input">
				<div className="col">
					<p className="forecast-p">Sun</p>
					<img
						src="https://home.e-inscricao.com/wp-content/uploads/2015/10/sun1.png"
						alt=""
						className="forecast-img"
					/>
					<div className="forecast-temp">
						<strong>22°</strong> 17°
					</div>
				</div>
				<div className="col">
					<p className="forecast-p">Mon</p>
					<img
						src="https://home.e-inscricao.com/wp-content/uploads/2015/10/sun1.png"
						alt=""
						className="forecast-img"
					/>
					<div className="forecast-temp">
						<strong>22°</strong> 17°
					</div>
				</div>
				<div className="col">
					<p className="forecast-p">Tue</p>
					<img
						src="http://www.free-icons-download.net/images/a-thunderstorm-icon-38671.png"
						alt=""
						className="forecast-img"
					/>
					<div className="forecast-temp">
						<strong>22°</strong> 17°
					</div>
				</div>
				<div className="col">
					<p className="forecast-p">Wed</p>
					<img
						src="https://home.e-inscricao.com/wp-content/uploads/2015/10/sun1.png"
						alt=""
						className="forecast-img"
					/>
					<div className="forecast-temp">
						<strong>22°</strong> 17°
					</div>
				</div>
				<div className="col">
					<p className="forecast-p">Thu</p>
					<img
						src="http://www.free-icons-download.net/images/a-thunderstorm-icon-38671.png"
						alt=""
						className="forecast-img"
					/>
					<div className="forecast-temp">
						<strong>22°</strong> 17°
					</div>
				</div>

				<div className="col">
					<p className="forecast-p">Fri</p>
					<img
						src="https://home.e-inscricao.com/wp-content/uploads/2015/10/sun1.png"
						alt=""
						className="forecast-img"
					/>
					<div className="forecast-temp">
						<strong>22°</strong> 17°
					</div>
				</div>
			</div>
		</div>
	);
}
