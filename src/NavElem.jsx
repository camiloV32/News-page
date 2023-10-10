import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Newspaper } from 'react-bootstrap-icons';

import { useState } from 'react';

function NavElem(props) {
    const [searchQuery, setSearchQuery] = useState("");
    const handleInputChange = (event) =>{
        setSearchQuery(event.target.value)
    };
    const handleClick = () =>{
        props.sendDataToParent(searchQuery);
    }
  return (
    <Navbar expand="md" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand href="#"><Newspaper/> Noticias</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {props.sections.map(nameSection=>{return <Nav.Link href={`#${nameSection.section}`}>{nameSection.section}</Nav.Link>})}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Button variant="outline-success" onClick={handleClick}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavElem;