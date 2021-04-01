import React, { Component } from 'react';

const UserContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users,action.payload]
            }
        default:
            return state;
    }
}

export class UserProvider extends Component {
    state = {
        users: [
            {
                id: "uniqe-1",
                name: "John Wick",
                salary: "2000",
                department: "HR"
            },
            {
                id: "uniqe-2",
                name: "Clark Kent",
                salary: "3000",
                department: "Q&A"
            },
            {
                id: "unique-3",
                name: "Bruce Wayne",
                salary: "4000",
                department: "Business"
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
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