import React, { Component } from 'react';

import UiLogin from '../component/Login';
import Navbar from '../component/Navbar';
import Layout from '../component/Layout';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Navbar {...this.props} />
                <Layout>
                    <UiLogin {...this.props} />
                </Layout>
            </div>
        );
    }
}

export default Login;