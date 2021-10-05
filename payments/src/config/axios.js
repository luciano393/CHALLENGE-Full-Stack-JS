import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://api-node-payments.herokuapp.com/v1'
});

export default clienteAxios;