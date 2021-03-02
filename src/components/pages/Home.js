import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import { Link } from  'react-router-dom';


export default  class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>
                <Link to="/post">
                    <Button className="btn btn-primary">Fetch data</Button>
                </Link>
                <Link to="/List">
                  <Button focusVisibleClassName="btn btn-primary">post data</Button>
                    </Link>
                
                
                
            </div>
        )
    }
}


