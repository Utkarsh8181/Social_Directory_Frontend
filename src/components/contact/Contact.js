import React, { useState } from 'react'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { SearchData } from '../services/userServices';
import {ContactData } from '../services/userServices'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'

const Contact = () => {
    const [interests, setInterests] = React.useState("")
    const [results, setResult] = React.useState([])
    const [profileId, setId] = useState("")
    const interest = (e) => {
        setInterests(e.target.value)
    }

    const search = async () => {
        try {
            const input = {
                interests
            }
            const data = await SearchData(input)
            console.log(data);
            setResult(data.data.data)
            toast.success("Interest fetched successfully!", {
                position: "top-center"
            });
        }
        catch (error) {
            toast.error("Error while fetching interest!", {
                position: "top-center"
            });
        }
    }

    const clickContact = async (id) => {
        try {
            setId(id)
          const a =  await ContactData(profileId)
          console.log(a);
        } catch (error) {
            
        }
    }

    return (
        <div className="containerContact">
            <div className="form-contact">
                <div className="Head">
                    <h1>Social Directory</h1>
                </div>
                <div className='headingContact'>
                    <h2>Contact</h2>
                </div>
                <div className='buttonS'>
                    <div className="input-group">
                        <div className="form-outline">
                            <input type="search" onChange={interest} id="form1" className="form-control" />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={search}>
                            <SearchIcon />
                        </button>
                    </div>
                </div>
                <div className="box2">
                    {results.map((result) => (
                        <div className="box3" key={result._id}>
                            <div className="box4">
                                {result.name}
                            </div>
                            <div className="box5">
                                {result.dob}
                            </div>
                            <div className="box6">
                                {result.interests}
                            </div>
                            <div className="box7">
                                {result.location}
                            </div>
                            <div className="box8">
                                <button className="btn-primaryConatct" onClick={() => clickContact(result._id)}>Add to Contact</button>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Contact