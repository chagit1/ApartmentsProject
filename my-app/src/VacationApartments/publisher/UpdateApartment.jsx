import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { GetAllCategory } from "../category/api";
import { GetAllCity } from "../city/api";
import { CreateApartment, GetByIdApartment, Update } from "../apartment/api";
import { Button, FormControl, Input, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";

export const UpdateApartment = () => {
    const [city, setCity] = useState([]);
    const [cityId, setCityId] = useState('');
    const [category, setCategory] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [image, setImage] = useState();
    const [apartment, setApartment] = useState([])

    const nav = useNavigate();

    let theApartment = useParams()
    const { _id } = theApartment
    useEffect(() => {

        GetByIdApartment(_id)
          .then(x => {
            setApartment(x.data.apartment)
            console.log(x);
          })
          .catch(err => {
            console.log(err);
          })
    //   }, [])
    // useEffect(() => {
        GetAllCategory()
            .then(x => {
                setCategory(x.data.categories);
            })
            .catch(err => {
                console.log("error", err);
            });

        GetAllCity()
            .then(x => {
                setCity(x.data.cities);
            })
            .catch(x => {
                console.log(x);
            });
    }, []);

    const handleCategoryChange = (event) => {
        setCategoryId(event.target.value);
    };

    const handleCityChange = (event) => {
        setCityId(event.target.value);
    };

    const send = (event) => {
        debugger
        event.preventDefault();
        const cookies = document.cookie.split(';');
        const userId = cookies[1].split('=')[1];

        const formData = new FormData();
        formData.append('name', event.target[0].value);
        formData.append('description', event.target[1].value);
        formData.append('categoryId', categoryId);
        formData.append('cityId', cityId);
        formData.append('publisherId', userId);
        formData.append('address', event.target[6].value);
        formData.append('numOfBed', event.target[7].value);
        formData.append('price', event.target[8].value);
        formData.append('image', " ");

        const formDataObject = {};
        for (let pair of formData.entries()) {
            formDataObject[pair[0]] = pair[1];
        }
        Update(formDataObject,_id)
            .then(x => {
                nav("/AllApartments");
                Swal.fire({
                    icon: "success",
                    title: "Success!!",
                    text: "The apartment has been successfully added",
                });
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "The system failed to add the apartment, try again and/or make sure you are connected",
                });
            });
    };

    return (
        <div className="abc">
            <form onSubmit={(e) => send(e)}>
                <Box className="form" sx={{ '& > :not(style)': { m: 1 } }}>
                    <h1>Add Apartment</h1>
                    <FormControl variant="standard">
                        <label >Name apartment📛</label>
                        {/* <input value=`{item.name}` type="text" id="apartmentName" name="apartmentName"><br><br> */}
                        <Input  type="text" id="input-with-icon-adornment" />
                    </FormControl>
                   { console.log(apartment.name)}
                   { console.log("ttgttg")}
                    <br /><br />
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">Description📃</InputLabel>
                        <Input id="input-with-icon-adornment"  />
                    </FormControl>
                    <br /><br />
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Category💠</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={categoryId}
                            onChange={handleCategoryChange}
                            autoWidth
                            label="Category">
                                 {/* defaultValue={apartment['category']} */}
                            {category.map((item) =>
                                <MenuItem key={item._id} value={item._id}>{item.nameCategory}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">City🌆</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={cityId}
                            onChange={handleCityChange}
                            autoWidth
                            label="City">
                                 {/* defaultValue={apartment['city']} */}
                            {city.map((item) =>
                                <MenuItem key={item._id} value={item._id}>{item.nameCity}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="input-with-icon-adornment">Address🏠</InputLabel>
                            <Input  defaultValue={apartment['address']} />
                        </FormControl>
                    </Box>
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <TextField
                            id="filled-number"
                            label="Number of bed🛏️"
                            type="number"
                            InputLabelProps={{ shrink: true }}
                            variant="filled"
                            defaultValue={apartment['numOfBed']}
                        />
                    </FormControl>
                    <TextField
                        id="filled-number"
                        label="Price💰"
                        type="number"
                        InputLabelProps={{ shrink: true }}
                        variant="filled"
                        defaultValue={apartment['price']}
                    />
                    <br /><br />
                    <Button variant="outlined" color="success" type="submit">Add the apartment</Button>
                </Box>
            </form>
            <br /><br />

            
        </div>
    );
}
