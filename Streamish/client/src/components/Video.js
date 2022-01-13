import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const Video = ({ video }) => {

    {
        return (
            <Card >
                <p className="text-left px-2">Posted by: {video.userProfile.name}</p>
                <CardBody>
                    <iframe className="video"
                        src={video.url}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />

                    <p>
                        <Link to={`/videos/${video.id}`}>
                            <strong>{video.title}</strong>
                        </Link>
                    </p>

                    <p>{video.description}</p>
                    {video.comments?.length > 0 ? <h5>Comments</h5> : null}
                    {video.comments?.map(c =>
                        <div key={c.id}>
                            <p >{c.message}</p>
                            <p>Comment by: {c.userProfile.name}</p>
                        </div>)}

                </CardBody>
            </Card>
        );
    }


};

export default Video;