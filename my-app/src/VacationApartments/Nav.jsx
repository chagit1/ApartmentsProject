import { Menu } from '@mui/material'
import './css/style.css'
import { NavLink, Outlet } from "react-router-dom"

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import Box from '@mui/material/ListItemText';
import Box from '@mui/material/Box';


import { Sidebar } from 'primereact/sidebar';
import { Filter } from '@mui/icons-material';
import { Filters } from './Filter';
import { useState } from 'react';
import { Button } from 'primereact/button';

export const Nav = () => {
  const getUserTypeFromCookies = () => {
    const cookies = document.cookie.split(';')
    return cookies[0].split('=')[1]
  };
  const userType = getUserTypeFromCookies();
  const [visibleRight, setVisibleRight] = useState(false);

  return <>
    <div className={'nav'}>
      <NavLink to='Home' className={'link'} >Home </NavLink>
      <NavLink to='RegisterClient' className={'link'} >Sign Up</NavLink>
      <NavLink to='RegisterPublisher' className={'link'} >Sign Up Publisher</NavLink>
      <NavLink to='SignIn' className={'link'} >Sign In </NavLink>
      {/* <NavLink to='AllApartments' className={'link'} >All Apartment </NavLink>    */}
      <NavLink to='AllApartments' className={'link'} >All Apartment </NavLink>
      {/* <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
               <Filters></Filters>
            </Sidebar> */}
    </div>


    <div style={{ float: 'left', width: '20%' }}>
      <List>


        <NavLink to='MyApartments' className={'link'} >
          {userType === 'publisher' &&
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary='My Apaertment' />
              </ListItemButton>
            </ListItem>
          }
        </NavLink>

        <NavLink to='AddApartment' className={'link'} >
          {userType === 'publisher' &&
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary='Add Apaertment' />
              </ListItemButton>
            </ListItem>
          }
        </NavLink>

        <NavLink to='AddCategory' className={'link'} >
          {userType === 'publisher' &&
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary='Add Category' />
              </ListItemButton>
            </ListItem>
          }
        </NavLink>

        <NavLink to='AddCity' className={'link'} >
          {userType === 'publisher' &&
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary='Add City' />
              </ListItemButton>
            </ListItem>
          }
        </NavLink>
      </List>
      {/* <Outlet></Outlet> */}
      {/* </Box> */}
    </div>

    {/* <Menu></Menu> */}
  </>
}
