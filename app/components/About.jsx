var React = require('react');

var About = (props)=>{
    return (
        <div>
            <h1 className="text-center page-title">About Component</h1>
            <p>Some text</p>
            <ul>
            <li>
            some text 1
            </li>
                <li>
                    some text 2
                </li>
            </ul>
        </div>

    );
};

module.exports = About;

