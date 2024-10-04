import axios from "axios";
import { useEffect, useState } from "react";
import './Offerletter.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../Component/Navbar/Navbar.js";

export default function OfferletterData() {
    const [Form, setForm] = useState([]);
    const [selectedForm, setSelectedForm] = useState(null); // For storing the data to be updated
    const [showModal, setShowModal] = useState(false); // Modal visibility state

    // Function to fetch all forms
    const getdata = async () => {
        try {
            const alldata = await axios.get('http://localhost:4000/api/formRoutes/allforms');
            setForm(alldata.data.data);
        } catch (e) {
            console.error("Failed to fetch data", e);
        }
    };

    // Function to delete a form
    const deleteAPI = async (Form) => {
        const id = Form._id;
        if (window.confirm("Are you sure you want to delete this offer letter?")) {
            try {
                await axios.delete(`http://localhost:4000/api/formRoutes/form/${id}`);
                toast.success("Offer letter deleted successfully");
                getdata(); // Refresh data
            } catch (e) {
                console.error("Failed to delete offer letter", e);
            }
        }
    };

    // Function to handle showing the modal for editing
    const handleUpdateClick = (data) => {
        setSelectedForm(data); // Set the selected data
        setShowModal(true);    // Show the modal
    };

    // Function to handle the update request
    const updateAPI = async () => {
        try {
            const id = selectedForm._id;
            const updatedata = await axios.put(`http://localhost:4000/api/formRoutes/updateform/${id}`, selectedForm);
            toast.success("Offer letter updated successfully");
            setShowModal(false); // Close the modal
            getdata(); // Refresh the data
        } catch (e) {
            console.error("Failed to update offer letter", e);
            toast.error("Failed to update offer letter");
        }
    };

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
                            <td>
                                <button className='editbtn' onClick={() => handleUpdateClick(Data)}>Edit</button>
                                <button className='deletbtn' onClick={() => deleteAPI(Data)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal for updating form */}
            {showModal && selectedForm && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Edit Offer Letter</h2>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={selectedForm.name}
                            onChange={(e) => setSelectedForm({ ...selectedForm, name: e.target.value })}
                        />
                        <label>Date of Birth:</label>
                        <input
                            type="date"
                            value={selectedForm.date_of_birth ? selectedForm.date_of_birth.split('T')[0] : ''}
                            onChange={(e) => setSelectedForm({ ...selectedForm, date_of_birth: e.target.value })}
                        />
                        <label>Start Date:</label>
                        <input
                            type="date"
                            value={selectedForm.startdate ? selectedForm.startdate.split('T')[0] : ''}
                            onChange={(e) => setSelectedForm({ ...selectedForm, startdate: e.target.value })}
                        />
                        <label>End Date:</label>
                        <input
                            type="date"
                            value={selectedForm.enddate ? selectedForm.enddate.split('T')[0] : ''}
                            onChange={(e) => setSelectedForm({ ...selectedForm, enddate: e.target.value })}
                        />
                        <label>Role:</label>
                        <input
                            type="text"
                            value={selectedForm.role}
                            onChange={(e) => setSelectedForm({ ...selectedForm, role: e.target.value })}
                        />
                        <label>Position:</label>
                        <input
                            type="text"
                            value={selectedForm.Position}
                            onChange={(e) => setSelectedForm({ ...selectedForm, Position: e.target.value })}
                        />
                        <label>Stipend:</label>
                        <input
                            type="number"
                            value={selectedForm.stipend}
                            onChange={(e) => setSelectedForm({ ...selectedForm, stipend: e.target.value })}
                        />
                        <label>Acceptance Date:</label>
                        <input
                            type="date"
                            value={selectedForm.acceptancedate ? selectedForm.acceptancedate.split('T')[0] : ''}
                            onChange={(e) => setSelectedForm({ ...selectedForm, acceptancedate: e.target.value })}
                        />
                        <button onClick={updateAPI}>Update</button>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            )}

            <ToastContainer />
        </>
    );
}
