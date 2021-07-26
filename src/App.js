
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Fullname from './components/profiles/Fullnames.js';
import Address from './components/profiles/Address.js';
import Profilesphoto  from './components/profiles/Profilesphoto.js';
import { Col, Container, Row } from 'react-bootstrap';



const App = () => {
 return (
  
<Container>
  <Row>
    <Col><Profilesphoto />
    </Col>
    <Col>
    <Fullname class="names" />
    <Address />
     
    </Col>
  </Row>
  </Container>

    
  
 );
};
export default App;

