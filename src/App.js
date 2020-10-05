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
import { motion } from 'framer-motion';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path= {process.env.PUBLIC_URL + "/calendar"}
        >
          <motion.div className="calendar"
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: 1 //in secs
            }}
          >
            <NavBar/>
            <div className="content-area">
              <ImageCalendar/>
            </div>
            <Footer/>
          </motion.div>
        </Route>

        <Route
          path={process.env.PUBLIC_URL + "/"}
        >
          <motion.div className="home"
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: 1 //in secs
            }}
          >
            <NavBar/>
              <div className="content-area">
                <Home />
              </div>
            <Footer/>
          </motion.div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
