import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const WeatherDay = props => {
  const { city, weatherItems } = props;
  return (
    <div className="infoWeathDay">
      {city && (
        <div>
          <h2 className="headDay">Погода на {weatherItems.dt_txt}</h2>
          <p>
            Температура текущая: {(weatherItems.main.temp - 273.15).toFixed(2)}{" "}
            град. цельсия
          </p>
          <p>Относительная влажность: {weatherItems.main.humidity} %</p>
          <p>Скорость ветра: {weatherItems.wind.speed} м/с</p>
        </div>
      )}
    </div>
  );
};

WeatherDay.displayName = "Weather for 5 days";

WeatherDay.propTypes = {
  city: PropTypes.string.isRequired,
  dt_txt: PropTypes.string,
  temp: PropTypes.number,
  humidity: PropTypes.number,
  speed: PropTypes.number
};

WeatherDay.defaultProps = {
  city: "Kharkiv"
};

export default WeatherDay;
