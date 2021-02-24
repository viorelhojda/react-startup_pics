import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID uZ1Gi6A7b3SFIX4WNvIlCEq_Q-ZZso7YSgIBJIJ_hk0'
    }
});