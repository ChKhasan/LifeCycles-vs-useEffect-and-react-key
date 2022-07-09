import React, { Component, PureComponent } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        
    }
    componentDidMount() {
        console.log("DID MOUNT", this.props.name);
    }
    componentDidUpdate(prevName) {
        console.log("DID UPDATE",prevName.name ,"->", this.props.name);
    }
    componentWillUnmount() {
        console.log("WILL UN MOUNT", this.props.name);
    }
  

    render() {
        return <h1 >{this.props.name}</h1>
    }
}


export default React.memo(User);
