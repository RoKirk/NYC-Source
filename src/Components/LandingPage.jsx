import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Homepage from './HomePage';


const LandingPage = (props) => {

    useEffect(() => {
        setTimeout(() => {
             props.history.push("/homepage")
         }, 2000)
    }, [])
    
    return (

        <div id="landing-page">

            <h1 id="app-title" className="animated slideInUp slow">NYC Source</h1>

            <Link to="/homepage">Homepage</Link>

        </div>

    )
}

export default LandingPage
