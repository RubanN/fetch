import React, { Component } from 'react'
import axios from 'axios'

export default class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             post:[],
             error:''
        }
    }

componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(res=>{
        console.log(res)
        this.setState({
            post:res.data
        },console.log(res)).catch(err=>{
            console.log(err)
            this.setState({error:'Error retrieving data'})
        },console.log(res))
    })
}

    render() {
        const [post, error] = this.state
        return (
            <div>
      List of posts
      
          {post.length ? post.map(data=><div key={data.id}>{data.title},{data.body}</div>):
          null
          }{error ?
        <div>{error}</div> :null}</div>

                
            
        )
    }
}


