import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

// import { signIn } from './client/api';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { signInClient } from './client/api';
import { signInPablisher } from './publisher/api';
import { useState } from 'react';

export const SignIn = () => {
    let nav = useNavigate()
    const [typeUser, setTypeUser] = useState()

    const send = (event) => {
        debugger
        event.preventDefault()
        //   //בודק אם המייל והסיסמא שונים
        //   if (event.target[0].value != event.target[2].value) {
        const user = {
            email: event.target[0].value,
            password: event.target[1].value
        }
        debugger
        signInClient(user)
            .then(response => {
                setTypeUser("client");
                document.cookie = `typeUser=client`;
                document.cookie = `User=${response.data.client._id}`;
                debugger

                const token = response.data.token;
                document.cookie = `token=${token}; expires=Thu, 01 Jan 12025 00:00:00 UTC; path=/;`;
                swal(`שלום ${response.data.client.email}!`, "נרשמת בהצלחה למערכת", "success")
                window.location.reload(false);
                nav('/Home')
            })
            .catch(err => {
                signInPablisher(user)
                    .then(respons => {
                        setTypeUser("publisher")
                        document.cookie = `typeUser=publisher`;
                        document.cookie = `User=${respons.data.publisher._id}`;
                        const token = respons.data.token;
                        document.cookie = `token=${token}; expires=Thu, 01 Jan 12025 00:00:00 UTC; path=/;`;
                        swal(`tttttt שלום ${respons.email}!`, "נרשמת בהצלחה למערכת", "success")
                        window.location.reload(false);
                        nav('/Home')
                    })
                    .catch(err => {
                        alert("אין משתמש כזה במערכת")
                    })

            })
    }

    return <>
        {/* <h1>welcom back</h1>
        <form onSubmit={(e) => send(e)}>
            <TextField
                id="outlined-password-input11"
                label="מייל"
                type="email"
                autoComplete="current-password"
            />
            <TextField
                id="outlined-password-input111"
                label="סיסמה"
                type="password"
                autoComplete="current-password"
            />
            <Button className='buttenSend' type='submit' variant="text">send</Button>
            <br></br>
        </form> */}

        <form onSubmit={(e) => send(e)}>
            <div className="flex align-items-center justify-content-center">
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                    <div className="text-center mb-5">
                        <img src="/demo/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
                        <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                        <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                        <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
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
                        {/* nChange={e => setChecked(e.checked)} checked={checked} */}
                        <Button label="Sign In" icon="pi pi-user" className="w-full" />
                    </div>
                </div>
            </div>
        </form>
    </>
}