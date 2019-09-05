import React from 'react';
import styles from './Home.module.css';
import Carousel from './../../components/carousel/Carousel';
import { makeClass } from '../../utils';

const Home = () => {
    const images = [
        {
            src: '/images/fool.jpg',
            alt: 'Some fool',
        },
        {
            src: '/images/troll.jpg',
            alt: 'Some troll',
        },
        {
            src: '/images/vegeta.jpg',
            alt: 'Some dbz joke',
        },
        {
            src: '/images/willie.jpg',
            alt: 'Willie Wonka',
        },
    ]

    return (
        <div className={styles.Home}>
            <span className={makeClass(styles.Welcome, "montserrat bold")}>Welcome to</span>
            <span className={makeClass(styles.Header, "montserrat bold green")}>Apocrphya</span>
            <p className="lato">
                We are a digital design agency here to help<br/>
                you getting the cutting edge for your brand<br/>
                whether its from website, logo, news letter,<br/>
                props and stands, we can deliver the best<br/>
                services in the industry.
            </p>
            <p className="lato">
                Don't believe me? Don't take my word for it.<br/>
                Just click below on some of our clients.
            </p>
            <Carousel images={images} />
            <img className={styles.Einstein} src="/images/einstein.jpg" alt="Einstein"></img>
        </div>
    );
}

export default Home;