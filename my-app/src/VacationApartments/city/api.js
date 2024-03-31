// npm i axios - ספרייה לקריאות שרת
import axios from "axios"

const bassUrl = 'http://localhost:3001/city/'


export const CreateCity = (city) => {
    //שרשור פרמטרים
    return axios.post(`${bassUrl}createCity`, city)
}

export const GetAllCity = () => {
    //שרשור פרמטרים
    return axios.get(`${bassUrl}allCity`)
}

export const WeatherByIdCity = (_id) => {
    //שרשור פרמטרים
    return axios.get(`${bassUrl}weatherByIdCityFunc${_id}`)
}

export const WeatherForNextFewDays = (_id, numOfDays) => {
    //שרשור פרמטרים
    return axios.get(`${bassUrl}weatherForNextFewDays${_id}/${numOfDays}`)
}
