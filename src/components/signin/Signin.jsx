/* eslint-disable no-unused-vars */
import React from "react";
import './Signin.css';
import { useHistory, NavLink } from "react-router-dom";
import { login } from "../services/userServices";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import loginImg from '../../Images/login.png'
import 'react-toastify/dist/ReactToastify.css';
const emailRegex = /^[a-zA-z]{3}([+-_ .]*[a-zA-Z0-9]+)*[@][a-zA-z0-9]+(.[a-z]{2,3})*$/;
const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

function Signin(props) {
    const history = useHistory();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [regexobj, setregexobj] = React.useState({ emailborder: false, passwordborder: false })
    const [regexhelpertext, setregexhelpertext] = React.useState({ emailhelpertext: "", passwordhelpertext: "" })
    const takeEmail = (e) => {
        setEmail(e.target.value);
    }
    const takePassword = (e) => {
        setPassword(e.target.value);
    }
    const redirect = () => {
        history.push('/signup')
    }
    const submit = () => {
        if (email === "" && password === "") {
            setregexobj({ ...regexobj, emailborder: true, passwordborder: true })
            setregexhelpertext({ ...regexhelpertext, emailhelpertext: "Email Cannot be left empty", passwordhelpertext: "Password Cannot be left empty" })
            console.log(regexobj);
        }
        else {
            const emailValidation = emailRegex.test(email)
            console.log(emailValidation);
            const passwordValidation = passRegex.test(password)
            if (emailValidation) {
                setregexobj(regexobj => ({
                    ...regexobj,
                    emailborder: false
                }));
                setregexhelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    emailhelpertext: ""
                }))
            }
            else {
                setregexobj(regexobj => ({
                    ...regexobj,
                    emailborder: true
                }));
                setregexhelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    emailhelpertext: "Please insert a valid email address"
                }))
            }
            if (passwordValidation) {
                setregexobj(regexobj => ({
                    ...regexobj,
                    passwordborder: false
                }));
                setregexhelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    passwordhelpertext: ""
                }))
            }
            else {
                setregexobj(regexobj => ({
                    ...regexobj,
                    passwordborder: true
                }));
                setregexhelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    passwordhelpertext: "Please insert a valid password"
                }))
            }
            if (emailValidation === true && passwordValidation === true) {
                let obj = {
                    "email": email,
                    "password": password
                }
                login(obj).then((res) => {
                    if (!res) {
                        console.log(res);
                    }
                    console.log(res)
                    console.log(res.data.data)
                    localStorage.setItem("Token", res.data.data)
                    toast.success("User Logged In Successfully!", {
                        position: "top-center"
                    });
                    props.onSetView(1)
                    history.push('/profile')
                }).catch((err) => {
                    console.log(err)
                    toast.error("Invalid Credential!", {
                        position: "top-center"
                    });
                })
                console.log(obj);
            }
        }
    }
    return (
        <div>
      <section className="signin">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image-signin">
              <figure>
                <img src={loginImg} alt="registration pic" />
              </figure>
              <h2 className='accountcol'><NavLink to='/signup' id="GFG" href='SignIn.css' onClick={redirect}>Create an account</NavLink></h2>
            </div>
            <div className="signin-form-si">
              <form method="POST" className="signin-for" id="register-form">
                <h1 className="form-title-signin">Sign in</h1>
                <div className="form-signin-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <TextField id="Email" onChange={takeEmail} helperText={regexhelpertext.emailhelpertext} error={regexobj.emailborder} label="Email" size='small' variant="outlined" />
                </div>

                <div className="form-signin-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <TextField id="password" type="password" onChange={takePassword} helperText={regexhelpertext.passwordhelpertext} error={regexobj.passwordborder} label="Password" size='small' variant="outlined" />
                </div>
                <div className='account'>
                    <div className='buttonSig'>
                        <Button onClick={submit} variant="contained">Next</Button>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
    );
}

export default Signin
