import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import  { Home, Contact, Info  } from './pages/index'
import Nav from './components/NavButton'

class App extends Component {    
    render() {
        return (
            <Router>
                <Nav />                
                {/* <Switch> */}
                <Route path="/" component={Home}>                    
                    <Route path="/home" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/info" component={Info} />
                </Route>
                {/* </Switch> */}
            </Router>
        )
    }
}

export default App