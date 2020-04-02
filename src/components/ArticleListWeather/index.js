import React from "react";
import PropTypes from "prop-types";
import Form from "../../components/Form";
import Weather from "../../components/Weather";
import WeatherDay from "../../components/WeatherDay";

class ArticleListWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
      itemsDay: [],
      items: []
    };
  }

  gettingWeather = async event => {
    event.preventDefault();
    let city = event.target.elements.city.value;

    if (city) {
      const api_url_day = await fetch(
        `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      const api_url_5_day = await fetch(
        `${process.env.REACT_APP_API_URL}/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api_url_day.json();
      const data_5_day = await api_url_5_day.json();
      let arr = [];
      for (let i = 5; i < 38; i = i + 8) {
        arr.push(data_5_day.list[i]);
      }
      this.setState({
        error: undefined,
        itemsDay: data,
        items: arr
      });
    } else {
      this.setState({
        error: "Введите правильное название города латинскими буквами"
      });
    }
  };

  render() {
    const { error, itemsDay, items } = this.state;

    return (
      <div>
        <Form weatherMethod={this.gettingWeather} />
        <Weather weatherItemsDay={itemsDay} error={error} />
        {items.map((item, index) => (
          <WeatherDay
            weatherItems={item}
            key={item.dt_txt}
            index={index}
            city={itemsDay.name}
          />
        ))}
      </div>
    );
  }
}

ArticleListWeather.displayName = "Weather for all city";

ArticleListWeather.propTypes = {
  city: PropTypes.string.isRequired,
  gettingWeather: PropTypes.func,
  api_url_day: PropTypes.object,
  api_url_5_day: PropTypes.object,
  data: PropTypes.object,
  data_5_day: PropTypes.object,
  arr: PropTypes.array,
  itemsDay: PropTypes.arrayOf(PropTypes.object),
  items: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string
};

ArticleListWeather.defaultProps = {
  city: "Kharkiv"
};

export default ArticleListWeather;
