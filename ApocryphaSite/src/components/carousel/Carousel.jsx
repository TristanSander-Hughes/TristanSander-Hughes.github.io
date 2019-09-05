import React, { useState, useEffect } from 'react';

import styles from './Carousel.module.css';

const Carousel = ({ images }) => {
    const [ imageNum, setImageNum ] = useState(0);
    const image = images[imageNum];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageNum(imageNum => (imageNum + 1 ) % images.length);
        }, 5000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className={styles.Carousel}>
            <div className={styles.Image}>
                <img src={image.src} alt={image.alt} />
                <div className={styles.AltText}>
                    <span>{image.alt}</span>
                </div>
            </div>
            <div className={styles.Buttons}>
                {
                    images.map((_, i) => ( 
                        <div key={i} className={ i === imageNum ? styles.Active : null } onClick={() => setImageNum(i)}></div>
                    ))
                }
            </div>
        </div>
    );
}

export default Carousel;