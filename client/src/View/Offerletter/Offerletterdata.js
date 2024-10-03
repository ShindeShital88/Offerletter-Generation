import axios from "axios";
import { useEffect, useState } from "react";
import './Offerletter.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../Component/Navbar/Navbar.js";
// import Minibar from "../Admin/navbar/navbar.js";

export default function OfferletterData() {
    const [Form, setForm] = useState([]);

    const getdata = async () => {
        try {
            const alldata = await axios.get('http://localhost:4000/form');
            console.log(alldata.data.data);
            setForm(alldata.data.data);
        } catch (e) {
            console.error("Failed to fetch data", e);
        }
    };
  const deleteAPI = async (Form) => {
        const id = Form._id;
        const deletedata = await axios.delete(`http://localhost:4000/form/${id}`)
     alert("Are you sure you want to delete your name from the donation list?");
        getdata(deletedata.data.msg);
        console.log("deletedata.data.msg");
    }



    useEffect(() => {
        getdata();
    }, []);

    // Function to format date to display only date, not time
    const formatDate = (dateString) => {
        if (!dateString) return ''; // In case there's no date
        return new Date(dateString).toLocaleDateString();
    };

    return (
        <>
            <Navbar />
            {/* <Minibar /> */}
            <table border={1} className="tabletag">
                <thead>
                    <tr border={1}>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Role</th>
                        <th>Position</th>
                        <th>Stipend</th>
                        <th>Acceptance Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Form.map((Data, index) => (
                        <tr key={index}>
                            <td>{Data.name}</td>
                            <td>{formatDate(Data.date_of_birth)}</td>
                            <td>{formatDate(Data.startdate)}</td>
                            <td>{formatDate(Data.enddate)}</td>
                            <td>{Data.role}</td>
                            <td>{Data.Position}</td>
                            <td>{Data.stipend}</td>
                            <td>{formatDate(Data.acceptancedate)}</td>
                                    <td><button className='deletbtn' onClick={() => { deleteAPI(Data) }}>Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>

            <ToastContainer />
            {/* <Footer /> */}
        </>
    );
}
