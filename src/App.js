import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import Header from "./Components/Header/Header";
import Feed from "./Components/Feed/Feed";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NodePractice from "./Components/NodePractice/NodePractice";
import Jobs from "./Components/Jobs/Jobs";
import Profile from "./Components/Profile/Profile";
import FooterPrimary from "./Components/FooterPrimary/FooterPrimary";
import React from "react";
import MyNetwork from './Components/Mynetwork/MyNetwork';
import Jobdetails from './Components/Jobs/Jobdetails';


function App() {

    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/'>
                            <SignUp/>
                        </Route>
                        <Route path='/sign-up'>
                            <SignUp/>
                        </Route>
                        <Route path='/sign-in'>
                            <SignIn/>
                        </Route>
                        <Route path='/feed'>
                            <Header/>
                            <Feed/>
                        </Route>
                        <Route path='/mynetworks'>
                            <Header/>
                            <MyNetwork/>
                        </Route>
                        <Route path='/jobdetails'>
                            <Header/>
                            <Jobdetails/>
                        </Route>
                        <Route path='/jobs'>
                            <Header/>
                            <Jobs/>
                        </Route>
                        <Route path='/profile'>
                            <Header/>
                            <Profile/>
                        </Route>
                        <Route path='/node-practice'>
                            <NodePractice/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}


export default App;
