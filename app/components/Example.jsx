var React = require('react');
var {Link} = require('react-router');

var Example = React.createClass({
    render: function(){
        return (
            <div>
                <h1 className="text-center">Examples</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lorem vel odio ornare suscipit. Pellentesque mi nulla, rhoncus ac mauris sit amet, tempor sagittis mi. Proin id eleifend nisi, sit amet pretium ex. Donec ac velit eu elit bibendum congue in id mauris. Ut pulvinar lacinia sollicitudin. Cras mattis dui vitae purus tincidunt maximus. Curabitur bibendum vitae sem vitae viverra. Nulla dictum sapien nibh, ut euismod mauris dictum ac. Duis quis ligula sit amet mauris eleifend convallis quis sed turpis. Cras imperdiet felis non velit condimentum, scelerisque facilisis nunc condimentum. Donec varius odio eget ex dignissim varius.</p>
                <ol>
                    <li>
                        <Link to='/?location=Sydney'>Sydney</Link>
                    </li>
                    <li>    
                        <Link to='/?location=Melbourne'>Melbourne</Link>
                    </li>
                </ol>
            </div>
        );
    }
})
module.exports = Example;