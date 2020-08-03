import React, { useState, useEffect } from 'react';
import './imageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const [foundImages, setImages] = useState([]);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        setImages(props.foundImages);
    }, [props.foundImages]);

    const imgs = foundImages.map(img => {
        return <ImageCard key={img.id} image={img} />
    });

    return (
        <div className="image__list">{imgs}</div>
    )
}

export default ImageList;