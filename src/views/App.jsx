import React from 'react';

class App extends React.Component {
    render() {
        // TODO: Get SASS setup.
        // TODO: Get browser-sync in place.
        return (
            <html>
                <head>
                    <meta charSet="utf-8"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
                    <title>Something</title>
                    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet"></link>
                </head>
                <body>
                    <div className="container">
                        <h1>I will be a thing.</h1>
                        <div id="app" className="lead">
                            For now, please go away and do something else, somewhere else.
                        </div>
                    </div>
                    <script src="js/bundle.js"></script>
                </body>
            </html>
        );
    }
}

export default App;