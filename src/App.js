import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navigation/index';
import Post from './components/Post/index';
import Footer from './components/Footer/index';
import Calendar from './components/Calendar/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/calendar"
        >
          <React.Fragment>
            <NavBar/>
            <div className="content-area">
              <Calendar/>
            </div>
            <Footer/>
          </React.Fragment>
        </Route>

        <Route
          path="/"
        >
          <React.Fragment>
            <NavBar/>
              <div className="content-area">
                <Post />
                <Post />

              </div>
            <Footer/>
          </React.Fragment>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
