import React, {Component} from 'react';
import {RoomContext} from '../Context';
import Room from './Room';
import Title from './Title';

class FeaturedRooms extends Component {

    static contextType = RoomContext;

    render(){

        let { featuredRooms:rooms, loading, }  = this.context;
        rooms = rooms.map(room=>{
            return <Room />
        })
        return(
        <section className="featured-rooms" >
            <Title title="FEATURED ROOMS" />
            <div className="featured-rooms-center" >
                { loading?<h1>Loading</h1>:rooms }
            </div>

        </section>

        )
    }
}

export default FeaturedRooms;