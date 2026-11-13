import axios from 'axios'

const axiosInstance = axios.create({
    baseUrl:"https://jsonplaceholder.typicode.com/posts",
    headers:{
        "Content-Type":"application-json"
    }
})

