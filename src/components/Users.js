import React from "react"

class Users extends React.Component {
    users = [
        {
            "id": 1,
            "first_name": "\u041d\u0438\u043a\u043e\u043b\u0430\u0439", 
            "last_name": "\u0421\u043f\u0435\u0448\u0438\u043b\u043e\u0432", 
            "patronymic": "\u042e\u0440\u044c\u0435\u0432\u0438\u0447",
            "age": 25,
            "isHappy": true
        },
        {
            "id": 2,
            "first_name": "\u041a\u0430\u0440\u0435\u043d", 
            "last_name": "\u0412\u0430\u0440\u0442\u0430\u043d\u044f\u043d", 
            "patronymic": "\u041e\u0432\u0438\u043a\u043e\u0432\u0438\u0447",
            "age": 40,
            "isHappy": false
        }
    ]
    render() {
        if (this.users.length > 0)
            return (
                <div>
                    {this.users.map((user) => (
                        <div className="block_user" key={user.id}>
                            <h3>{user.last_name} {user.first_name}</h3>
                            <p>{user.age}</p>
                            <b>{user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
                        </div>
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