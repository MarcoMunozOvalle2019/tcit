import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import Agrega from './components/Agrega';
import Panel from './components/Panel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Marco ejemplo</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Grid>
          <Row>
          <Panel />
          
          <Col sm={8}>
              <Agrega />
            </Col>
            
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
