var React = require('react');
var Nav = require('Nav');

//var Main = React.createClass({
//  render:function(){
//
//  }
//});
var Main = (props)=>{
    return (
        <div>
            <Nav/>
            <h2>Main component</h2>
            {props.children}
        </div>
    );
};

module.exports = Main;