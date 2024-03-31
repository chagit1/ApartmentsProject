// npm i axios - ספרייה לקריאות שרת
import axios from "axios"

const bassUrl = 'http://localhost:3001/apartment/'



export const GetAllApartment = () => {
    //שרשור פרמטרים
    debugger
    return axios.get(`${bassUrl}getAllApartment`,
   { headers: {'Authorization':document.cookie}})
}
  
export const GetByIdApartment = (_id) => {
    //שרשור פרמטרים
    // const id =_id
    
    return axios.get(`${bassUrl}getById/${_id}`)
}

export const CreateApartment = (apartment) => {
    debugger
    return axios.post('http://localhost:3001/apartment/createApartment', apartment, 
    {
        headers: {
            "Content-Type": "multipart/form-data",
          }
    })
}

export const Update = (apartment, _id) => {
    return axios.put(`${bassUrl}update/${_id}`, apartment)
}

export const Remove = (_id) => {
    debugger
    return axios.delete(`${bassUrl}remove/${_id}`)
}

export const GetByNumOfBadEqual = (numOfBad) => {
    //שרשור פרמטרים
    debugger
    return axios.get(`${bassUrl}getByNumOfBadEqual/:numOfBad`,
   { headers: {'Authorization':document.cookie}})
}

export const GetByCategoryId = (_id) => {

    return axios.get(`${bassUrl}getByCategoryId/${_id}`)
}
  
export const GetByCityId = (_id) => {

    return axios.get(`${bassUrl}getByCityId/${_id}`)
}
  
export const GetByPublisherId = (_id) => {

    return axios.get(`${bassUrl}getByPublisherId/${_id}`)
}

export const getByNumOfBadLesser = (numOfBad) => {

    return axios.get(`${bassUrl}getByNumOfBadLesser/${numOfBad}`)
}

export const getByNumOfPriceLesser = (price) => {

    return axios.get(`${bassUrl}getByNumOfPriceLesser/${price}`)
}

// getByNumOfBadGreader,
//     getByNumOfBadLesser,
//     getByNumOfBadEqual,
//     getByNumOfPriceGreader,
//     getByNumOfPriceLesser,
//     getByNumOfPriceEqual