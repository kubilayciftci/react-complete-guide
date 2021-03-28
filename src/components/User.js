import React, {Component} from "react";
import PropTypes from "prop-types"

class User extends Component {
    static defaultProps = {
        name: "N/A",
        salary: "N/A",
        department: "N/A"
    }

    render() {
        //Destructing
        const {name, department, salary, company} = this.props
        return (
            <div className={"col-md 8 mb-4"}>
                <div className={"card"}>
                    <div className={"card-header d-flex justify-content-between"}>
                        <h4 className={"d-inline"}>{name}</h4>
                        <i className={"far fa-trash-alt"} style={{cursor:"pointer"}}/>
                    </div>
                    <div className={"card-body"}>
                        <p className={"card-text"}>Salary: {salary}</p>
                        <p className={"card-text"}>Department: {department}</p>
                        <p className={"card-text"}>Company: {company}</p>
                    </div>
                </div>
            </div>
        )
    }
}

//Bu şekilde de tanımlanabilir.
//User.defaultProps = {}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired
}


export default User;