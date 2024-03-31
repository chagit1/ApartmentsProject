
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { CreateCategory, GetAllCategory } from "../category/api";
import { CreateCity, GetAllCity } from "../city/api";
import { CreateApartment } from "../apartment/api";
import { Button, FormControl, Input, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";

export const AddApartmentForm = () => {
    const [city, setCity] = useState([]);
    const [cityId, setCityId] = useState('');
    const [category, setCategory] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [image, setImage] = useState();
    const nav = useNavigate();

    useEffect(() => {
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

    const AddImage = (event) => {
        setImage(event.target.files[0])
    }

    const send = (event) => {
        debugger
        event.preventDefault();
        const cookies = document.cookie.split(';');
        const userId = cookies[1].split('=')[1];

        const formData = new FormData();
        formData.append('name', event.target[0].value);
        formData.append('description', event.target[1].value);
        formData.append('image', image);
        formData.append('categoryId', categoryId);
        formData.append('cityId', cityId);
        formData.append('publisherId', userId);
        formData.append('address', event.target[6].value);
        formData.append('numOfBed', event.target[7].value);
        formData.append('price', event.target[8].value);

        console.log("fgbjngfdj", formData.get('image'));
        // const formDataObject = {};
        // for (let pair of formData.entries()) {
        //     formDataObject[pair[0]] = pair[1];
        // }
        CreateApartment(formData)
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
            <form encType="multipart/form-data" onSubmit={(e) => send(e)}>
                <Box className="form" sx={{ '& > :not(style)': { m: 1 } }}>
                    <h1>Add Apartment</h1>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">Name apartment📛</InputLabel>
                        <Input id="input-with-icon-adornment" />
                    </FormControl>
                    <br /><br />
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">Description📃</InputLabel>
                        <Input id="input-with-icon-adornment" />
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
                            {city.map((item) =>
                                <MenuItem key={item._id} value={item._id}>{item.nameCity}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="input-with-icon-adornment">Address🏠</InputLabel>
                            <Input />
                        </FormControl>
                    </Box>
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <TextField
                            id="filled-number"
                            label="Number of bed🛏️"
                            type="number"
                            InputLabelProps={{ shrink: true }}
                            variant="filled"
                        />
                    </FormControl>
                    <TextField
                        id="filled-number"
                        label="Price💰"
                        type="number"
                        InputLabelProps={{ shrink: true }}
                        variant="filled"
                    />
                    <br /><br />
                    <Input type="file" id="file" name="file" onChange={AddImage}>Upload a photo🖼️</Input>

                    <Button variant="outlined" color="success" type="submit">Add the apartment</Button>
                </Box>
            </form>
            <br /><br />
        </div>
    );
}

export const AddCategory = () => {
   
    let nav = useNavigate();
    const send = (event) => {
        debugger
        event.preventDefault();
       const categor ={
        nameCategory: event.target[0].value,
        apartment: []
       }
        CreateCategory(categor)
            .then(x => {
                nav("/AllApartments");
                Swal.fire({
                    icon: "success",
                    title: "Success!!",
                    text: "The cayegory has been successfully added",
                });
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "The system failed to add the cayegory, try again and/or make sure you are connected",
                });
            });
    }
    return <>
                <form encType="multipart/form-data" onSubmit={(e) => send(e)}>
                <Box className="form" sx={{ '& > :not(style)': { m: 1 } }}>
                    <h1>Add cayegory</h1>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">Name cayegory</InputLabel>
                        <Input id="input-with-icon-adornment" />
                    </FormControl>
                    <br /><br />

                    <Button variant="outlined" color="success" type="submit">Add the cayegory</Button>
                </Box>
            </form>
        {/* <div>
            <form nSubmit={(e) => send(e)}>
                <input type="text" ></input>
                <button type="submit">sand</button>
            </form>
        </div> */}
    </>

}

export const AddCity = () => {
    let nav = useNavigate();
    const send = (event) => {
        debugger
        event.preventDefault();
       const city ={
        nameCity: event.target[0].value,
        apartment: []
       }
        CreateCity(city)
            .then(x => {
                nav("/AllApartments");
                Swal.fire({
                    icon: "success",
                    title: "Success!!",
                    text: "The city has been successfully added",
                });
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "The system failed to add the city, try again and/or make sure you are connected",
                });
            });
    }
    return <>
                <form encType="multipart/form-data" onSubmit={(e) => send(e)}>
                <Box className="form" sx={{ '& > :not(style)': { m: 1 } }}>
                    <h1>Add city</h1>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">Name city</InputLabel>
                        <Input id="input-with-icon-adornment" />
                    </FormControl>
                    <br /><br />

                    <Button variant="outlined" color="success" type="submit">Add the city</Button>
                </Box>
            </form>
    </>

}
export default AddApartmentForm;

