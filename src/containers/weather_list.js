import React, { Component} from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>city</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
      </table>
    );
  };
}

// function mapDispatchToProps(state){
//   return {weather: state.weather};
// }

//ES6 syntax
function mapDispatchToProps({weather}){
  return { weather };
}

export default connect (mapDispatchToProps)(WeatherList);
