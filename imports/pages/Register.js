import React, { Component } from 'react';

import UiRegister from '../component/Register';
import Navbar from '../component/Navbar';
import Layout from '../component/Layout';

class Register extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Navbar {...this.props} />
                <Layout>
                    <UiRegister {...this.props} />
                </Layout>
            </div>
        );
    }
}

export default Register;