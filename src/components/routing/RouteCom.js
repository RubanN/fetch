import React, { Component } from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Post from '../pages/Post';
import List from '../pages/List';
import PageNotFound from '../pages/PageNotFound';

export default class RouteCom extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/post" component={Post} exact/>
                    <Route path="/list" component={List} exact/>
                    <Route path="*" component={PageNotFound}/>
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}


