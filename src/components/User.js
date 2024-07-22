import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5"

class User extends React.Component {
    user = this.props.user
    render() {
           return (
                <div className="block_user">
                    <IoCloseCircleSharp className="delete-icon" />
                    <IoHammerSharp className="edit-icon" />
                    <h3>{this.user.last_name} {this.user.first_name}</h3>
                    <p>{this.user.age}</p>
                    <b>{this.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
                </div>
           )
    }
}

export default User