import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Detail } from 'pages';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Route exact path="/" component={Home}/>
                <Route exact path="/detail/:pid" component={Detail}/>
            </div>
        );
    }
}

export default App;
