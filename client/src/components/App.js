import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
    componentDidMount() {
          console.log("App mounted — fetching user");
        this.props.fetchUser();
    }

    render() {    
    return (
        <div className="container">
            <BrowserRouter>
                <Header/>

                <Routes>
                    <Route exact path="/" element={<Landing/>}/>
                    <Route exact path="/surveys" element={<Dashboard/>}></Route>
                    <Route path="/surveys/new" element={<SurveyNew/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
    }
};

export default connect(null, actions)(App);