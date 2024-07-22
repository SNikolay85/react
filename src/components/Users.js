import React from "react"
import User from "./User"

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    "id": 1,
                    "first_name": "Bob", 
                    "last_name": "Marley", 
                    "patronymic": "mc",
                    "age": 25,
                    "isHappy": true
                },
                {
                    "id": 2,
                    "first_name": "Jack", 
                    "last_name": "Richer", 
                    "patronymic": "vc",
                    "age": 40,
                    "isHappy": false
                }
            ]
        }

    }
    render() {
        if (this.state.users.length > 0)
            return (
                <div>
                    {this.state.users.map((user) => (
                       <User key={user.id} user={user} />
                    ))}
                </div>
            )
        else
            return (
                <div className="block_user">
                    <h3>Пользователей нет</h3>
                </div>
            )
    }
}

export default Users