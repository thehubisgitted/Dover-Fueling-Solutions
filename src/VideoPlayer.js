import { render } from '@testing-library/react';
import React, { Component } from 'react'
import ReactPlayer from 'react-player'

// class video holds the video player functionality that is imported as a component to the main framework in index.jsx
class Video extends Component {
    render () {
        return(
        <div className='player-wrapper'>
            <ReactPlayer
                loop = 'true'
                className='react-player fixed-bottom'
                url= {this.props.url}
                config={ 
                    {file:{attributes:{
                        autoPlay: true,
                        muted: false
                    }}}
                }
                playing = 'true'
                width='100%'
                height='100%'
                controls = 'false'
            
            />
        </div>
        );
    }
}

export default Video;