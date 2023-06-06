import "./Albums.css";
import { useState, useEffect, useRef } from "react";
import { BiChevronLeft, BiChevronRight, BiPlayCircle } from "react-icons/bi";

export default function Albums() {
    //process env
    let processEnv = process.env.PUBLIC_URL;

    //ref: play icon container
    let playIconContainer = useRef();
    //state: albumIndex
    const [albumIndex, setAlbumIndex] = useState(0);

    //state: albums
    const [albums, setAlbums] = useState(null);
    //fetch: albums
    useEffect(() => {
        fetch(processEnv + "/Api/albums.json")
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setAlbums(json);
            })
    }, [])
    //if albums is null: show loading msg
    if (albums === null) {
        return <p> Loading Albums... </p>;
    }

    return <div id="albums" className="nav-source">
        {/* Heading */}
        <h3> Albums: </h3>

        {/* Window */}
        <div id="window">

            {/* Left Button */}
            <button
                onClick={() => {
                    if (albumIndex === 0) {
                        setAlbumIndex(albums.length - 1);
                        return;
                    }
                    setAlbumIndex((albumIndex - 1) % albums.length);
                }}>
                <BiChevronLeft
                    size="100%"
                />
            </button>

            {/* Image */}
            <div 
                //Click: Change Play Icon Opacity
                onMouseDown={() => {
                    playIconContainer.current.children[0].style.opacity = 1;
                }}
                //Click Stop: Revert Play Icon Opacity
                onMouseUp={() => {
                    playIconContainer.current.children[0].style.opacity = 0.8;
                }}>
                
                {/* Url */}
                <a href={albums[albumIndex].url}>
                    <img
                        src={processEnv + albums[albumIndex].imgPath}
                        width="100%"
                        height="100%"
                        alt={"The album cover image of " + albums[albumIndex].name}
                    />

                    {/* Play Icon */}
                    <div ref={playIconContainer}>
                        <BiPlayCircle
                            size="50%"
                        />
                    </div>
                </a>
            </div>

            {/* Right Button */}
            <button
                onClick={() => {
                    setAlbumIndex((albumIndex + 1) % albums.length);
                }}>
                <BiChevronRight
                    size="100%"
                />
            </button>
        </div>

        {/* Text */}
        <div id="text">
            <p> 
                <span> {albums[albumIndex].name + ":"} </span>
                {albums[albumIndex].description}
            </p>
        </div>
    </div>
}