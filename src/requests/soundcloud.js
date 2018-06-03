import axios from 'axios';

export const searchTracks = (trackName, offset = 0, limit = 6) => {
    return axios.get(`https://api.soundcloud.com/tracks?q=${trackName}&offset=${offset * limit}&limit=${limit}&format=json&client_id=${process.env.REACT_APP_SOUNDCLOUD_ID}`)
};
