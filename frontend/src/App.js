import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {};

    componentDidMount() {
        this.dadJokes()
    }

    dadJokes = () => {
        fetch('/api/dadjokes')
            .then(response => response.text())
            .then(message => {
                this.setState({message: message});
            });
    };

    render() {
        return (
        <Router>
                <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    
                    <div className="router-container">
                    <Switch>
                        <Route exact path="/admin">
                        <p>
                            <h3>Very important admin stuff comes here </h3>
                            <Link to="/">go home</Link>
                        </p>
                        </Route>
                        <Route path="/">
                        <p className="App-intro">
                            <h3 className="App-title">{this.state.message}</h3>
                            <Link to="/admin">go admin</Link>
                        </p>
                        </Route>
                    </Switch>
                </div>    
                </header>
                

                
            </div>
        </Router>
    );
    }
}

export default App;