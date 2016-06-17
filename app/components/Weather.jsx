var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        }
    },
    handleSearch: function(location){
        var that = this;
        this.setState({isLoading: true});

        this.setState({
            location: location,
            temp: 23,
            isLoading: false
        })
    },
    render: function(){
        var location = this.state.location;
        var temp = this.state.temp;
        var isLoading = this.state.isLoading;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>
            }
            else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>
            }
        }

        return (
            <div>
                <h2>Weather Component</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
})
module.exports = Weather;