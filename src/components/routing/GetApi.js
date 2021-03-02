import axios from 'axios';
import GetApi from '../apipage/ApiUrl'

import React, { Component } from 'react'

export  default class GetApi extends Component {

async componentDidMount(){
    let api = await axios.get(GetApi+'/post');
    return api
 }  
    render() {
        return (
            <div>
                
            </div>
        )
    }
}







