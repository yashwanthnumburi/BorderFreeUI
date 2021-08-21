import axios from "axios";

export const getProductDetails=()=>{
    return axios.get('https://evening-forest-19188.herokuapp.com/getallproducts').then(response=>{
        return response.data.Item;
    })
};

export const addProductToCart=(req)=>{
    return axios.post('https://evening-forest-19188.herokuapp.com/addProductToCart',req).then(response=>{
        console.log(response);
        return response;
    });
}