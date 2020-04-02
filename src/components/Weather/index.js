import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Weather = props => {
  const { weatherItemsDay, error } = props;
  return (
    <div className="infoWeath">
      <p className="error">{error}</p>
      {weatherItemsDay.name && (
        <div>
          <h2 className="head">Погода на сегодня</h2>
          <p>
            Регион: {weatherItemsDay.name}, {weatherItemsDay.sys.country}
          </p>
          <p>Температура текущая: {weatherItemsDay.main.temp} град. цельсия</p>
          <p>Относительная влажность: {weatherItemsDay.main.humidity} %</p>
          <p>Скорость ветра: {weatherItemsDay.wind.speed} м/с</p>
        </div>
      )}
    </div>
  );
};

Weather.displayName = "Weather for 1 day";

Weather.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string,
  temp: PropTypes.number,
  humidity: PropTypes.number,
  speed: PropTypes.number,
  error: PropTypes.string
};

Weather.defaultProps = {
  name: "Kharkiv"
};

export default Weather;
