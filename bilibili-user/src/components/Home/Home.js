
import React, { Component } from 'react';
import myheader from './Header';
export default class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>
                    home
                    <myheader/>
                </h1>
            </div>
        )
            
    }
}