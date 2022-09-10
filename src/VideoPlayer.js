import React, {useEffect, useRef} from "react";
import "./App.css";

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
                    playsInline
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
}