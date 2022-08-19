import { Container, Navbar, Dropdown } from 'react-bootstrap';
import { Input,CSButton } from '../components';

import userProfile from '../assets/images/userProfile.jpg'


function Header(props) {
  return (
    <div className='headerWrapper'>
      <Navbar>
        <Container>
          <div className='search'>
          <div className='searchInput'>
          <Input inputType={"search"} placeholder={"Type page's title"}
            padding={"10px 100px 10px 20px"}
            searchIcon={"fa fa-search "}
            InputCSS={"form-input "}
          />
          </div>
          
          </div>
          
        </Container>
      </Navbar>

      <div className='DropdownWrapper'>
        <div className='HeaderNotifications'>
          <Dropdown>
            <Dropdown.Toggle className='DropdownToggleNotification'  variant="secondary" id="dropdown-basic">
            <i class="fa fa-bell" aria-hidden="true"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu className='p-4'>
              <div className='NotificationDropdownHeading'>
                <h2>Notificatons</h2>
                <p>Clear All</p>
              </div>
              <div className='notification'>
                <div className='Notificatonicons'><i class="fa fa-heart"></i></div>
                <div className='notificationText'>
                  <Dropdown.Item href="#/action-1" className='notificationText'>Sara Crouch liked your photo</Dropdown.Item>
                  <p>17 minutes ago</p>
                </div>
              </div>
              <div className='notification'>
                <div className='Notificatonicons'><i class="fa fa-users"></i></div>
                <div className='notificationText'>
                  <Dropdown.Item href="#/action-1" className='notificationText'>New user registered</Dropdown.Item>
                  <p>23 minutes ago</p>
                </div>
              </div>
              <div className='notification'>
                <div className='Notificatonicons'><i class="fa fa-share-alt"></i></div>
                <div className='notificationText'>
                  <Dropdown.Item href="#/action-1" className='notificationText'>Amanda Lie sharedyour post</Dropdown.Item>
                  <p>25 minutes ago</p>
                </div>
              </div>
              <div className='notification'>
                <div className='Notificatonicons'><i class="fa fa-users"></i></div>
                <div className='notificationText'>
                  <Dropdown.Item href="#/action-1" className='notificationText'>New user registered</Dropdown.Item>
                  <p>32 minutes ago</p>
                </div>
              </div>
              <div className='notification'>
                <div className='Notificatonicons'><i class="fa fa-inbox"></i></div>
                <div className='notificationText'>
                  <Dropdown.Item href="#/action-1" className='notificationText'>You have a new message</Dropdown.Item>
                  <p>58 minutes ago</p>
                </div>
              </div>

              {/* <div className='d-flex justify-content-center mb-4'> */}
            <CSButton titlefontSize={"13px"} color={"#fff"}
              title={"View all notifications"} width={"170px"}
              backgroundColor={props.CardBtnColor}
              border={"none"} iconRight={"fa fa-calendar-o"} />
              {/* </div> */}

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
                <Dropdown.Item href="#/action-1" className='profileText'>Edit account</Dropdown.Item>
              </div>
              <div className='d-flex pb-3'>
                <div className='Profileicons'><i class="fa fa-user"></i></div>
                <Dropdown.Item href="#/action-2" className='profileText'>User profile</Dropdown.Item>
              </div>
              <div className='d-flex pb-3'>
                <div className='Profileicons'><i class="fa fa-calendar"></i></div>
                <Dropdown.Item href="#/action-1" className='profileText'>Calender</Dropdown.Item>
              </div>
              <div className='d-flex pb-3'>
                <div className='Profileicons'><i class="fa fa-cogs"></i></div>
                <Dropdown.Item href="#/action-3" className='profileText'>Settings</Dropdown.Item>
              </div>
              <div className='d-flex pb-3'>
                <div className='Profileicons'><i class="fa fa-sign-out"></i></div>
                <Dropdown.Item href="#/action-3" className='profileText'>Log Out</Dropdown.Item>
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