// 1st way
// import React from 'react'
// class ClassComponent extends React.Component {

// }

import React, { Component } from 'react'

// export default class ClassComponent extends Component {
class ClassComponent extends Component {
    // using the render() function we can redirect the page
    render() {
        return(
            <h1>Hello from Class Component</h1>
        )
    }
}

export default ClassComponent;