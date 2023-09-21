import React, { Component } from 'react';
//import Profile from './Profile';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            mailid:'',
            password:'',
            data:[]
        }
    }  

    handleSubmit= (e)=>
    {
        e.preventDefault();

        const email= this.state.mailid;
        axios.get(`http://localhost:8090/getby/${email}`)
        .then(response => {
            this.setState({data: response.data});

            if (response.data.password === this.state.password) {
                alert('Your account has been logged in successfully.');

            }
            else{
              alert('Enter a valid MailId & Password!')
            }
            
    })
      }
    

  render() {
    return(
      
        <div id="box">
       
        <img id='logpic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToApO7zXOIFwLbf4TD5sKHDjAIAihvUVpCQNTGMkFev-9Rh3c&s'></img>
        <a href='/Home'><img  id="pic3" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPalrDNnb3tSfDVzPUiS2fO0vXPN4T0bjhl7KG_e2cZAsjeQq&s'></img> </a>
        <form id="text" onSubmit={this.handleSubmit}>
        <label id="po">Email</label>
        <br/>
        <input class="field" id="email" placeholder="Enter your mail" type="text" value={this.state.mailid} onChange={(e)=>{this.setState({mailid:e.target.value})}}></input>
        <br/><br/>
        <label id="po">Password</label>
        <br/>
        <input class="field" id="pass" placeholder="Enter your password" type="password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}></input>
        <br/><br/>
        <button type="submit" id="sub">Log In</button>
        </form>
        <div id="rlink">
        <Link id="rlink" to="/Signup">New User! Click HERE to Register</Link>
        </div>
        </div>
    )
  }
}