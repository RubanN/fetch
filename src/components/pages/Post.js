import React, { Component } from 'react'
import axios from 'axios'

export default class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             body:''
        }
        this.onClickFunc=this.onClickFunc.bind(this)
    }
    changeInput(e){
        this.setState({
            [e.target.name]: e.target.value
        }, console.log(e.target.value))
    }
    onClickFunc(e){
        e.preventDefault()
        axios.post('http://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res)
        })

    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onClickFunc}>
                    <input type="text"
                    name="title"
                    value={this.state.title}
                    placeholder="enter title"
                    onChange={()=>this.changeInput()}
                    />
                     <input type="text"
                     name="body"
                    value={this.state.body}
                    placeholder="enter body"
                    onChange={()=>this.changeInput()}
                    />
                </form>
                <button type="submit">submit</button>
            </div>
        )
    }
}

