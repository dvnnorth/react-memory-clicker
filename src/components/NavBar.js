import React from 'react';

let NavBar = props => (
    <nav className="bg-warning">
        <div className="container">
            <div className="row pt-2">
                <div className="col">
                    <p className="font-weight-bold text-shadow text-white text-center text-scale">
                        Lotería Memory Clicker
                    </p>
                </div>
                <div className="col">
                    <p className="text-shadow text-white text-center text-scale">
                        {props.resultsDisplay}
                    </p>
                </div>
                <div className="col">
                    <p className="text-shadow text-white text-center text-scale">
                        Score: {props.score} | Top Score: {props.topScore}
                    </p>
                </div>
            </div>
        </div>
    </nav>
);

export default NavBar;