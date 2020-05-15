import React, {Component} from 'react';

import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

import Title from './Title';
class Services extends Component{
    state={
        services:[
            {
            icon:<FaCocktail />,
            title:'BRANED COCKTAIL',
            info:'lorem ipsum dorel and if you an dan can that is extraordinary cocktail get free happy'
            },
            {
            icon:<FaHiking />,
            title:'BEST HIKING LANDS',
            info:'lorem ipsum dorel and if you an dan can that is extraordinary cocktail get free happy'
            },
            {
            icon:<FaShuttleVan />,
            title:'SHUTTLE VAN',
            info:'lorem ipsum dorel and if you an dan can that is extraordinary cocktail get free happy'
            },
            {
            icon:<FaBeer />,
            title:'REFRESHING BEER',
            info:'lorem ipsum dorel and if you an dan can that is extraordinary cocktail get free happy'
            }
        ]
    }
    
    render(){
        return(
            <section className = 'services' >
              <Title title = "services" />
                <div className = 'services-center' >
                    {this.state.services.map((item,index)=>{
                        return <article key = {index} className = "service" >
                                  <span>{item.icon}</span>
                                  <h6>{item.title}</h6>
                                  <p>{item.info}</p>
                               </article>
                    })}
                </div>
            </section>
        )
    }
}

export default Services;