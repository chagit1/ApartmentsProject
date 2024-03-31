// npm i axios - ספרייה לקריאות שרת
import axios from "axios"

const bassUrl = 'http://localhost:3001/publisher/'



export const signInPablisher = (publisher) => {
    //שרשור פרמטרים
    debugger
    return axios.post(`${bassUrl}signIn`, publisher)
}

export const signUpPublisher = (publisher) => {
    return axios.post(`${bassUrl}signUp`, publisher)
}