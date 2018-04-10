import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {

  renderWeather(cityData) {

    const findAverages = (data) => {

      const daysData = [];
      const finalData = [];
      let i = 1;

      while (i <= 5) {
        const set = data.splice(0, 8);
        daysData.push(set);
        i++;
      }

      daysData.forEach((dayData) => {

        finalData.push({temprature: _.round(_.sum(dayData) / dayData.length)});

      });

      return finalData;
    }

    const name = cityData.city.name;
    const tempraturesAvgs = findAverages(cityData.list.map(weather => weather.main.temp));
    const pressureAvgs = findAverages(cityData.list.map(weather => weather.main.pressure));
    const humidityAvgs = findAverages(cityData.list.map(weather => weather.main.humidity));

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart
            width={150}
            height={30}
            data={tempraturesAvgs}
            lineType='monotone'
            dataKey='temprature'
            strokeColor='#000000'
            strokeWidth='2' />
        </td>
        <td>
          <Chart
            width={150}
            height={30}
            data={pressureAvgs}
            lineType='monotone'
            dataKey='temprature'
            strokeColor='#000000'
            strokeWidth='2' />
        </td>
        <td>
          <Chart
            width={150}
            height={30}
            data={humidityAvgs}
            lineType='monotone'
            dataKey='temprature'
            strokeColor='#000000'
            strokeWidth='2' />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temprature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// Note: in the ({ weather }), because we're pulling a single property (weather) from state
// Equaivlent to (state) then using state.weather
function mapStateToProps({ weather }) {
  // {weather} = {weather: weather}
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
