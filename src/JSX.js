import React from 'react'

function JSX() {
    return (
        <div className="App">
            <h1>Hello JSX</h1>
            <div>{10+20}</div>
        </div>
    );
    /*
    return (
        // parent
        React.createElement('h1', null, "Hello JSX")
        // child
        React.createElement('div', null, React.createElement('h1', null, "Hello JSX"))
    );
    */
}

export default JSX;