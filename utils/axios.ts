import axios from 'axios';

const instance = axios.create(
    {
        baseURL : "https://dummyjson.com/users",
    }
)

export default instance;