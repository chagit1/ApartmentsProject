// npm i axios - ספרייה לקריאות שרת
import axios from "axios"

const bassUrl = 'http://localhost:3001/client/'


// export const signIn = (client) => {
//     debugger
//     console.log("ss");
//     console.log(document.cookie);
//     //שרשור פרמטרים
//     return axios.post(`${bassUrl}signIn`, client, {
//     })
// }
export const signInClient = (user) => {
    //שרשור פרמטרים
    return axios.post(`${bassUrl}signIn`, user)
}
export const signUpClient = (client) => {
return axios.post(`${bassUrl}signUp`, client)
}

