import React, { Component } from 'react';
import './App.css';

class App extends React.Component{

  constructor(){
    super()
    this.state={
      FirstName:"",
      LastName:"",
      username:"",
      email:"",
      password:"",
      reconfirm_password:"",
      returningusername:"",
      returningpassword:"",
      userType:"Regular",
      
    }
    
  }
  handleFirstNameChange=(event)=>{
    this.setState({
      FirstName:event.target.value
    })
    
  }

  handleLastNameChange=(event)=>{
    this.setState({
      LastName:event.target.value
    })
    
  }

  handleusernameChange=(event)=>{
    this.setState({
      username:event.target.value
    })
    
  }



  handleemailChange=(event)=>{
    this.setState({
      email:event.target.value
    })
    
  }

  handlepasswordChange=(event)=>{
    this.setState({
      password:event.target.value
    })
    
  }

  handlereconfirm_passwordChange=(event)=>{
    this.setState({
      reconfirm_password:event.target.value
    })
    
  }

  handleSubmit = event =>{
    alert("Confirm Submission")
  }
  
  handlereturningusernameChange=(event)=>{
    this.setState({
      returningusername:event.target.value
    })
    
  }
  handlereturningpasswordChange=(event)=>{
    this.setState({
      returningpassword:event.target.value
    })
    
  }

  



 
  render(){
  return(
    <body>
    <div className = "LoginPage" id="LoginPage">
 
     
      <div className="Registration return">
        <form id ="oldUserInfo" onSubmit ={this.handleSubmit}>
          <h1>Welcome Back</h1>
          <h3>Sign back in to start where you left!</h3>
          
            <label className ="label2" htmlFor="returningUser">Username</label>
            <input type ="text" id ="returningUser" className ="input2" placeholder="Enter your username"name ="returningUser"value ={this.state.returningusername}onChange={this.handlereturningusernameChange}/>
          
            <label className ="label2" htmlFor="returningPassword">Password</label>
            <input type ="text" id ="returningPassword" className ="input2" placeholder="Enter your password" name="returningPassword"  value ={this.state.returningpassword}onChange={this.handlereturningpasswordChange}/>
            
            <button id="sign_in" type ="sign_in">Log In</button>
        </form>
      </div>

      <div className= "Registration create">
        <form id ="newUserInfo" onSubmit ={this.handleSubmit}>
          <h1>Don't have an account?</h1>
          <h3>Create an account!</h3>
          
            <label className ="label1" htmlFor ="Fname">First Name</label>
            <input type ="text" id="Fname" className="input1" placeholder="Enter your first name" name="Fname" value ={this.state.FirstName}onChange={this.handleFirstNameChange}/>
          
          
            <label className ="label1" htmlFor ="Lname">Last Name</label>
            <input type ="text" id="Lname" className="input1" placeholder="Enter your last name" name ="Lname" value ={this.state.LastName}onChange={this.handleLastNameChange}/>
          
          
            <label className ="label1" htmlFor="user">Username</label>
            <input type ="text" id ="user" className ="input1" placeholder="Enter your username"value ={this.state.username}onChange={this.handleusernameChange}/>
          
          
            <label className ="label1" htmlFor="email"> Email Address</label>
            <input type ="text" id ="email" className ="input1" placeholder="Enter your email address" name ="email" value ={this.state.email}onChange={this.handleemailChange}/>
          
          
            <label className ="label1" htmlFor="password">Password</label>
            <input type ="text" id ="password" className ="input1" placeholder="Enter your password" name="password" secureTextEntry ={true} value ={this.state.password}onChange={this.handlepasswordChange}/>
          
          
            <label className ="label1" htmlFor="reconfirm">Reconfirm Password</label>
            <input type ="text" id ="reconfirm" className ="input1" placeholder="Re-enter your password"  name="reconfirm"  value ={this.state.reconfirm_password}onChange={this.handlereconfirm_passwordChange}/>
            <div className= "reg">
            <label className ="Terms">
              <input className="Check" type="checkbox" name="confirm"/>I agree to all the terms and conditions.
            </label>
            </div>
          
          <button id="submit-but" type ="submit">Create an Account</button>
        </form>
      </div>
     
    </div>
    </body>
    
    
  )
  }
}
export default App;



