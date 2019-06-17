import React, { Component } from 'react';
import classes from './Header.css';

class Header extends Component{
    state = {
        
    };
    

    render(){
        return(
            <div className={classes.header}>
                <a href="#default" className={classes.logo}><img src="favicon.ico" height= "50px"/></a>
                <div className={classes.header_right}>
                    <a className={classes.active} href="#home">Home</a>
                    <a href="#buy">Buy</a>
                    <a href="#sell">Sell</a>
                    <a href="#contactus">Contact us</a>
                    <a href="#login&signup">Login & Signup</a>
                </div>
            </div>
        )
    }
}

export default Header;