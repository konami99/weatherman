var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    handleSearch: function(location){
        alert('search here');
    },
    render: function(){
        return (
            <div>
                <h2>Weather Component</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage/>
            </div>
        );
    }
})
module.exports = Weather;