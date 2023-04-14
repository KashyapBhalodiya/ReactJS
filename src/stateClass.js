import React, { Component } from 'react'

class stateClass extends Component {
    constructor() {
        super();
        this.state = {
            data : 1
        }
    }

    User() {
        this.setState({data: this.state.data + 1})
    }

    render() {
        return(
            <div className="App">
                <h1> {this.state.data} </h1>
                <button onclick={() => this.User()}>Update data</button>
            </div>
        );
    }
}

export default stateClass;