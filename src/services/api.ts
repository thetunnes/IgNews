import axios from 'axios'

export const api = axios.create({
    baseURL: '/api' // O baseURL deveria ser a url inteira, porém como temos apenas uma o axios identifica ela facilmente
})