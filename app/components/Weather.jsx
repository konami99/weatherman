var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            location: 'Sydney',
            temp: 88
        }
    },
    handleSearch: function(location){
        this.setState({
            location: location,
            temp: 23
        })
    },
    render: function(){
        return (
            <div>
                <h2>Weather Component</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage location={location} temp={temp}/>
            </div>
        );
    }
})
module.exports = Weather;