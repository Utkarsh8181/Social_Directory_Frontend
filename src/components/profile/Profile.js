import React, { useState } from 'react'
import './Profile.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import profile from '../../Images/profile.webp';
import { ProfileData } from '../services/userServices'

const Profile = () => {
  const [name, setName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [interests, setInterest] = React.useState([]);
  const [location, setLocation] = React.useState("");
  const [regexobj, setregexobj] = React.useState({ nameborder: false, dobborder: false, intersestborder: false, locationborder: false })
  const [regexhelpertext, setregexhelpertext] = React.useState({ namehelpertext: "", dobhelpertext: "", interesthelpertext: "", locationhelpertext: "" })
  const takeName = (e) => {
    setName(e.target.value);
  }
  const takeDob = (e) => {
    setDob(e.target.value);
  }
  const takeInterest = (e) => {
    const incomingValues = e.target.value;
    const data = incomingValues.split(",");
    console.log("1", data);
    setInterest(data);
  }
  const takeLocation = (e) => {
    setLocation(e.target.value);
  }
  const submit = async () => {
    try {
      const value = {
        name, dob, interests, location
      }
      const ab = await ProfileData(value)
      console.log("2", ab);
      toast.success("Profile Added Successfully!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
      toast.error("Error In Adding Profile!", {
        position: "top-center",
      });
    }
  }
  return (
    <div>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="titleProfile">
              <h1>Social Directory</h1>
            </div>
            <div className="signup-form-p">
              <h2 className="form-title-p">Profile</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="xyz">
                  <div className="form-group-profile">
                    <label htmlFor="name">
                      <i class="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <TextField onChange={takeName} helperText={regexhelpertext.namehelpertext} error={regexobj.nameborder} id="Name" label="Full Name" size='small' variant="outlined" />
                  </div>
                  <div className="form-group-profile">
                    <label htmlFor="email">
                      <i class="zmdi zmdi-calendar-check material-icons-name"></i>
                    </label>
                    <TextField onChange={takeDob} helperText={regexhelpertext.dobhelpertext} error={regexobj.dobborder} id="Dob" label="DOB" size='small' variant="outlined" />
                  </div>

                  <div className="form-group-profile">
                    <label htmlFor="phone">
                      <i class="zmdi zmdi-linkedin material-icons-name"></i>
                    </label>
                    <TextField onChange={takeInterest} helperText={regexhelpertext.interesthelpertext} error={regexobj.intersestborder} id="interest" label="Interest" size='small' variant="outlined" />
                  </div>

                  <div className="form-group-profile">
                    <label htmlFor="work">
                      <i class="zmdi zmdi-gps-dot material-icons-name"></i>
                    </label>
                    <TextField onChange={takeLocation} helperText={regexhelpertext.locationhelpertext} error={regexobj.locationborder} id="location" label="Location" size='small' variant="outlined" />
                  </div>

                  <div className="form-group-form-but">
                    <Button onClick={submit} variant="contained">Add Profile</Button>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={profile} alt="registration pic" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  )
}

export default Profile