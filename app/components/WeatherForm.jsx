var React = require('react');
var WeatherForm = React.createClass({

    onFormSubmit:function(e){
        e.preventDefault();
        var location = this.refs.location.value;
        if(location.length >0){
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render:function(){
        return (
        <div>
            <form onSubmit={this.onFormSubmit}>
                <p>
                    <input type="search" placeholder="input search....." ref="location" />
                </p>
                <p>
                    <button className="button expanded">Get Weather</button>
                </p>
            </form>
        </div>
        );
    }
});

module.exports = WeatherForm;

