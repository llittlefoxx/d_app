import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import './NavComponentStyle.css';

  function  UnloggedUserRoots() {
        return (
            <Router>
                <div>
                    <ul className="navigation">
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/test">Test</Link>
                        </li>
                    </ul>
                </div>
            </Router>
        );
    }

    function  LoggedUserRoots(props) {
        return (
            <Router>
                <div>
                    <ul className="navigation">
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/profile">{props.name} Profile</Link>
                        </li>
                        
                        <li>
                            <Link to="/about" >About</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
                </div>
            </Router>
        );
    }

    function  NavComponent (props){
        const userLoggedIn = props.userLoggedIn;
        console.log("####", userLoggedIn);
        if(userLoggedIn){
        return <LoggedUserRoots/>;
        }
        return <UnloggedUserRoots/>;
     }
 


export default NavComponent;