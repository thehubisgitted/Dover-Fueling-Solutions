import { render } from '@testing-library/react';
import React, { Component } from 'react'
import ReactPlayer from 'react-player'

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
                //muted = 'false'
                width='100%'
                height='100%'
                controls = 'false'
            
            />
        </div>
        );
    }
}

export default Video;
/*import React, {useState, useEffect, useRef} from "react";
import FilePlayer from "react-player/file";
import "./App.css";
import ReactPlayer from react-player;

export default function App(){
    const videoEl =useRef(null);

    const attemptPlay = () => {
        videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
            console.error("Error attempting to play", error);
        });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return(
        <div> className = "App"
            <h1>Autoplay example</h1>
                <div>
                    <video
                    style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                    loop
                    muted
                    alt="Promo Video"
                    //TODO: CREATE A FUNCTION THAT CHANGES THIS URL BASED ON A NUMBER MAYBE IMPORT A VARIABLE?
                    src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
                    ref={videoEl}
                    />
                </div>
        </div>

    )
}*/