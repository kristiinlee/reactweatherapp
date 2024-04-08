import React, { useState } from "react";
import "./DailyForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function DailyForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily)
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
        return (
        <div className="DailyForecast">
            <div className="row">
                <div className="col">
                   <ForecastDay data={forecast[1]} />
                </div>

                <div className="col">
                   <ForecastDay data={forecast[2]} />
                </div>

                <div className="col">
                   <ForecastDay data={forecast[3]} />
                </div>

                <div className="col">
                   <ForecastDay data={forecast[4]} />
                </div>

                <div className="col">
                   <ForecastDay data={forecast[5]} />
                </div>
            </div>
        </div>
    );
      
    } else {
        let apiKey="06b0f64a63552tbee14aof0301449fb0";
        let city = props.data.city;
        let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse); 
    
        return null;
    
    }
    
}


