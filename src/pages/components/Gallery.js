import React, { Component } from 'react';
import '../../index.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./images', false)).sort();

class Gallery extends Component {

    render() {

        return (
            <div className = "gallery">
            {
                images.map((image, idx) => (
                <div className = "photos" id = { idx }>
                    <img src = {image} alt = { image.substring(image.lastIndexOf('/') + 1, image.indexOf('.')) }/>
                </div>
              ))
            }
            </div>
        )

    }

}

export default Gallery