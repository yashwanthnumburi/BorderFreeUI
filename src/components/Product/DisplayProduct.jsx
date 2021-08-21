import React from 'react';
import './product.css';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import {getProductDetails} from './productionActions';
import Spinner from '../../Spinner';

export default class DisplayProduct extends React.Component{

    constructor(props){
        super(props);
        this.state={
            itemDetails:null
        }
    }

    componentDidMount(){
        getProductDetails().then(itemDetails=>{
            this.setState({itemDetails:itemDetails});
        })
    }

    render(){
        return  <div className='row appBody'>
            {this.state.itemDetails ? <>
            <div className='imageContainer'>
                <ProductImage itemDetails={this.state.itemDetails} ></ProductImage>
            </div>
            <div className='detailsContainer'>
                <ProductDetails updateCartCount={this.props.updateCartCount} itemDetails={this.state.itemDetails}></ProductDetails>
            </div>
            </>:<Spinner></Spinner>}
        </div>
    }

}