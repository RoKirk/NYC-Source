import React, {useEffect} from 'react';


const LandingPage = (props) => {

    useEffect(() => {
        setTimeout(() => {
             props.history.push("/homepage")
         }, 3000)
    }, [])
    
    return (

        <div id="landing-page">


        </div>

    )
}

export default LandingPage;
