import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://build-a-burger-sylvia.firebaseio.com/'
});

export default instance;