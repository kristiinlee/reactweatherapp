import React from "react";

export default function ForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.time *1000);
        let day = date.getDay();

        let days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ];


        return days[day];
    }

    return (
    <div>
        <div className="ForecastDay">{day()}</div>
            <img 
                src={props.data.condition.icon_url}
                alt={props.data.condition.description} 
                 /> 
        <div className="ForecastTemp">
            <span className="ForecastTempMax">{maxTemperature()}</span> 
            <span className="ForecastTempMin">{minTemperature()}</span>
        </div>
    </div>
    );
}

