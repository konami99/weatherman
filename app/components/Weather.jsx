var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        }
    },
    handleSearch: function(location){
        var that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        this.setState({
            location: location,
            temp: 23,
            isLoading: false,
            errorMessage: "error"
        })
    },
    render: function(){
        var location = this.state.location;
        var temp = this.state.temp;
        var isLoading = this.state.isLoading;
        var errorMessage = this.state.errorMessage;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>
            }
            else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>
            }
        }
        function renderError(){
            if(typeof errorMessage === 'string'){
                return (
                    <ErrorModal/>
                )
            }
        }
        return (
            <div>
                <h2>Weather Component</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
})
module.exports = Weather;