import { getToken } from "./authManager";
const baseUrl = '/api/video';


export const getAllVideos = () => {
    return getToken().then(token => {
        return fetch(`${baseUrl}/GetWithComments`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => resp.json())
    })
};

export const getVideo = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};

export const searchVideos = (input) => {
    return fetch(`${baseUrl}/search?q=${input}&sortDesc=true`)
        .then((res) => res.json())
}

export const addVideo = (video) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    });
};