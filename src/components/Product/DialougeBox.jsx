import React from 'react';

export default class DialogueBox extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <>
            <div className='dialogueBox'>
                <div>
                <img className='dialogueImg' src={this.props.img}/>Item Added 
                </div>
            </div>
        </>
    }

}