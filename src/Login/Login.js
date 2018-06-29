import React from 'react';
import backendData from './../data/source.json';
import './Login.css';

class Login extends React.Component {
    
    /*
    * We don't need the constructor anymore because we have lifted the state up to the InitialPage and we are using the arrow functions in the place of binding
    constructor(props) {
        super(props);
       // this.handleFormSubmit = this.handleFormSubmit.bind(this);
       // this.handlePasswordChange = this.handlePasswordChange.bind(this);
       // this.handleLoginChange = this.handleLoginChange.bind(this);
    }
*/
    handleFormSubmit = (event) => {
        event.preventDefault();
      
        let credentials = {
            login: this.props.login,
            password: this.props.password
        };
      
        console.log(credentials);

        if (this.verifyCredentials(credentials)) {
            console.log("### ", 'logged');
           this.props.onLoggingIn(event, credentials);
        } else {
            console.log("### ", 'not logged');

        }
    }

    /*
    * This method verifies the credentials of the user. 
    */
    verifyCredentials(credentials) {
        let userExists = false;
        let users = backendData.users;
        for (let i = 0; i < users.length; i++) {
            if (users[i].login === credentials.login && users[i].password === credentials.password) {
                userExists = true;
            }
        }
        return userExists;
    }

    handleLoginChange = (event) => {
        console.log('### Login '+ event.target.value);
        this.props.onChangeLogin(event);
    }

    handlePasswordChange = (event) => {
        console.log('### Password '+ event.target.value);
        this.props.onChangePassword(event);
    }

    render() {
        console.log(this.props);
        return (
            <form className="loginForm" onSubmit={this.handleFormSubmit}>
                <label>
                    Login:
<input type="text" name="login" value={this.props.login} onChange={this.handleLoginChange} />
                </label>
                <label>
                    Password:
<input type="password" name="password" value={this.props.password} onChange={this.handlePasswordChange} />
                </label>
                <input type="submit" value="submit" />
            </form >
        );
    }
}

export default Login;