import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "../components/App";
import Greeting from "../components/greeting/greeting";
import Signup from "../components/signup/signup";

class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <span>
                <Route path="/" component={App} />
                <Route path="/login" component={Greeting} />
                <Route path="/signup" component={Signup} />
                </span>
            </BrowserRouter>
        );
    };
};
export default Routes;