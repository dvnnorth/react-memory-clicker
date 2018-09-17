import React, { Component } from 'react';
import images from '../images.json';
import _ from 'lodash';
import ClickyImage from './ClickyImage';

class GameGrid extends Component {
    constructor(props) {
        super(props);

        this.generateClickyImages = () => {
            let clickyImages = _.map(images, (image, i) => (
                <ClickyImage
                    key={i}
                    onRef={ref => (this.children.push(ref))}
                    handleImageClick={props.handleImageClick}
                    triggerResetAll={this.resetAll}
                    src={image.src}
                    alt={image.alt} />
            ));
            return clickyImages;
        };

        this.resetAll = () => {
            this.setState({ images: this.generateClickyImages() });
        };

        this.state = {
            images: this.generateClickyImages()
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row p-3">
                    {_.shuffle(this.state.images)}
                </div>
            </div>
        );
    }
}

export default GameGrid;