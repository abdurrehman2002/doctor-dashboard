import Nav from 'react-bootstrap/Nav';

function SideNav() {
  return (
    <Nav className="flex-column sideNav" >
      <Nav.Link href="/home" className='p-0 pb-2' style={{color:"black"}}>Dashboard</Nav.Link>
      <Nav.Link className='p-0 pb-2'>Appointments</Nav.Link>
      <Nav.Link className='p-0 pb-2'>Doctors</Nav.Link>
      <Nav.Link className='p-0 pb-2'>Departments</Nav.Link>
      <Nav.Link className='p-0 pb-2'>Patients</Nav.Link>
      <Nav.Link className='p-0 pb-2' >Payments</Nav.Link>
    </Nav>
  );
}

export default SideNav;