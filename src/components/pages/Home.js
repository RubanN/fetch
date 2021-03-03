import React, { Component } from 'react'
// import { Button } from '@material-ui/core';
import { Link } from  'react-router-dom';


export default  class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>
                <Link to="/post">
                    <button >Fetch </button>
                </Link>
                <Link to="/List">
                  <button >post </button>
                    </Link>
                
                
                
            </div>
        )
    }
}


