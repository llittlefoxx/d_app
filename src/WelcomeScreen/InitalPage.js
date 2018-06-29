import React from 'react';
import NavComponent from '../Rooter/NavComponent';
import Login from './../Login/Login';

class InitalPage extends React.Component {

    state = {
        login: "",
        password: "",
        userLoggedIn: false,
    }

    onChangeLogin = (event) => {
        this.setState({
            login : event.target.value
        });
    }

    onChangePassword = (event) => {
        this.setState({
            password : event.target.value
        });
    }

    onLoggingIn = (event, credentials) => {
        console.log(event, credentials);
        this.setState({
            userLoggedIn : true
        });
    }

    render() {
        return (
            <div>
                <NavComponent userLoggedIn={this.state.userLoggedIn} />

                <Login 
                login = {this.state.login} 
                password = {this.state.password} 
                onChangeLogin = {this.onChangeLogin} 
                onChangePassword = {this.onChangePassword} 
                onLoggingIn = {this.onLoggingIn}/>
            </div>
        );
    }

}

export default InitalPage;