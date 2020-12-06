import axios from 'axios';
import React, { Component } from 'react';
import './Register.css';

class Register extends React.Component{

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
      success: false
      
    }
    
  }

  handleusernameChange=(event)=>{
    this.setState({
      username:event.target.value
    })
    
  }


  handlepasswordChange=(event)=>{
    this.setState({
      password:event.target.value
    })
    
  }

  handleuserTypeChange=(event)=>{
    this.setState({
      userType:event.target.value
    })
    
  }

  handlereconfirm_passwordChange=(event)=>{
    this.setState({
      reconfirm_password:event.target.value
    })
    
  }

  handleSubmit = event =>{
    event.preventDefault();

    

    const formData = {
      username: this.state.username,
      password: this.state.password,
      reconfirmPassword: this.state.reconfirm_password,
      returningUsername: this.state.returningusername,
      returningPassword: this.state.returningpassword,
      userType: this.state.userType
    }

    //Register
    if (formData.returningUsername.length !== 0 && formData.returningPassword !== 0) {
      
      const user = {
        user: {

          username: formData.returningUsername,
          password: formData.returningPassword

        }
        
      }

      axios.post("/login", user)
      .then((response => {
        this.setState({
          success: true 
        });
        console.log(response);

      }))
      .catch(err =>{
        console.log(err);
        console.log(err.message);
      });
      
    } 

    else {

      const user = {
        user: {
          username: formData.username,
          password: formData.password,
          type: formData.userType
        }
    }

    axios.post("/users", user)
      .then((response => {
        this.setState({
          success: true 
        });
        console.log(response);

      }))
      .catch(err =>{
        console.log(err);
      });
    
    };

    if (this.state.success === true) {
      alert("Confirm Submission - Success!");
    } else {
      alert("Confirm Submission - Unsuccessful");
    }

    

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
    <body className = "body">
    <div className = "LoginPage" id="LoginPage">
 
      <div className="Registration return">
        <form id ="oldUserInfo" onSubmit ={this.handleSubmit}>
          <h1 className = "h1">Welcome Back</h1>
          <h3 className = "h3">Sign back in to start where you left!</h3>
          
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
          
            <label className ="label1" htmlFor="user">Username</label>
            <input type ="text" id ="user" className ="input1" placeholder="Enter your username"value ={this.state.username}onChange={this.handleusernameChange}/>
          
            <label className ="label1" htmlFor="password">Password</label>
            <input type ="text" id ="password" className ="input1" placeholder="Enter your password" name="password" secureTextEntry ={true} value ={this.state.password}onChange={this.handlepasswordChange}/>
          
            <label className ="label1" htmlFor="password">User Type</label>
            <input type ="text" className ="input1" placeholder="Enter your userType (Regular or Contributing)" name="userType" secureTextEntry ={true} value ={this.state.userType}onChange={this.handleuserTypeChange}/>

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

export default Register;


