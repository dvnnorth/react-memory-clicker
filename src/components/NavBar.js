import React from 'react';

// Functional nav bar component. Will display the game score and click status via props
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
                        {/* resultsDisplay will be provided by App via state change */}
                        {props.resultsDisplay}
                    </p>
                </div>
                <div className="col">
                    <p className="text-shadow text-white text-center text-scale">
                        {/* score and topScore will be provided by App via state change */}
                        Score: {props.score} | Top Score: {props.topScore}
                    </p>
                </div>
            </div>
        </div>
    </nav>
);

export default NavBar;