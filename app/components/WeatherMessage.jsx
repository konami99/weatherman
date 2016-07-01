var React = require('react');




var WeatherMessage = ({temp, location}) => {
    
    return (
        <h2>it is {temp} in {location} haha!</h2>
    )
};


module.exports = WeatherMessage;