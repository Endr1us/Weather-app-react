import React from "react";
import "./App.css";
import Info from "./components/Info/";
import ArticleListWeather from "./components/ArticleListWeather";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <Info />
          <ArticleListWeather />
        </div>
      </div>
    );
  }
}

export default App;
