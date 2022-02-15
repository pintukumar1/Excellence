import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-app-c18bf-default-rtdb.firebaseio.com/'
})

export default instance