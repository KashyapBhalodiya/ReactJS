import React from 'react';

class PropsClass extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div style={{backgroundColor: "lightgreen", margin: 200}}>
                <div>Football player name: {this.props.name}</div>
                <div>Football player gmail: {this.props.gmail}</div>
            </div>
        );
    }
}

export default PropsClass;