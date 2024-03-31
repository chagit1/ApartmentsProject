import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useParams } from 'react-router-dom';
import { GetByIdApartment, Remove } from './api';
import { useEffect, useState } from 'react';
import { Booking } from './Booking';
import { Button } from 'primereact/button';

const style = {
  p: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  // border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};


export const DeleteApertment = () => {
  const remov = () => {

  }


  return <>

    {/* <Button variant="outlined" onClick={remov}>
         to delete 
        </Button> */}
    <Button pButton icon="pi pi-minus-circle"
      class="md:align-self-end mb-2 p-button-rounded" pInputText pTooltip="Remove"
      onClick={(e) => remov()}>
    </Button>

  </>
}

export const TheApartment = () => {
  let theApartment = useParams()
  const { _id } = theApartment
  const [apartment, setApartment] = useState()
  // const remov = () => {
  //   useEffect(() => {

  //     Remove(_id)
  //       .then(x => { 

  //         console.log(x);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  //   }, [])

  // }
  console.log(_id);
  useEffect(() => {

    GetByIdApartment(_id)
      .then(x => {
        setApartment(x.data.apartment)
        console.log(x);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return <>
  <img src={apartment?.image}></img>
    <List sx={style} aria-label="mailbox folders">
      <ListItem>
        <ListItemText primary="type:" />
        {apartment?.categoryId.nameCategory}

      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="name:" />
        {apartment?.name}
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="price:" />
        {apartment?.price}
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Spam" />
        {apartment?.weather}
      </ListItem>
    </List> 
    <Booking></Booking>

    {/* <Button pButton icon="pi pi-minus-circle"
                                    class="md:align-self-end mb-2 p-button-rounded" pInputText pTooltip="Remove"
                                    onClick={(e) => remov()}>
                          </Button> */}

    {/* <DeleteApertment></DeleteApertment> */}
  </>
}