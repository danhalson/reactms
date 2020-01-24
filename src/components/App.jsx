// Import CSS
import './App.scss';

// Import modules.
import React from 'react';
import Body from './Body';

class App extends React.Component {
    render() {
        return (
            <div className="main-wrapper">
                <section className="container">
                    <h1>Title</h1>
                </section>
                <section className="container">
                    Pre-amble maybe.
                </section>
                <Body />
            </div>
        );
    }
}

export default App;
