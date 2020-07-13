import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import FrontPage from "./views/FrontPage.js";



ReactDOM.render(

    <BrowserRouter>
        <Switch>


            <Route path="/" exact render={props => <FrontPage {...props} />} />



            <Redirect to="/" />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);