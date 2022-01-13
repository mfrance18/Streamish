import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SearchBar from "./Search";
import Login from "./Login";
import Register from "./Register";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import VideoDetails from "./VideoDetails";
// import VideoForm from "./VideoForm";

const ApplicationViews = ({ isLoggedIn }) => {
    return (
        <Switch>

            <Route path="/" exact>
                {isLoggedIn ? <SearchBar /> : <Redirect to="/login" />}
                {isLoggedIn ? <VideoList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/videos/add">
                <VideoForm />
            </Route>

            <Route path="/videos/:id">
                <VideoDetails />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>
        </Switch>
    );
};

export default ApplicationViews;