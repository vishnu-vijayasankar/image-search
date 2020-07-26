import React, { Component } from 'react';
import ImageModal from './imageModal.js';

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0, modalIsOpen: false, imageSrc: '' };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spansRows = Math.ceil(height / 9.8);
        this.setState({ spans: spansRows });
    }

    handleEvent = () => {
        console.log(this.props.image.urls.regular);
        this.setState({
            imageSrc: this.props.image.urls.regular,
            modalIsOpen: true
        })
    };

    toggleModal = () => {

        this.setState({
            modalIsOpen: false
        }, () => { console.log(" => I was clicked", this.state.modalIsOpen); })
    }

    render() {
        console.log(" => Im was clicked", this.state.imageSrc);
        return (
            <div id={this.props.image.id}
                style={{ gridRowEnd: `span ${this.state.spans}`, padding: '4px 4px 0 4px' }}
            >
                <img style={{ border: '2px solid rgb(255 247 0)', cursor: 'pointer' }}
                    ref={this.imageRef}
                    src={this.props.image.urls.regular}
                    alt={this.props.image.alt_description}
                    onClick={this.handleEvent}
                />
                {
                    this.state.modalIsOpen ?
                        <ImageModal
                            modalIsOpen={this.state.modalIsOpen}
                            toggleModal={this.toggleModal}
                            imageSrc={this.state.imageSrc} />
                        : null
                }
            </div>
        )
    }
}

export default ImageCard;
