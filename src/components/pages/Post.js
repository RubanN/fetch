import React, { Component } from 'react'
import axios from 'axios'
import url from '../apipage/url'

export default class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             body:'',
             userId:""
        }
    
    }
    changeInput=e=>{
        this.setState({[e.target.name]: e.target.value})
    }
    onClickFunc=e=>{
        e.preventDefault()
        console.log(this.state);
        axios.post(url,this.state)
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err);
        })

    }
    
    render() {
        const {title, body} = this.state
        console.log('render post--------->,');
        return (
            <div>
                <form onSubmit={this.onClickFunc}>
                    <div>
                    <input 
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.changeInput}
                    />
                    </div>
                    <div>
                     <input type="text"
                     name="body"
                    value={body}
                    onChange={this.changeInput}
                    />
                    </div>
                <button type="submit">submit</button>
                </form>
               
            </div>
        )
    }
}

