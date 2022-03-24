import axios from 'axios'

const config = {
    headers: {
        authorization: "Bearer" + " " + localStorage.getItem("Token"),
    },
};

export const login = (obj) => {
    let response = axios.post("http://localhost:4000/app/user/signin", obj)
    return response;
}
export const Register = (obj) => {
    let response = axios.post("http://localhost:4000/app/user/signup", obj)
    return response;
}
export const ProfileData = async (obj) => {
    let response = await axios.post("http://localhost:4000/app/profile/profile", obj, config)
    return response;
}
export const SearchData = async (obj) => {
    let response = await axios.post("http://localhost:4000/app/profile/search", obj, config)
    return response;
}
export const ContactData = async (id) => {
    let response = await axios.put(`http://localhost:4000/app/contact/contact/${id}`, config, config)
    return response;
}
