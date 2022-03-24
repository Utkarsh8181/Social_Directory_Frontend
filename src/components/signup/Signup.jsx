/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import './Signup.css';
import { Register } from "../services/userServices";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory, NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from '../../Images/image.png'
const emailRegex = /^[a-zA-z]{3}([+-_ .]*[a-zA-Z0-9]+)*[@][a-zA-z0-9]+(.[a-z]{2,3})*$/;
const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;

const Signup = () => {
    const history = useHistory();
    const [phone, setPhone] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [regexObj, setRegexObj] = React.useState({ emailBorder: false, paasswordBorder: false })
    const [regexhelpertext, sethelpertext] = React.useState({ phoneHelperText: "", emailHelperText: "", passwordHelperText: "" })
    const getPhone = (e) => {
        setPhone(e.target.value)
    }
    const getMail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const Click = () => {
        history.push("/signin")
    }
    const submit = () => {
        if (email === "" && password === "" && phone === "") {
            setRegexObj({ ...regexObj, emailBorder: true, passwordBorder: true, phoneBorder: true })
            sethelpertext({ ...regexhelpertext, emailHelperText: "Email Cannot be left empty", passwordHelperText: "Password Cannot be left empty", phoneHelperText: "Contact No Cannot be left empty" })
        }
        else {
            const phoneValidPattern = phoneRegex.test(phone)
            const emailValidPattern = emailRegex.test(email)
            const passwordValidPattern = passRegex.test(password)
            if (phoneValidPattern) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    phoneBorder: false
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    phoneHelperText: ""
                }))
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    phoneBorder: true
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    phoneHelperText: "Please insert a valid contact number"
                }))
            }

            if (emailValidPattern) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    emailBorder: false
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    emailHelperText: ""
                }))
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    emailBorder: true
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    emailHelperText: "Please insert a valid email address"
                }))
            }
            if (passwordValidPattern) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    passwordBorder: false
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    passwordHelperText: ""
                }))
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    passwordBorder: true
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    passwordHelperText: "Please insert a valid password"
                }))
            }
            if (emailValidPattern === true && passwordValidPattern === true && phoneValidPattern === true) {
                let obj = {
                    "email": email,
                    "password": password,
                    "phoneNo": phone
                }

                Register(obj).then((res) => {
                    toast.success("User Registered Successfully!", {
                        position: "top-center",
                    });
                    console.log(res)
                    history.push('/Signin')
                })
                    .catch((err) => {
                        toast.error("Error in Registering User!", {
                            position: "top-center",
                        });
                        console.log(err)
                    })
                console.log(obj);
            }
        }
    }
    return (
        <div className="Box-class">
            <div className="containerSignup">
                <div className="form-class">
                    <div className="homeS">
                        <h1>Social Directory</h1>
                    </div>
                    <div className='heading'>
                        <h2>Registration</h2>
                    </div>
                    <div className='emailSignup'>
                        <TextField id="email" onChange={getMail} error={regexObj.emailBorder} helperText={regexhelpertext.emailHelperText} label="Email" variant="outlined" />
                    </div>
                    <div className='password-rectangle'>
                        <div className='passwordSignup'>
                            <TextField id="password" type="password" onChange={getPassword} error={regexObj.passwordBorder} helperText={regexhelpertext.passwordHelperText} label="Password" variant="outlined" />
                        </div>
                    </div>
                    <div className='phone'>
                        <div className="phoneNo">
                            <TextField id="phoneNo" onChange={getPhone} error={regexObj.phoneBorder} helperText={regexhelpertext.phoneHelperText} label="Contact Number" variant="outlined" />
                        </div>
                    </div>
                    <div className='buttonS'>
                        <h2 className='accountcolor'><NavLink to='/signin' id="GFG" href='Signup.css' onClick={Click}>I am already register</NavLink></h2>
                        <div className="button-end">
                            <Button className='abc' onClick={submit} variant="contained">Register</Button>
                        </div>
                    </div>
                </div>
                <div className="Img-class">
                    <img src={image} ></img>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Signup