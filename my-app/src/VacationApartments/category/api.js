// npm i axios - ספרייה לקריאות שרת
import axios from "axios"

const bassUrl = 'http://localhost:3001/category/'

export const GetAllCategory = () => {
    //שרשור פרמטרים
    debugger
    return axios.get(`http://localhost:3001/category/allCategory`)
}


export const CreateCategory = (category) => {
    //שרשור פרמטרים
    return axios.post(`${bassUrl}createCategory`, category)
}
