import axios from "axios";

import { useEffect, useState } from "react";
import './Offerletter.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../Component/Navbar/Navbar.js";
import edit from './edit.png';
import deleteicon from './delete.png';
import view from './view.png';
import logo from './logo.webp';
import sign from './sir sign.png';

export default function OfferletterData() {
    const [Form, setForm] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedForm, setSelectedForm] = useState(null);
    const [viewedForm, setViewedForm] = useState(null); // New state for view
    const [last, setLast] = useState(null); // Used for Acceptance of Offer display

    const getdata = async () => {
        try {
            const alldata = await axios.get('http://localhost:4000/api/formRoutes/allforms');
            setForm(alldata.data.data);
        } catch (e) {
            console.error("Failed to fetch data", e);
        }
    };

    const deleteAPI = async (Form) => {
        const id = Form._id;
        if (window.confirm("Are you sure you want to delete this offer letter?")) {
            await axios.delete(`http://localhost:4000/api/formRoutes/form/${id}`);
            getdata();  // Refresh data after deletion
        }
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

    const openView = (offerletterData) => {
        setViewedForm(offerletterData);
        setLast(offerletterData); // Set the selected form as last to display acceptance
        toast.success("offerletter show successfully ")
    };

    const formattedDate = last ? formatDate(last.acceptancedate) : '';

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
                                <button className='action-btn'>
                                    <img className="edit-icon" onClick={() => openView(Data)} src={view} alt="View" />
                                    <img className="edit-icon" onClick={() => openModal(Data)} src={edit} alt="Edit" />
                                    <img className="edit-icon" onClick={() => { deleteAPI(Data) }} src={deleteicon} alt="Delete" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Display the viewed form details here */}
            {viewedForm && (
                <div className="offerletter">
                    <div className="arohi">
                        <img className="logo" src={logo} alt="Arohi Logo" />
                        <h5 className="head-part">AROHI SOFTWARE DEVELOPMENT</h5>
                        <h6 className="head-part2">
                            Arohi Softwares, Sai Hospital building, in front of Bhairavnath
                            Chowk, Shrigonda, Tal-Shrigonda, Dist- Ahmednagar, 413701
                        </h6>
                    </div>
                    <p className="mobileno-div">
                        <span className="mobileno">+91 7517861332</span>
                        <span className="mobileno">arohisoftwares98@gmail.com</span>
                    </p>

                    <div className="new-div">
            <p className="lettername"><span className="text">Dear {viewedForm.name},</span></p>
            <p className="size">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am
                                pleased to extend an offer for an internship at Arohi Software
                                Development. We were impressed with your qualifications and
                                enthusiasm during the interview, and we believe that your skills
                                and experience will be a valuable addition to our team.
            </p>
            <p className="lettername"><span className="text">Position: </span>{viewedForm.Position}</p>
            <p className="lettername"><span className="text">Role: </span>{viewedForm.role}</p>
            <p className="lettername"><span className="text">Start Date: </span>{formatDate(viewedForm.startdate)}</p>
            <p className="lettername"><span className="text">End Date: </span>{formatDate(viewedForm.enddate)}</p>
            
            {viewedForm.range === "Range" ? (
                <p className="lettername">
                    <span className="text">Salary: </span>Between {viewedForm.start}k to {viewedForm.end}k per month (based on performance and contribution to work)
                </p>
            ) : (
                <p className="lettername"><span className="text">Salary: </span>{viewedForm.start}k</p>
            )}

<p className="size">
                                During your internship, you will have the opportunity to work on
                                various projects and gain hands-on experience in your chosen
                                field. You will be reporting to me, and I will provide guidance
                                and support throughout your internship.
                            </p>
                            <p className="lettername"><span className="text">Key Responsibilities:</span></p>
                            <ul>
                                <p className="size">
                                    {" "}
                                    1. Web Development: Developing and maintaining web
                                    applications, websites, and systems using a combination of
                                    front-end (HTML, CSS, JavaScript) and back-end (e.g., Node.js,
                                    Python, Ruby on Rails) technologies.
                                </p>
                                <p className="size">
                                    {" "}
                                    2. Database Management: Designing, implementing, and managing
                                    databases, including creating and optimizing database schemas
                                    and writing SQL queries.
                                </p>
                                <p className="size">
                                    {" "}
                                    3. User Interface (UI) Design: Creating and improving user
                                    interfaces to ensure a seamless and user-friendly experience.
                                </p>
                                <p className="size">
                                    {" "}
                                    4. Server Management: Deploying and managing web servers,
                                    ensuring their performance, security, and scalability.
                                </p>
                                <p className="size">
                                    5. Programming and Coding: Writing clean, efficient, and
                                    maintainable code, as well as debugging and troubleshooting
                                    issues.
                                </p>
                                <p className="size">
                                    6. Version Control: Using version control systems (e.g., Git)
                                    to manage code repositories and collaborate with team members.
                                </p>
                                <p className="size">
                                    7. API Integration: Integrating external APIs into web
                                    applications for functionality and data exchange.
                                </p>
                                <p className="size">
                                    8. Testing and Quality Assurance: Performing testing and
                                    quality assurance to identify and fix bugs and ensure the
                                    reliability of the software.
                                </p>
                                <p className="size">
                                    9. Cross-Platform Compatibility: Ensuring that web
                                    applications and websites are compatible with various
                                    browsers, devices, and screen sizes.
                                </p>
                                <p className="size">
                                    10. Security: Implementing security best practices to protect
                                    against common web vulnerabilities, such as SQL injection and
                                    cross-site scripting (XSS).
                                </p>
                                <p className="size">
                                    11. Code Documentation: Creating and maintaining documentation
                                    for code, APIs, and system architecture.
                                </p>
                                <p className="size">
                                    12. Collaboration: Working closely with front-end developers,
                                    back-end developers, and other team members to develop, test,
                                    and deploy web applications.
                                </p>
                                <p className="size">
                                    13. Problem Solving: Identifying and resolving technical
                                    issues and challenges in a dynamic development environment.
                                </p>
                                <p className="size">
                                    14. Staying Informed: Keeping up to date with the latest
                                    technologies and best practices in web development.
                                </p>
                                <p className="size">
                                    15. Continuous Learning: Taking advantage of the internship as
                                    a learning opportunity, seeking guidance from mentors, and
                                    expanding your technical skills.
                                </p>
                            </ul>

                            <p className="size">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We expect
                                you to maintain a high standard of professionalism and adhere to
                                our company's policies and procedures throughout your
                                internship. This is a paid internship position.
                            </p>

                            <p className="size">
                                Please review this offer letter carefully and, if you accept our
                                offer, share your response on WhatsApp.
                            </p>

                            <p className="size">
                                We are excited about the prospect of having you join our team
                                and look forward to a mutually beneficial partnership.
                            </p>

                            <p className="lettername"><span className="text">Sincerely,</span></p>
                            <p className="lettername"><span className="text">Mr. Sanket Ghodake,</span></p>
                            <p className="lettername"><span className="text">Founder & CEO</span></p>
                            <img src={sign} alt="sign" className="sign" />
          
        </div>
                </div>
            )}



            {/* Acceptance of Offer Section */}
            {last && (
                <div className="offerletter2">
                    <div className="new-div">
                        <p className="lettername"><span className="text">Acceptance of Offer:</span></p>
                        <p className="size">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please
                            indicate your acceptance of this offer by signing and returning
                            a copy of this letter by {formattedDate}. If you have any
                            questions or require further information, please do not hesitate
                            to contact us.
                        </p>
                        <p className="size">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We look
                            forward to welcoming you to Arohi Software Development and are
                            excited about the contributions you will bring to our team.
                        </p>
                        <p className="lettername"><span className="text">Sincerely,</span></p>
                        <p className="lettername">Mr. Sanket Ghodake,</p>
                        <p className="lettername">Founder & CEO</p>
                        <p className="lettername">Arohi Software Development</p>

                        <p className="lettername"><span className="text">Acceptance</span></p>
                        <p className="size">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I,{" "}
                            {last.name}, accept the position of Intern at Arohi Software
                            Development under the terms outlined above.
                        </p>
                        <p className="size">Signature:</p>
                        <p className="size">Date: </p>
                    </div>
                </div>
            )}
            

            {/* Update Modal */}
        {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content" style={{ maxHeight: "90vh", maxWidth: "40vw", marginTop:"40px", overflowY: "auto" }}>
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