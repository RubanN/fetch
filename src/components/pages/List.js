import React, { Component } from 'react'
import axios from 'axios'
import url from '../apipage/url'
export default class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             error:''
        }
    }

componentDidMount(){
    axios.get(url)
     .then(res=>{
         console.log(res);
         this.setState({posts:res.data})
     }).catch(err=>{
         console.log(err)
         this.setState({error:'Error'})
     })
}

    render() {
        const {posts, error} = this.state
        return (
            <div>
      List of posts
      
          {posts.length ? posts.map(data=><div key={data.id}>{data.title},{data.body}</div>):
          null
          }{error ?
        <div>{error}</div> :null}</div>

                
            
        )
    }
}


