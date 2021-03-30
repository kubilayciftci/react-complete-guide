import React, { Component } from "react";
import PropTypes from "prop-types"
import UserConsumer from "../context"
class User extends Component {
    state = {
        isVisible: false
    }
    static defaultProps = {
        name: "N/A",
        salary: "N/A",
        department: "N/A"
    }

    //Constructor option for bind process
    /*constructor(props) {
        super(props);
        this.onClickEvent=this.onClickEvent.bind(this);
    }*/

    // Option 1 for state
    /*constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        }
    }*/

    onClickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeleteUser = (dispatch,e) => {
        const {id} = this.props;
        
       // Consumer Dispatch
       dispatch({type : "DELETE_USER",payload:id});
    }
    render() {
        //Destructing
        const { name, department, salary } = this.props;
        const { isVisible } = this.state;

        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;

                        return (
                            <div className={"col-md 8 mb-4"}>
                                <div className={"card"}>
                                    <div className={"card-header d-flex justify-content-between"}>
                                        <h4 className={"d-inline"} onClick={this.onClickEvent.bind(this)}>{name}</h4>
                                        <i onClick = {this.onDeleteUser.bind(this,dispatch)} className = "far fa-trash-alt" style = {{cursor : "pointer"}}></i>
                                    </div>
                                    {
                                        isVisible ?
                                            <div className={"card-body"}>
                                                <p className={"card-text"}>Salary: {salary}</p>
                                                <p className={"card-text"}>Department: {department}</p>
                                            </div>
                                            : null
                                    }
                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

//Option for state
//User.defaultProps = {}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired
}

export default User;