import React, { Component } from 'react';
import ErrorBoundary from './utils/ErrorBoundary.js';
import './App.css';

class App extends Component {

    render() {
        console.info('App.render ***');

        return (
            <ErrorBoundary componentName="App">
                <div className="tree-app">
                  Hello World!
                </div>
            </ErrorBoundary>
        );
    };
}

export default App;
