import React from 'react';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap'

const Layout = (props) => {
    return(
        <Grid>
            <Row className="show-grid">
                <Col md={2} />
                
                <Col xs={12} md={8}>
                    {props.children}
                </Col>
                <Col md={2} />
            </Row>
        </Grid>
    );
} 
export default Layout;
