import React from "react";
import PropTypes from "prop-types";
import "./style.css";

class Form extends React.Component {
  render() {
    const { weatherMethod } = this.props;

    return (
      <div>
        <form onSubmit={weatherMethod} className="form">
          <strong>Choose a city from the list</strong>
          <select name="city" size="1" placeholder="City" className="selStyle">
            <option value="Kharkiv">Kharkiv</option>
            <option value="Kyiv">Kyiv</option>
            <option value="Paris">Paris</option>
            <option value="London">London</option>
            <option value="Moscow">Moscow</option>
            <option value="Minsk">Minsk</option>
            <option value="Poltava">Poltava</option>
          </select>
          <button>Узнать погоду</button>
        </form>
        <p className="or">or</p>
        <form onSubmit={weatherMethod} className="form">
          <strong>Write in English</strong>
          <input
            type="text"
            name="city"
            placeholder="City name"
            pattern="[A-Za-z][A-Za-z' -]+"
          />
          <button>Узнать погоду</button>
        </form>
      </div>
    );
  }
}

Form.displayName = "Weather forms";

Form.propTypes = {
  weatherMethod: PropTypes.func.isRequired
};

export default Form;
