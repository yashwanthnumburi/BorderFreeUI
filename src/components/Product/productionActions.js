import axios from "axios";

export const getProductDetails=()=>{
    return axios.get('http://localhost:3001/getallproducts').then(response=>{
        return response.data.Item;
    })
};

export const addProductToCart=(req)=>{
    return axios.post('http://localhost:3001/addProductToCart',req).then(response=>{
        console.log(response);
        return response;
    });
}