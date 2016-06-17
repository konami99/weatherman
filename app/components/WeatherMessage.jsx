var React = require('react');


var WeatherMessage = React.createClass({
    render: function(){
        var location = this.props.location;
        var temp = this.props.temp;
        return (
            <h2>it is {temp} in {location}</h2>
        );
    }
})
module.exports = WeatherMessage;