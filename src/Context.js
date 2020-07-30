import React, {Component} from 'react';
import items from './data';

const RoomContext = React.createContext();
// it gives access to Provider and Consumer


class RoomProvider extends Component {

    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    }
    

    componentDidMount(){
        var rooms = this.formatData(items);
        var featuredRooms = rooms.filter( room => room.featured === true);

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false
        })
    }

    formatData(items){
        const tempItems = items.map( item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image=>{
                return image.fields.file.url;
            })
            let room = { ...item.fields , images:images, id:id};
            return room;
        })

        return tempItems;
    }
    render(){
        return (
            <RoomContext.Provider value={{ ...this.state }} >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

var RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomContext, RoomConsumer};