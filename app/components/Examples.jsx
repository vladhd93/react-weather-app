var React = require('react');
var {Link} = require('react-router');
var Examples = (props)=>{
    return (
        <div>
            <h1 className="text-center">examples </h1>
            <p>a few example locations.....</p>
            <ol>
            <li>
                    <Link to="/?location=kharkiv?">Kharkiv,Ukraine</Link>
            </li>
            <li>
                <Link to="/?location=Rio">Odessa,Ukraine</Link>
            </li>
            </ol>
        </div>

    );
};
module.exports = Examples;