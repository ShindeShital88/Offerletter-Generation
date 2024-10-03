import React, { useState, useEffect } from "react";
import axios from 'axios'; // Add axios to fetch data
import './Letter.css';
import logo from './logo.webp';
import Navbar from "../../Component/Navbar/Navbar.js";

export default function InternshipOffer() {
    const [formData, setFormData] = useState([]); // State to store fetched form data

    // Fetch form data from the server
    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/form'); // Replace with the correct API URL
            setFormData(response.data.data); // Update state with fetched data
        } catch (error) {
            console.error("Error fetching form data", error);
        }
    };

    // Call getData when the component mounts
    useEffect(() => {
        getData();
    }, []);

    // Function to handle print action
    const handlePrint = () => {
        window.print(); // Trigger the print dialog
    };

    return (
        <>
        <Navbar/>
            <div className="offerletter">
                <div className="arohi">
                    <img className="logo" src={logo} alt="Arohi Logo" />
                    <h4 className="head-part">AROHI SOFTWARE DEVELOPMENT</h4>
                    <h5 className="head-part2">
                        Arohi Softwares, Sai Hospital building, in front of Bhairavnath Chowk, Shrigonda,
                        Tal-Shrigonda, Dist- Ahmednagar, 413701
                    </h5>
                </div>
                <div className="mobileno-div">
                    <div>
                        <p className="mobileno">+917517861332</p>
                    </div>
                    <div>
                        <a className="mobileno" href="mailto:arohisoftwares98@gmail.com">
                            arohisoftwares98@gmail.com
                        </a>
                    </div>
                </div>

                {/* Mapping through the fetched form data */}
                {formData.map((item) => {
                    // Convert startdate and enddate to just a date (removing time)
                    const formattedStartDate = new Date(item.startdate).toLocaleDateString('en-GB'); // Format as DD/MM/YYYY
                    const formattedEndDate = new Date(item.enddate).toLocaleDateString('en-GB'); // Format as DD/MM/YYYY

                    return (
                        <div className="new-div" >
                            <h5 className="lettername">Dear {item.name}</h5>

                            <p>I am pleased to extend an offer for an internship position at Arohi software
                                development. We were impressed with your qualifications and enthusiasm
                                during the interview process, and we believe that your skills and experience
                                will be a valuable addition to our team.</p>
                            <h6>Position: {item.Position}</h6>
                            <h6>Department: {item.role}</h6>
                            <h6>Start Date: {formattedStartDate}</h6> {/* Formatted start date */}
                            <h6>End Date: {formattedEndDate}</h6> {/* Formatted end date */}

                            <h6>Stipend: {item.stipend}</h6>
                            <p>During your internship, you will have the opportunity to work on various
                                projects and gain hands-on experience in your chosen field. You will be
                                reporting to me, I will provide guidance and support throughout your internship.</p>

                            <h5>Key Responsibilities:</h5>
                            <p>1. Web Development: Developing and maintaining web applications, websites,
                                and systems using a combination of front-end (HTML, CSS, JavaScript) and
                                back-end (e.g., Node.js, Python, Ruby on Rails) technologies.</p>

                            <p>2. Database Management: Designing, implementing, and managing
                                databases, including creating and optimizing database schemas and writing
                                SQL queries.</p>

                            <p>3. User Interface (UI) Design: Creating and improving user interfaces to
                                ensure a seamless and user-friendly experience.</p>

                            <p>4. Server Management: Deploying and managing web servers, ensuring their
                                performance, security, and scalability.</p>

                            <p>5. Programming and Coding: Writing clean, efficient, and maintainable code,
                                as well as debugging and troubleshooting issues.</p>
                            <p>6. Version Control: Using version control systems (e.g., Git) to manage code
                                repositories and collaborate with team members.</p>

                            <p>7. API Integration: Integrating external APIs into web applications for
                                functionality and data exchange.</p>

                            <p>8. Testing and Quality Assurance: Performing testing and quality assurance to
                                identify and fix bugs and ensure the reliability of the software.</p>

                            <p>9. Cross-Platform Compatibility: Ensuring that web applications and websites
                                are compatible with various browsers, devices, and screen sizes.</p>

                            <div>
                                <p>10. Security: Implementing security best practices to protect against common
                                    web vulnerabilities, such as SQL injection and cross-site scripting (XSS).</p>

                                <p>11. Code Documentation: Creating and maintaining documentation for code,
                                    APIs, and system architecture.</p>
                                <p>12. Collaboration: Working closely with front-end developers, back-end
                                    developers, and other team members to develop, test, and deploy web
                                    applications.</p>
                                <p>13. Problem Solving: Identifying and resolving technical issues and
                                    challenges in a dynamic development environment.</p>

                                <p>14. Staying Informed: Keeping up to date with the latest technologies and best
                                    practices in web development.</p>

                                <p>15. Continuous Learning: Taking advantage of the internship as a learning
                                    opportunity, seeking guidance from mentors, and expanding your technical
                                    skills.</p>

                                <p>We expect you to maintain a high standard of professionalism and adhere to
                                    our company's policies and procedures throughout your internship. This is an
                                    paid internship position.</p>

                                <p>Please review this offer letter carefully and, if you accept our offer, share your
                                    response on WhatsApp.</p>

                                <p>If you have any questions or need further clarification about the terms of your
                                    internship, please feel free to contact me at 8149191332.</p>

                                <p>We are excited about the prospect of having you join our team and look
                                    forward to a mutually beneficial partnership.</p>

                                <h5>Sincerely,</h5>
                                <h5>Mr. Sanket Ghodake,</h5>
                                <h5>Founder & CEO.</h5>
                                <h5>Signature:</h5>
                            </div>
                        </div>
                    );
                })}

            </div>
            <div className="offerletter2">
                {formData.map((item, ) => {
                    // Convert acceptancedate to just a date (removing time)
                    const formattedDate = new Date(item.acceptancedate).toLocaleDateString('en-GB'); // Format as DD/MM/YYYY

                    return (
                        <div className="new-div" >
                            <h5>Acceptance of Offer:</h5>
                            <p>Please indicate your acceptance of this offer by signing and returning a copy of this letter by {formattedDate}. If you have any questions or require further information, please do not hesitate to contact us.</p>

                            <p>We look forward to welcoming you to Arohi Software Development and are excited about the contributions you will bring to our team.</p>

                            <p>Sincerely,</p>

                            <h5>Mr. Sanket Ghodake, <br />
                                Founder & CEO <br /> Arohi Software Development</h5>

                            <h5>Acceptance:</h5>
                            <p>I {item.name}, accept the position of Intern at Arohi Software Development under the terms outlined above.</p>

                            <p>Signature:</p>
                            <p>Date: {formattedDate}</p> {/* Display the formatted date here */}
                        </div>
                    );
                })}
            </div>

            {/* Print Button */}
            <button onClick={handlePrint} className="print-button">Print Offer Letter</button>
        </>
    );
}
