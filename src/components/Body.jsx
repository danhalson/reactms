// Import CSS
import './Body.scss';

// Import modules.
import React from 'react';

class Body extends React.Component {
    render() {
        return (
            <section className="container container__body">
                Body text from another component.
            </section>
        );
    }
}

export default Body;
