import React from 'react';
import './bag.css';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import { getCartProducts, getItemDetailsInCart } from "../../homeActions";
import Spinner from '../../Spinner';

export default class Bag extends React.Component{

    constructor(props){
        super(props);
        this.state={
            cartDetails:'',
            showSpinner:true
        }
        this.getCartDetails=this.getCartDetails.bind(this);
    }

    componentDidMount(){
        this.getCartDetails();
    }

    getCartDetails(){
        getCartProducts().then(item=>{
            getItemDetailsInCart(item.Products).then(cartDetails=>{
                console.log("came here",cartDetails)
                this.setState({cartDetails:cartDetails,showSpinner:false});
            })
        })
    }

    render(){
        return <div className='row bagContainer'>
                {this.state.showSpinner && <Spinner></Spinner>}
                {this.state.cartDetails?<>
                <div className='col-sm-8 leftContainer'>
                    <LeftContainer productsInfo={this.props.productsInfo} userAddress={this.props.userAddress} cartDetails={this.state.cartDetails}></LeftContainer>
                </div>
                <div className='col-sm-4 rightContainer'>
                    <RightContainer cartDetails={this.state.cartDetails} productsInfo={this.props.productsInfo}></RightContainer>
                </div></>:''}
            </div>
    }


}