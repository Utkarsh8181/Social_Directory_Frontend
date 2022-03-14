import axios from 'axios'

export const login=(obj)=>
{
    let response=axios.post("http://localhost:4000/app/user/signin",obj)
    return response;
}
export const Register=(obj)=>
{
    let response=axios.post("http://localhost:4000/app/user/signup",obj)
    return response;
}
