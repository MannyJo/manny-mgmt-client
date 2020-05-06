import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import Storage from '../Storage/Storage';
import Food from '../Food/Food';
import MyPage from '../MyPage/MyPage';
import Login from '../Login/Login';
import Error from '../Error/Error';

const App = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} />
                <Route path="/storage" component={Storage} />
                <Route path="/food" component={Food} />
                <Route path="/mypage" component={MyPage} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}

export default App;