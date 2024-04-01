import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input 
                        type="search" 
                        placeholder="Enter your city.." 
                        className="form-control" /> 
                    </div>
                    <div className="col-3">
                        <input 
                        type="submit" 
                        value="Search" 
                        className="btn btn-light w-100" />
                    </div>
                </div>
            </form>
            <h1>
                Michigan
            </h1>
            <ul>
                <li>Sunday 17:30PM</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <img 
                        src="https://www.awxcdn.com/adc-assets/images/weathericons/18.svg" alt="cloudy"
                    />
                    <span className="temperature">41</span>
                    <span className="unit">°F</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 15%</li>
                        <li>Humidity: 70%</li>
                        <li>Wind: 13 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}