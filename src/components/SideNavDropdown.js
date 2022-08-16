import { Nav, NavDropdown } from 'react-bootstrap';

function SideNavDropdown(props) {
  return (
    <Nav className="flex-column" >
      <NavDropdown title={props.title} id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Alert</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Autocompletes</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Badges</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Buttons</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Cards</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Checkboxes</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Contacts</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Inputs</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Modal windows</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Navs</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Radio buttons</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Ratings</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Selects</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Switchers</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Tabs</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Textareas</NavDropdown.Item>
        <NavDropdown.Item href="#action3">Vertical timelines</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default SideNavDropdown;