import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Button } from 'primereact/button';

// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Unstable_Grid2';

import { GetAllApartment, GetByCategoryId, GetByCityId, GetByPublisherId, getByNumOfBadLesser, getByNumOfPriceLesser } from './api';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { PanelMenu } from 'primereact/panelmenu';
import { GetAllCategory } from '../category/api';
import { GetAllCity } from '../city/api';
import { Sidebar } from 'primereact/sidebar';
import { useRef } from "react";


// import { Button } from 'primereact/button';
export const FilterApartments = () => {

  let listFiler = useParams()
  const { list } = listFiler
  return <>
    {/* <div style={{ width: '80%' }}> */}
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        {list?.map((u) => <Grid xs={4}  > <CardApartments data={u}></CardApartments></Grid>)}
      </Grid>
    </Box>
  </>


}

export const AllApartments = () => {
  // document.getElementsByName('pp').addEventListener(onsubmit)

  const [list, setList] = useState([])
  const [visible, setVisible] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  const priceRef = useRef()
  const badRef = useRef()


  let nav = useNavigate()

  useEffect(() => {
    debugger
    GetAllApartment()
      .then(x => {
        setList(x.data.apartment)
      })
      .catch(err => {
        nav('/signIn')
        console.log(err);
      })
  }, [])

  const byCity = (event) => {
    console.log(event);
    GetByCityId(event)
      .then(x => {

        setList(x.data.apartment);
        setVisibleRight(false)
      })
      .catch(err => {
        console.log(err);
      });
  }

  const byCategory = (event) => {
    console.log(event);
    GetByCategoryId(event)
      .then(x => {
        setList(x.data.apartment);
        setVisibleRight(false)

      })
      .catch(err => {
        console.log(err);
      });
  }

  const numPrice = () => {
    const ss = priceRef.current.value
    debugger
    getByNumOfPriceLesser(ss)
      .then(x => {
        setList(x.data.apartment);
        setVisibleRight(false)

      })
      .catch(err => {
        console.log(err);
      });
  }

  const numBad = () => {
    const ss = priceRef.current.value
    debugger
    getByNumOfBadLesser(ss)
      .then(x => {
        setList(x.data.apartment);
        setVisibleRight(false)
      })
      .catch(err => {
        console.log(err);
      });
  }

  //הצגת כל הקטגוריות 
  const [listCategory, setListCategory] = useState([])
  useEffect(() => {
    GetAllCategory()
      .then(x => {
        setListCategory(x.data.categories)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  console.log(listCategory);

  const [listCity, setListCity] = useState([])
  useEffect(() => {
    GetAllCity()
      .then(x => {
        setListCity(x.data.cities)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  console.log(listCity);

  const items = [
    {
      label: 'Catgory',
      icon: 'pi pi-file',
      items: []
    },
    {
      label: 'City',
      icon: 'pi pi-image',
      items: []
    },
    {
      label: <input placeholder='price' ref={priceRef}></input>,
      icon: 'pi pi-image',
      command: () => numPrice()
    },

    {
      label: <input placeholder='num fo bad' ref={badRef}></input>,
      icon: 'pi pi-image',
      command: () => numBad()
    },
    {
      label: 'publisher',
      icon: 'pi pi-image',
      items: [
        {
          label: 'Logos',
          icon: 'pi pi-image'
        }
      ]
    }
  ]



  let categoryItem = items.find(item => item.label == 'Catgory');
  debugger
  console.log(categoryItem);
  if (categoryItem) {
    // עובר על כל השמות במערך 'names'
    for (let name of listCategory) {
      // מוסיף אובייקט חדש למערך 'items' של האובייקט 'Category'
      categoryItem.items.push({
        label: name.nameCategory,
        icon: 'pi pi-image',
        command: () => byCategory(name._id)
      });
    }
  }

  let cityItem = items.find(item => item.label == 'City');
  debugger
  console.log(cityItem);
  if (cityItem) {
    // עובר על כל השמות במערך 'names'
    for (let name of listCity) {
      // מוסיף אובייקט חדש למערך 'items' של האובייקט 'Category'
      cityItem.items.push({
        label: name.nameCity,
        icon: 'pi pi-image',
        command: () => byCity(name._id)
      });
    }
  }
  return <>

    <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
    {/* <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)}> */}

    {/* //     </Sidebar> */}
    {/* //     <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} /> */}
    {/* // </div> */}


    <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
      <div className="card flex justify-content-center">
        <PanelMenu model={items} className="w-full md:w-20rem" />
      </div>
      {/* <input placeholder='price'></input> */}
      {/* <Price></Price> */}
    </Sidebar>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        {list?.map((u) => <Grid xs={4}  > <CardApartments data={u}></CardApartments></Grid>)}
      </Grid>
    </Box>

  </>
}
const Price = () => {
  const [list, setList] = useState([])
  const [visibleRight, setVisibleRight] = useState(false);


  const numPrice = (e) => {
    const ss = e.target.value[0]
    debugger
    getByNumOfPriceLesser(ss)
      .then(x => {
        setList(x.data.apartment);
        setVisibleRight(false)

      })
      .catch(err => {
        console.log(err);
      });
  }
  return <>
    <input type='number' onChange={numPrice}></input>
  </>
}

export const CardApartments = (props) => {
  let pathImage = "http://localhost:3001/"
  const nav = useNavigate()
  const {
    _id,
    name,
    description,
    image,
    categoryId,
    cityId,
    address,
    numOfBed,
    publisherId
  } = { ...props.data }

  const send = (_id) => {
    nav(`/TheApartment/${_id}`)
  }
  const getUserTypeFromCookies = () => {
    const cookies = document.cookie.split(';')
    return cookies[0].split('=')[1]
  };
  const userType = getUserTypeFromCookies();
  const [visibleRight, setVisibleRight] = useState(false);


  const updateThisApartment = (event) => {
    nav(`/UpdateApartment/${event}`)
  }


  return <>

    <Card sx={{ maxWidth: 340 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={pathImage + image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* {userType === 'publisher' &&
          <Button onClick={() => updateThisApartment(_id)}>ערוך דירה</Button>
        } */}
        <Button size="small" onClick={() => send(_id)}>Learn More</Button>
      </CardActions>

    </Card>

  </>
}


export default Price;
