import axios from 'axios';

export default function ({}, inject) {

    const finalSpace = new axios.create({
        baseURL: 'https://finalspaceapi.com/api/v0',
        headers: {'Content-Type': 'application/json'}
    })


    inject('apiFinalSpace', finalSpace)
}