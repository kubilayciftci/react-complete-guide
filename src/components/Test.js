import React, { Component } from 'react'

class Test extends Component {

    constructor(props){
        super(props);
        this.state={
            a:10
        }
        console.log("Constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        //API Request
        this.setState({
            a:20
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");    
    }
    
    /*
    If return true the render () function is called repeatedly, 
    but if return false the render () function is called one time. 
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }
    
    render() {
        console.log("Render")
        return (
            <div>
                
            </div>
        )
    }
}

export default Test;