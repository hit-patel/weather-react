var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var { location, temp} = this.props;
    return (
      <div>
        <h3>It's {temp} ˚ in {location}</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;
