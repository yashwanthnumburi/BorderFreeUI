import axios from 'axios';

export const getCartProducts=()=>{
    return axios.get('http://localhost:3001/getCartProducts').then(response=>{
        return response.data.Item;
    })
};

export const getItemDetailsInCart=(products)=>{
    return axios.post('http://localhost:3001/getItemDetailsInCart',{products:products}).then(response=>{
        return response.data
    })
};