import React, { Component } from 'react';

class ClickyImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            src: props.src,
            alt: props.alt,
            clicked: false
        }

        this.handleImageClick = props.handleImageClick;
        this.resetAll = props.triggerResetAll;
        this.handleReset = () => {
            this.setState({ clicked: false });
        };
    }

    handleClick = event => {
        this.setState({ clicked: true });
        if (this.state.clicked) {
            this.handleImageClick(false);
            this.resetAll();
        }
        else {
            this.handleImageClick(true);
        }
    };

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 clicky">
                <img className="w-75 mx-4"
                    src={this.state.src}
                    alt={this.state.alt}
                    onClick={this.handleClick} />
            </div>
        );
    }
}

export default ClickyImage;