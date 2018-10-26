import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-expense-75b8b.firebaseio.com/'
});


export default instance;
