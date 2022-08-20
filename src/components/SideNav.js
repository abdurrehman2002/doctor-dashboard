import Nav from 'react-bootstrap/Nav';

function SideNav() {
  return (
    <Nav className="flex-column sideNav" >
      <div>
        <Nav.Link href="/dashboard" className='SideNavDashboard' >
          <i class="fa fa-thermometer-half"></i>Dashboard</Nav.Link>
        <Nav.Link href="/appointments"  className='SideNavDashboard'>
          <i class="fa fa-stethoscope"></i>Appointments</Nav.Link>
        <Nav.Link className='SideNavDashboard'>
          <i class="fa fa-user-md"></i>Doctors</Nav.Link>
        <Nav.Link className='SideNavDashboard'>
          <i class="fa fa-user-md"></i>Departments</Nav.Link>
        <Nav.Link className='SideNavDashboard'>
          <i class="fa fa-wheelchair"></i>Patients</Nav.Link>
        <Nav.Link className='SideNavDashboard' >
          <i class="fa fa-credit-card"></i>Payments</Nav.Link>
      </div>
    </Nav>
  );
}

export default SideNav;