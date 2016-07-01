var React = require('react');




var WeatherMessage = (props) => {
    var location = props.location;
    var temp = props.temp;
    return (
        <h2>it is {temp} in {location} !?</h2>
    )
};


module.exports = WeatherMessage;