import { Container, Navbar, Dropdown } from 'react-bootstrap';
import { Input } from '.';
import userProfile from '../assets/images/userProfile.jpg'


function Header() {
  return (
    <div className='headerWrapper'>
      <Navbar>
        <Container>
          <Input inputType={"search"} placeholder={"Type page's title"}
            padding={"10px 100px 10px 20px"}

          />
        </Container>
      </Navbar>

      <div className='DropdownWrapper'>
        <div className='HeaderNotifications'>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Notifucations
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>


        {/* <div className='profile'> */}
        <div className='d-flex'>
          <div className='headerProfileImg'>
            <img alt='user profile' src={userProfile} />
          </div>
          <Dropdown >
            <Dropdown.Toggle className='DropdownToggle' variant="success" id="dropdown-basic">

            </Dropdown.Toggle>
            <Dropdown.Menu className='p-3'>
              <div className='d-flex pb-3'>
                <div className='Profileicons'><i class="fa fa-edit" ></i></div>
                <Dropdown.Item href="#/action-1">Edit account</Dropdown.Item>
              </div>
              <div className='d-flex pb-3'>
                <div className='Profileicons'><i class="fa fa-user"></i></div>
                <Dropdown.Item href="#/action-2">User profile</Dropdown.Item>
              </div>
              <div className='d-flex pb-3'>
                <div className='Profileicons'><i class="fa fa-calendar"></i></div>
                <Dropdown.Item href="#/action-1">Calender</Dropdown.Item>
              </div>
              <div className='d-flex pb-3'>
                <div className='Profileicons'><i class="fa fa-edit" ></i></div>
                <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
              </div>
              <div className='d-flex pb-3'>
                <div className='Profileicons'><i class="fa fa-edit" ></i></div>
                <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
              </div>

            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* </div> */}
      </div>


    </div>

  );
}

export default Header;