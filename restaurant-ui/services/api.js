import axios from 'axios';

let config = require('../config/config.json');

const ApiService = {
    getCats: async () => {
        try {
            const axiosConfig = {
                method: 'get',
                url: config.server.url + "/cats",
                headers: {
                    'Content-Type': "application/json"
                }
            } 

            return await axios(axiosConfig).then((res) => {
               return res;
            }).catch(err => {
                return err;
            }) 
            
        } catch (error) {
            console.log(error)
        }
    }
}

export default ApiService;