var React = require('react');
//var Message = React.createClass({
//    render:function(){
//
//
//    }
//});

var Message = ({temp,location})=>{

    return (
        <p>
            It is {temp} in {location}
        </p>
    );
};

module.exports = Message;

