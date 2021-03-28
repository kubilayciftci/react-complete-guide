import React, {Component} from 'react';

import Navbar from "./components/Navbar";
import './App.css';
import Users from "./components/Users";

class App extends Component {
    state = {
        users: [
            {
                id: 1,
                name: "John Wick",
                salary: "2000",
                department: "HR"
            },
            {
                id: 2,
                name: "Clark Kent",
                salary: "3000",
                department: "Q&A"
            },
            {
                id: 3,
                name: "Bruce Wayne",
                salary: "4000",
                department: "Business"
            }
        ]
    }

    deleteUser = (id) => {
        this.setState({
            users: this.state.users.filter(user => id !== user.id)
        })

    }

    render() {
        return (
            <div className={"container"}>
                <Navbar/>
                <hr/>
                <Users deleteUser={this.deleteUser} users={this.state.users}/>
            </div>
        );
    }
}

export default App;
