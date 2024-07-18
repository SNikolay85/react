import React from "react"
import Header from "./Header"
import Image from "./Image"
import logo from "../img/logo512.png"

class App extends React.Component {
       helpText = 'Help text'
       render() {
              return(
                     <div className='name'>
                            <Header my_text='Шапка сайта' />    
                            <Header my_text='Еще шапка!!!' />    
                            <h1>{this.helpText}</h1>
                            <input placeholder={this.helpText}        
                            onClick={this.inputClick} 
                            onMouseEnter={this.mouseOver} />
                     <p>{this.helpText === 'Help text!' ? 'Yes' : 'No'}</p>  
                     <Image my_image={logo} alt='description1' />
                     <img className='logo_pic' src={logo} alt='description2' />  
                     </div>)   
       }   
       inputClick() {console.log('Clicked')}
       mouseOver() {console.log('Mouse Over')}
}

export default App
