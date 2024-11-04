import axios from 'axios';

const instance = axios.create(
    {
        baseURL : "https://blktracksvc.dtdc.com/dtdc-api/rest/JSONCnTrk/getTrackDetails",
    }
)

export default instance;