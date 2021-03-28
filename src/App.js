import React, {Component} from 'react';

import Navbar from "./components/Navbar";
import User from "./components/User";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className={"container"}>
                <Navbar/>
                <hr/>
                <User name={"John"}
                      department={"HR"}
                      salary={"1000"}
                      company={"ABC"}
                />
                <User name={"Jack"}
                      department={"Q&A"}
                      company={"ABC"}/>
            </div>
        );
    }
}

export default App;
