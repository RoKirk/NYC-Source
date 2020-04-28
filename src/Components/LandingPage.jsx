import React, { useEffect } from 'react';
import AnimationText from './AnimationText';


const LandingPage = (props) => {

    useEffect(() => {
        setTimeout(() => {
             props.history.push("/homepage")
         }, 5000)
    }, [])
    
    return (

        <div id="landing-page">
            
            <AnimationText />

        </div>

    )
}

export default LandingPage;
