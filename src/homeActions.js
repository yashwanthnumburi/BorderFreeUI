import axios from 'axios';

export const getCartProducts=()=>{
    return axios.get('https://evening-forest-19188.herokuapp.com/getCartProducts').then(response=>{
        return response.data.Item;
    })
};

export const getItemDetailsInCart=(products)=>{
    return axios.post('https://evening-forest-19188.herokuapp.com/getItemDetailsInCart',{products:products}).then(response=>{
        return response.data
    })
};