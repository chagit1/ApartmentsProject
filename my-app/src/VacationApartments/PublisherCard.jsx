// import { Filter } from "@mui/icons-material"
// import AddApartmentForm from "./publisher/AddApartment"
// import { Filters } from "./Filter"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import './index.css';
import { DeleteTwoTone, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Swal from 'sweetalert2';
import { Remove, Update } from './apartment/api';
import swal from 'sweetalert';
const { Meta } = Card;
export const PublisherCard = (props)=> {
 
  let pathImage = "http://localhost:3001/"
  const nav = useNavigate()
  const {
    _id,
    name,
    description,
    price,
    image,
    categoryId,
    cityId,
    address,
    numOfBed,
    publisherId
  } = { ...props.data }

  const more = (_id) => {
    nav(`/TheApartment/${_id}`)
  }
  const getUserTypeFromCookies = () => {
    const cookies = document.cookie.split(';')
    return cookies[0].split('=')[1]
  };
  const userType = getUserTypeFromCookies();
  const [visibleRight, setVisibleRight] = useState(false);


  const updateThisApartment = (_id, item) => {
    Swal.fire({
      title: 'Update your apartment',
      html: `
      <form id="ApartmentForm">
  
      <label for="apartmentName">Name:</label><br>
      <input value=${item.name} type="text" id="apartmentName" name="apartmentName"><br><br>
    
      <label for="apartmentaddress">Address:</label><br>
      <input value=${item.address}  type="text" id="apartmentaddress" name="apartmentaddress"><br><br>
    
      <label for="apartmentDescription">Description:</label><br>
      <input value=${item.description} type="text" id="apartmentDescription" name="apartmentDescription"><br><br>
    
      <label for="apartmentNumBeds">Number of beds:</label><br>
      <input value=${item.numOfBed} type="text" id="apartmentNumBeds" name="apartmentNumBeds"><br><br>
    
      <label for="apartmentPrice">Price:</label><br>
      <input value=${item.price} type="text" id="apartmentPrice" name="apartmentPrice"><br><br>
          
      <Button variant="outlined" color="success" id="submitBtn"  type={'submit'} >update</Button>
    </form>
    `,
      showCancelButton: true,
      showConfirmButton: false,
    });
    document.getElementById('ApartmentForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const apartmentName = document.getElementById('apartmentName').value;
      const apartmentaddress = document.getElementById('apartmentaddress').value;
      const apartmentDescription = document.getElementById('apartmentDescription').value;
      const apartmentNumBeds = document.getElementById('apartmentNumBeds').value;
      const apartmentPrice = document.getElementById('apartmentPrice').value;
  
      const Apartment = {
        _id: item._id,
        name: apartmentName,
        address: apartmentaddress,
        descreption: apartmentDescription,
        numOfBed: apartmentNumBeds,
        price: apartmentPrice
      }
      Update(Apartment, _id)
        .then(x => {
          console.log(x.data)
          nav("/MyApartment")
          Swal.fire({
            icon: 'success',
            title: 'your apartment was updated',
            text: ' successfully',
          });
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'update Failed',
            text: 'update failed. Please check your credentials and try again.',
          });
        })
    });
  }

  const DeleteApertment = (_id) => {
    debugger
    Remove(_id)
    .then(x => {
      Swal.fire({
        icon: 'success',
        title: 'your apartment was deleted',
        text: ' successfully',
      });
      window.location.reload(false)
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'update Failed',
        text: 'update failed. Please check your credentials and try again.',
      });
    })
  }
  
  return <>
        <Card
  style={{
    width: 300,
  }}
  cover={
    <img alt="example" src= {pathImage + image}/>
  }
  actions={[
    <DeleteTwoTone key="setting"  onClick={() => DeleteApertment(_id)}/>,
    <EditOutlined key="edit" onClick={() => updateThisApartment(_id, props.data)}  />,
    <EllipsisOutlined key="ellipsis" onClick={more} />,
  ]}
>
  <Meta
    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
    title={name}
    description={description}
  />
</Card>
      {/* <AddApartmentForm></AddApartmentForm> */}
{console.log(document.cookie.token)}
    {/* <Card style={{
    width: 300,
  }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
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
          <Button onClick={() => updateThisApartment(_id, props.data)}>ערוך דירה</Button>
        <Button size="small" onClick={() => send(_id)}>Learn More</Button>
      </CardActions>
    </Card> */}
  </>
}
// export const AllMyApartments = () => {
//   debugger
//   const [list, setList] = useState([])
//    let nav = useNavigate()
//    const cookies = document.cookie.split(';')
//  const token = cookies[1].split('=')[1]

//   useEffect(() => {
//     debugger
//     GetByPublisherId(token)
//       .then(x => {
//         setList(x.data.apartment)
//       })
//       .catch(err => {
//         nav('/signIn')
//         console.log(err);
//       })
//   }, [])

//   return <>
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2} columns={16}>
//         {list?.map((u) => <Grid xs={4}  > <CardApartments data={u}></CardApartments></Grid>)}
//       </Grid>
//     </Box>
//   </>
// }
