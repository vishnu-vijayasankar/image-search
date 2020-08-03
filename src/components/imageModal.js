import React, { Component } from 'react';
import Modal from 'react-modal';

class ImageModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    toggleModal = () => {
        this.props.toggleModal(); 
    }

    render() {
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '999',
                border: '2px solid #2bc0c0'
            }
        };

        return (
            <Modal
                isOpen={this.props.modalIsOpen}
                style={customStyles}
                contentLabel="Modal"
            >
                <button style={{
                    float: 'right',
                    padding: '0',
                    marginBottom: '15px',
                    cursor: 'pointer',
                    width: '22px',
                    height: '22px'}}
                    onClick={this.toggleModal}>
                        x
                </button>
                <div>
                <img style={{ height: '500px' }}
                    src={this.props.imageSrc}
                    alt="popup"
                />
                </div>
            </Modal>
        )
    }
}

export default ImageModal;
