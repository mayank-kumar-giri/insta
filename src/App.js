import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navigation/index';
import Footer from './components/Footer/index';
import ImageCalendar from './components/ImageCalendar/index';
import Home from './components/Home';

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
              <ImageCalendar/>
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
                <Home />
              </div>
            <Footer/>
          </React.Fragment>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
