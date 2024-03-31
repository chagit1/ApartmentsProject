
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import {signUpClient } from './client/api';

export const RegisterClient = () => {

  let nav = useNavigate()

  const send = (event) => {
    event.preventDefault()
    //בודק אם המייל והסיסמא שונים
    if (event.target[0].value != event.target[2].value) {
      const user = {
        email: event.target[0].value,
        password: event.target[2].value,        
      }

      signUpClient(user)
        .then(x => {
          swal(`שלום ${x.email}!`, "נרשמת בהצלחה למערכת", "success")
          nav('/Home')
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  return <>
    <form onSubmit={(e) => send(e)}>
      <div className="flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
            <img src="/demo/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
            <div className="text-900 text-3xl font-medium mb-3">Welcome</div>
          </div>
          <div>

            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password" type="password" placeholder="Password" className="w-full mb-3" />            

            <div className="flex align-items-center justify-content-between mb-6">
              <div className="flex align-items-center">
                <Checkbox id="rememberme" className="mr-2" />
                <label htmlFor="rememberme">Remember me</label>
              </div>
              <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
            </div>
            <Button label="Sign Un" icon="pi pi-user" className="w-full" />
          </div>
        </div>
      </div>
    </form>
  </>
}