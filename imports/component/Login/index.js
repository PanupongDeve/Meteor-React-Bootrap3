import React, { Component } from 'react';
import Query from './query';


class Login extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        import './login.css';
    }

    componentDidMount() {
        Query();
    }

    render() {
        return (
            <div className="login-pages">
                <div className="forms">
                    <form className="register-forms">
                        <h1>Register Form</h1>
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p className="message">Already registered? <a href="#">Sign In</a></p>
                    </form>
                    <form className="login-forms">
                        <h1>Login Form</h1>
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button>login</button>
                        <p className="message">Not registered? <a href="#">Create an account</a></p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login