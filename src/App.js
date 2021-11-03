import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import Header from "./Components/Header/Header";
import Feed from "./Components/Feed/Feed";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


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
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}


export default App;
