import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from './Shared/NavBar';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            
            /*Javascript Land*/
            <div className="homepage"> 
            {/* JSX Land */}

                <NavBar {...this.props}/>
                {console.log("Hi Rhol!")}

                <h1 className="heading">NYC Source</h1>


                <Link to="/">Back to Landing</Link>

            </div>


        );
    }
}

export default HomePage;
