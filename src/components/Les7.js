import React from "react"
import Header from "./Header"
import Users from "./Users"
import AddUser from "./AddUser"

class Les7 extends React.Component {
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
              this.addUser = this.addUser.bind(this)
      
          }
       render() {
              return(
                     <div>
                            <Header my_text='Список пользователей' />    
                            <div className="main_form">
                                <Users users={this.state.users}/>
                            </div> 
                            <aside>
                                   <AddUser onAdd={this.addUser} />
                            </aside>
                     </div>)   
       }  

       addUser(user) {
              const id = this.state.users.length + 1
              this.setState({
                     users: [...this.state.users, {id, ...user}]
              })
       }
}

export default Les7
