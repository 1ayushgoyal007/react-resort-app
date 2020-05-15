import React from 'react';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
const Rooms = () => {
    return (
        <Hero hero="roomsHero">
            <Banner title = "Our Rooms"  subtitle = "Our Handpicked rooms having 4.5+ rating from our users">
                <Link to="/" className = "btn-primary" >Go home</Link>
            </Banner>
        </Hero>
    )
}

export default Rooms