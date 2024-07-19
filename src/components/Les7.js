import React from "react"
import Header from "./Header"
import Users from "./Users"

class Les7 extends React.Component {

       render() {
              return(
                     <div>
                            <Header my_text='Список пользователей' />    
                            <div className="main_form">
                                <Users />
                            </div> 
                            <aside></aside>
                     </div>)   
       }   
}

export default Les7
