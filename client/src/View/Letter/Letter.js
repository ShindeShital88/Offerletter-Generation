import React, { useState, useRef, useEffect } from "react";
import axios from "axios"; // Add axios to fetch data
import "./Letter.css";
import logo from "./logo.webp";
import Navbar from "../../Component/Navbar/Navbar.js";
import ReactToPrint from "react-to-print";
import sign from "./sir sign.png"

export default function InternshipOffer() {
    // print
    const printRef = useRef();
    const [formData, setFormData] = useState([]); // State to store fetched form data
    const [last, setLast] = useState(null); // Initialize with null instead of undefined

    // Fetch form data from the server
    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:4000/form"); // Replace with the correct API URL
            const userdata = response.data.data;
            console.log(userdata);

            const lastElement = userdata[userdata.length - 1];
            console.log("single", lastElement);
            setLast(lastElement);
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

    // Ensure last is not null before accessing its properties
    const formattedStartDate = last
        ? new Date(last.startdate).toLocaleDateString("en-GB")
        : "";
    const formattedEndDate = last
        ? new Date(last.enddate).toLocaleDateString("en-GB")
        : "";
    const formattedDate = last
        ? new Date(last.acceptancedate).toLocaleDateString("en-GB")
        : "";

    return (
        <>
            <Navbar />
            <div ref={printRef}>

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

                    {last && ( // Check if last is not null before rendering the rest of the letter
                        <div className="new-div">
                            <h6 className="lettername">Dear {last.name},</h6>
                            <p className="size">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am
                                pleased to extend an offer for an internship at Arohi Software
                                Development. We were impressed with your qualifications and
                                enthusiasm during the interview, and we believe that your skills
                                and experience will be a valuable addition to our team.
                            </p>
                            <h6 className="lettername">Position: {last.Position}</h6>
                            <h6 className="lettername">Department: {last.role}</h6>
                            <h6>Start Date: {formattedStartDate}</h6>
                            <h6>End Date: {formattedEndDate}</h6>
                            <h6>Stipend: {last.stipend}</h6>
                            <p className="size">
                                During your internship, you will have the opportunity to work on
                                various projects and gain hands-on experience in your chosen
                                field. You will be reporting to me, and I will provide guidance
                                and support throughout your internship.
                            </p>

                            <h6>Key Responsibilities:</h6>
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

                            <h6>Sincerely,</h6>
                            <h6>Mr. Sanket Ghodake,</h6>
                            <h6>Founder & CEO</h6>
                            <img src={sign} alt="sign" className="sign"/>
                        </div>
                    )}
                </div>
                {last && (
                    <div className="offerletter2">
                        <div className="new-div">
                            <h6>Acceptance of Offer:</h6>
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
                            <h6>Sincerely,</h6>
                            <p>Mr. Sanket Ghodake,</p>
                            <p>Founder & CEO</p>
                            <p>Arohi Software Development</p>

                            <h6>Acceptance:</h6>
                            <p className="size">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I,{" "}
                                {last.name}, accept the position of Intern at Arohi Software
                                Development under the terms outlined above.
                            </p>
                            <p className="size">Signature:</p>
                            <p>Date: {formattedDate}</p>
                        </div>
                    </div>
                )}
            </div>

            <ReactToPrint
                trigger={() => {
                    return <button className="print-button">Print Offer Letter</button>;
                }}
                content={() => printRef.current}
                media="print"
                pageStyle={`
    @page { 
      size: auto;  /* auto is the default value */
      margin: 0;   /* margin: 0 to remove margins */
    }
    @media print {
      body {
        -webkit-print-color-adjust: exact;
      }
      /* Hide default header and footer (title and time) */
      @page {
        margin: 0;
      }
      body::before, body::after {
        display: none !important;
      }
    }
  `}
            />

            {/* Print Button */}
            {/* <button onClick={handlePrint} className="print-button">Print Offer Letter</button> */}
        </>
    );
}
