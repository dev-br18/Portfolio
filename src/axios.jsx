import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://animated-joyous-metacarpal.glitch.me',
});

export default instance;