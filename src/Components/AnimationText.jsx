import React, { Component } from 'react';
import Typical from 'react-typical';

class AnimationText extends React.Component {
    render() {
        return (
            <Typical
                className="app-title"
                steps={['NYC', 2000, 'NYC Source', 500]}
                // loop={Infinity}
                wrapper="p"
            />
        )
    }
}

export default AnimationText;