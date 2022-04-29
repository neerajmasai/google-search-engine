import React, { useState } from 'react'
import { ImageCollageStyle } from '../styles/ImageCollage.styled'
const ImageCollage = ({ images }) => {

    const [imageGrid, setImageGrid] = useState([]);

    React.useEffect(() => {
        let filtered = images.filter(element => element !== undefined);
        let arr = [];
        arr.push(filtered[0]);
        arr.push(filtered[1]);
        arr.push(filtered[2]);
        arr.push(filtered[3]);
        arr.push(filtered[4]);
        setImageGrid(arr);
    }, [images, setImageGrid]);

    return (
        <ImageCollageStyle>
            <div className='big-img'>
                <img src={imageGrid[0]} alt="" srcset="" />
                <img src={imageGrid[1]} alt="" srcset="" />
            </div>
            <div className='small-img'>
                <img src={imageGrid[2]} alt="" srcset="" />
                <img src={imageGrid[3]} alt="" srcset="" />
                <img src={imageGrid[4]} alt="" srcset="" />
            </div>
        </ImageCollageStyle>
    )
}

export default ImageCollage