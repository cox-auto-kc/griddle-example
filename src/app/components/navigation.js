import React from 'react';
import ReactDom from 'react-dom';

//Router
//import { Link } from 'react-router';

//Bootstrap Components
import { Navbar, Nav, MenuItem } from 'react-bootstrap';



class Navigation extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Navbar>
        <Nav >
            <MenuItem href="/" >
              Home
            </MenuItem>
            <MenuItem href="/buttons" >
              Buttons
            </MenuItem>
            <MenuItem href="/progress-bar" >
              Progress Bar
            </MenuItem>
            <MenuItem href="/text-fields" >
              Text Fields
            </MenuItem>
            <MenuItem href="/linked-items" >
              Linked Items
            </MenuItem>
            <MenuItem href="/alerts" >
              Alerts
            </MenuItem>
            <MenuItem href="/charts" >
              Charts
            </MenuItem>
            <MenuItem href="/reddit" >
              Reddit
            </MenuItem>
          </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
