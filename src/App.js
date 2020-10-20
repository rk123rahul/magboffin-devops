import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import landingpage from './pages/landingpage'
import loginpage from './pages/loginpage'
import signuppage from './pages/signuppage'
import history from './history';
import Myshelf from './pages/myShelf'
import Books from './pages/Books';
import Settings from './pages/settings-demo';
import profile from './pages/profile';
import Subscribe from "./pages/Suscribe"
import dashboardpage from './pages/dashboardpage'
import Bookdetails from './pages/Bookdetails';
import magazine from './pages/magazine';
import magazineview from './pages/magazineview';
import flipbook from './pages/flipbook';


function App() {

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {
            localStorage.getItem('userKey') ?
              <>
                <Route exact path="/" component={landingpage} />
                <Route exact path="/dashboard" component={dashboardpage} />
                <Route exact path="/shelf" component={Myshelf} />
                <Route exact path="/books" component={Books} />
                <Route exact path="/setting" component={Settings} />
                <Route exact path="/profile" component={profile} />
                <Route exact path="/subscribe" component={Subscribe} />
                <Route exact path="/bookdetails" component={Bookdetails} />
              </>
              :
              <>
              <Route exact path="/dashboard" component={dashboardpage} />
                <Route exact path="/shelf" component={Myshelf} />
                <Route exact path="/books" component={Books} />
                <Route exact path="/setting" component={Settings} />
                <Route exact path="/profile" component={profile} />
                <Route exact path="/subscribe" component={Subscribe} />
                <Route exact path="/bookdetails" component={Bookdetails} />
                <Route exact path="/" component={landingpage} />
                <Route exact path="/login" component={loginpage} />
                <Route exact path="/signup" component={signuppage} />
                <Route exact path="/subscribe" component={Subscribe} />
                <Route exact path="/magazine" component={magazine} />
                <Route exact path="/magazineview" component={magazineview} />
                <Route exact path="/flipbook" component={flipbook} />
              </>
          }

        </Switch>
      </Router>
    </div>
  );
}

export default App;
