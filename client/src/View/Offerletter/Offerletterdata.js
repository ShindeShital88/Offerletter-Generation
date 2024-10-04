import axios from "axios";
import { useEffect, useState } from "react";
import './Offerletter.css';  // Assuming you've created a custom CSS file

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../Component/Navbar/Navbar.js";

export default function OfferletterData() {
    const [Form, setForm] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedForm, setSelectedForm] = useState(null);

    const getdata = async () => {
        try {
            const alldata = await axios.get('http://localhost:4000/api/formRoutes/allforms');
            console.log(alldata.data.data);
            setForm(alldata.data.data);
        } catch (e) {
            console.error("Failed to fetch data", e);
        }
    };

    const deleteAPI = async (Form) => {
        const id = Form._id;
        await axios.delete(`http://localhost:4000/api/formRoutes/form/${id}`);
        alert("Are you sure you want to delete this offer letter?");
        getdata();  // Refresh data after deletion
    };

    const handleUpdate = async () => {
        try {
            const id = selectedForm._id;
            await axios.put(`http://localhost:4000/api/formRoutes/updateform/${id}`, selectedForm);
            toast.success("Offer letter updated successfully!");
            setIsModalOpen(false); // Close the modal after update
            getdata(); // Refresh the offer letter list
        } catch (error) {
            toast.error("Error updating offer letter");
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return ''; // In case there's no date
        return new Date(dateString).toLocaleDateString();
    };

    const openModal = (offerletterData) => {
        setSelectedForm(offerletterData);
        setIsModalOpen(true);
    };

    return (
        <>
            <Navbar />
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Role</th>
                        <th>Position</th>
                        <th>Stipend</th>
                        <th>Range</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Acceptance Date</th>
                        <th colSpan={2}>Actions</th>
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
                            <td>{Data.range}</td>
                            <td>{Data.start}</td>
                            <td>{Data.end}</td>
                            <td>{formatDate(Data.acceptancedate)}</td>
                            <td>
                                <button className='action-btn' onClick={() => openModal(Data)}>Update</button>
                                <button className='action-btn' onClick={() => { deleteAPI(Data) }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
  <div className="modal-overlay">
    <div className="modal-content" style={{ maxHeight: "90vh", maxWidth:"40vw", overflowY: "auto" }}>
      <h2>Update Offer Letter</h2>

      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          value={selectedForm.name}
          onChange={(e) =>
            setSelectedForm({
              ...selectedForm,
              name: e.target.value,
            })
          }
          className="input-field"
        />
      </div>

      <div className="form-group">
        <label>Date Of Birth</label>
        <input
          type="date"
          value={selectedForm.date_of_birth}
          onChange={(e) =>
            setSelectedForm({
              ...selectedForm,
              date_of_birth: e.target.value,
            })
          }
          className="input-field"
        />
      </div>

      <div className="form-group">
        <label>Start Date</label>
        <input
          type="date"
          value={selectedForm.startdate}
          onChange={(e) =>
            setSelectedForm({
              ...selectedForm,
              startdate: e.target.value,
            })
          }
          className="input-field"
        />
      </div>

      <div className="form-group">
        <label>End Date</label>
        <input
          type="date"
          value={selectedForm.enddate}
          onChange={(e) =>
            setSelectedForm({
              ...selectedForm,
              enddate: e.target.value,
            })
          }
          className="input-field"
        />
      </div>

      <div className="form-group">
        <label>Role</label>
        <select
          value={selectedForm.role}
          onChange={(e) =>
            setSelectedForm({
              ...selectedForm,
              role: e.target.value,
            })
          }
          className="input-field"
        >
          <option value="">Select Role</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          {/* Add more role options here */}
        </select>
      </div>

      <div className="form-group">
        <label>Position</label>
        <select
          value={selectedForm.Position}
          onChange={(e) =>
            setSelectedForm({
              ...selectedForm,
              Position: e.target.value,
            })
          }
          className="input-field"
        >
          <option value="">Select Position</option>
          <option value="Internship">Internship</option>
          <option value="Employee">Employee</option>
          <option value="Team Leader">Team Leader</option>
          <option value="Project Manager">Project Manager</option>
          {/* Add more position options here */}
        </select>
      </div>

      <div className="form-actions">
        <button className="cancel-btn" onClick={() => setIsModalOpen(false)}>
          Cancel
        </button>
        <button className="update-btn" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  </div>
)}


            <ToastContainer />
        </>
    );
}
