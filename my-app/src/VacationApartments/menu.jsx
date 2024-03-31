

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AllApartments } from './apartment/CardApartments';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AllMyApartments } from './publisher/MyApartment';



export const Menu = ()=> {

  const [showAllComponent, setShowAllComponent] = useState(false);
  const [showMyComponent, setShowMyComponent] = useState(false);
  const [showAddComponent, setShowAddComponent] = useState(false);

  
  let nav = useNavigate()
  const allApartments = () => {
    nav('/AllApartments')
    // setShowAllComponent(true);
  };

  const MyApartments = () => {
    setShowMyComponent(true);
  };

  const AddApartments = () => {
    setShowAddComponent(true);
  };

    return<>
       
   


<Box sx={{ width: 250 }} role="presentation" >
<List>
  {/* {[ 'All Apaertment','My Apartment','Add Apartment', 'Drafts'].map((text, index) => ( */}
    <ListItem onClick={allApartments}>
    {/* {showAllComponent && <AllApartments/>} */}
      <ListItemButton>
        <ListItemIcon>
          {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
        </ListItemIcon>
        <ListItemText primary= 'All Apaertment' />
      </ListItemButton>
    </ListItem>

    <ListItem onClick={MyApartments} >
    {showMyComponent && <AllMyApartments />}
      <ListItemButton>
        <ListItemIcon>
          {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
        </ListItemIcon>
        <ListItemText primary= 'My Apartment' />
      </ListItemButton>
    </ListItem>

    <ListItem onClick={AddApartments} >
    {/* {showAddComponent && <AddApartments />} */}
      <ListItemButton>
        <ListItemIcon>
          {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
        </ListItemIcon>
        <ListItemText primary= 'Add Apartment' />
      </ListItemButton>
    </ListItem>

  {/* // ))} */}
</List>
<Divider />
<List>
  
  {['All mail', 'Trash', 'Spam'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>
</Box>

</>
}