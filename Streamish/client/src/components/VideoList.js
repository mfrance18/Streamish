import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos } from "../modules/VideoManager";

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = () => {
        getAllVideos().then(videos => setVideos(videos));
    };

    useEffect(() => {
        getVideos();
    }, []);


    return (
        <div className="row justify-content-center">
            {videos.map((video) => (
                <Video video={video} key={video.id} />
            ))}
        </div>
    );
};

export default VideoList;