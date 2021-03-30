import React, {Component} from 'react';

const UserContext = React.createContext();

export class UserProvider extends Component {
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

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;