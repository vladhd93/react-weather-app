var React = require('react');

var Message = ({temp,location})=>{

    return (
        <p className="text-center">
            It is {temp} in {location}
        </p>
    );
};

module.exports = Message;

