import React from "react"
import Header from "./Header"
import Users from "./Users"
import AddUser from "./AddUser"

class Les7 extends React.Component {

       render() {
              return(
                     <div>
                            <Header my_text='Список пользователей' />    
                            <div className="main_form">
                                <Users />
                            </div> 
                            <aside>
                                   <AddUser />
                            </aside>
                     </div>)   
       }   
}

export default Les7
