import React, { useState, useRef, useEffect } from "react";
import axios from "axios"; // Add axios to fetch data
import "./Letter.css";
import logo from "./logo.webp";
import Navbar from "../../Component/Navbar/Navbar.js";
import ReactToPrint from "react-to-print";
import sign from "./sir sign.png";
// import Data from "./../../Database/Responsibilities.json";

const Data = [

    {
        "role": "Software Developer/Engineer",
        "responsibility": {
            "one": "Design & Development: Work on software design by understanding requirements, breaking them down into modules, and developing them using programming languages (e.g., Java, Python, C#).",
            "two": "Testing: Write and execute tests (unit tests, integration tests) to ensure code quality and bug-free functionality.",
            "three": "Deployment & Maintenance: Deploy the software to various environments (e.g., development, testing, production), and provide support for maintaining and updating the system post-deployment.",
            "four": "Collaboration: Work closely with other developers, designers, and stakeholders to implement new features and enhance existing functionality.",
            "five": "Documentation: Create and maintain technical documentation (code documentation, architecture diagrams) for future reference.",
            "six": "Code Review: Participate in code reviews to ensure best practices and maintain high-quality code standards.",
            "seven": "Version Control: Use version control systems (e.g., Git) to manage code changes and collaborate with team members.",
            "eight": "Troubleshooting: Identify and resolve software issues and bugs reported by users or QA teams.",
            "nine": "Performance Optimization: Analyze and optimize code for performance improvements.",
            "ten": "Learning & Development: Stay updated with the latest technologies and industry trends to enhance skills."
        }
    },
    {
        "role": "Data Analyst",
        "responsibility": {
            "one": "Data Collection: Gather and clean data from various sources to ensure accuracy and relevance.",
            "two": "Data Analysis: Analyze data sets to identify trends, patterns, and insights to support business decisions.",
            "three": "Reporting: Create comprehensive reports and visualizations to communicate findings to stakeholders.",
            "four": "Collaboration: Work with cross-functional teams to understand data requirements and business objectives.",
            "five": "Data Modeling: Develop and maintain data models to support analytical processes.",
            "six": "Statistical Analysis: Apply statistical methods to interpret data and validate results.",
            "seven": "Database Management: Use SQL and other tools to manage and query databases.",
            "eight": "Presentations: Present data findings and recommendations to non-technical audiences effectively.",
            "nine": "Quality Assurance: Ensure data integrity and quality through rigorous testing and validation.",
            "ten": "Continuous Improvement: Identify opportunities to improve data collection and analysis processes."
        }
    },
    {
        "role": "System Administrator",
        "responsibility": {
            "one": "Server Management: Install, configure, and maintain servers and ensure their performance and security.",
            "two": "User Management: Manage user accounts, permissions, and access control to ensure system security.",
            "three": "Monitoring: Monitor system performance and network traffic to identify and resolve issues proactively.",
            "four": "Backup & Recovery: Implement and manage backup solutions to ensure data integrity and availability.",
            "five": "Troubleshooting: Diagnose and resolve hardware and software issues as they arise.",
            "six": "Documentation: Maintain documentation for system configurations, processes, and procedures.",
            "seven": "Network Administration: Configure and manage network devices (routers, switches) to ensure connectivity.",
            "eight": "Security: Implement security measures and policies to protect systems from unauthorized access.",
            "nine": "Updates & Patching: Regularly update software and apply security patches to maintain system security.",
            "ten": "Support: Provide technical support and training to users on system and software usage."
        }
    },
    {
        "role": "Project Manager",
        "responsibility": {
            "one": "Project Planning: Define project scope, goals, and deliverables in collaboration with stakeholders.",
            "two": "Resource Allocation: Allocate resources effectively to ensure timely project completion.",
            "three": "Risk Management: Identify and mitigate potential risks throughout the project lifecycle.",
            "four": "Budget Management: Manage project budgets, ensuring that resources are used efficiently.",
            "five": "Communication: Facilitate communication between team members, stakeholders, and clients.",
            "six": "Monitoring: Track project progress and performance against set objectives and timelines.",
            "seven": "Quality Assurance: Ensure project deliverables meet quality standards and stakeholder expectations.",
            "eight": "Change Management: Manage changes to project scope, schedule, and costs effectively.",
            "nine": "Reporting: Provide regular updates and reports to stakeholders on project status.",
            "ten": "Team Leadership: Motivate and lead project teams to achieve project goals."
        }
    },
    {
        "role": "Business Analyst",
        "responsibility": {
            "one": "Requirements Gathering: Identify and document business requirements through stakeholder interviews and workshops.",
            "two": "Process Mapping: Analyze and document existing business processes and workflows.",
            "three": "Solution Assessment: Evaluate potential solutions and make recommendations based on business needs.",
            "four": "Stakeholder Engagement: Engage with stakeholders to ensure their needs are met and communicate findings.",
            "five": "Data Analysis: Analyze data to identify trends and provide insights for business improvement.",
            "six": "Documentation: Create comprehensive documentation, including business cases and process flows.",
            "seven": "User Acceptance Testing: Facilitate user acceptance testing to ensure solutions meet requirements.",
            "eight": "Training: Provide training and support to end-users on new processes and systems.",
            "nine": "Change Management: Assist in managing organizational changes associated with new implementations.",
            "ten": "Continuous Improvement: Identify opportunities for process optimization and efficiency gains."
        }
    },
    {
        "role": "Quality Assurance Tester",
        "responsibility": {
            "one": "Test Planning: Develop and document test plans, test cases, and testing strategies based on requirements.",
            "two": "Test Execution: Execute manual and automated tests to validate functionality and performance.",
            "three": "Defect Tracking: Identify, document, and track defects using bug tracking tools.",
            "four": "Collaboration: Work closely with developers and product teams to ensure quality standards.",
            "five": "Regression Testing: Conduct regression testing to ensure new features do not impact existing functionality.",
            "six": "Performance Testing: Perform performance and load testing to validate system scalability.",
            "seven": "Test Automation: Develop and maintain automated test scripts using testing frameworks.",
            "eight": "Reporting: Generate test reports and provide feedback on product quality to stakeholders.",
            "nine": "Continuous Improvement: Participate in retrospectives to improve testing processes and practices.",
            "ten": "Documentation: Maintain documentation of test procedures, test cases, and results."
        }
    },
    {
        "role": "DevOps Engineer",
        "responsibility": {
            "one": "CI/CD Implementation: Design and implement continuous integration and continuous deployment pipelines.",
            "two": "Infrastructure as Code: Utilize tools (e.g., Terraform, Ansible) to manage infrastructure programmatically.",
            "three": "Monitoring: Set up monitoring and alerting systems to ensure application performance and availability.",
            "four": "Collaboration: Work closely with development and operations teams to improve collaboration and efficiency.",
            "five": "Automation: Automate routine tasks and processes to enhance operational efficiency.",
            "six": "Containerization: Utilize container technologies (e.g., Docker, Kubernetes) to manage application deployments.",
            "seven": "Cloud Management: Manage cloud services (e.g., AWS, Azure) to ensure optimal resource utilization.",
            "eight": "Security: Implement security best practices throughout the development and deployment processes.",
            "nine": "Backup & Recovery: Design and implement disaster recovery plans to ensure data availability.",
            "ten": "Documentation: Maintain documentation related to system architecture, processes, and procedures."
        }
    },
    {
        "role": "UI/UX Designer",
        "responsibility": {
            "one": "User Research: Conduct user research and usability testing to understand user needs and behaviors.",
            "two": "Wireframing: Create wireframes and prototypes to visualize design concepts.",
            "three": "Design Guidelines: Develop design guidelines and style guides to ensure consistency across products.",
            "four": "Collaboration: Work closely with developers and product managers to translate designs into functional applications.",
            "five": "User Experience: Design intuitive user interfaces that enhance user experience and engagement.",
            "six": "Feedback Incorporation: Incorporate feedback from users and stakeholders into design iterations.",
            "seven": "Accessibility: Ensure designs are accessible and inclusive for all users.",
            "eight": "Visual Design: Create visually appealing designs that align with brand guidelines.",
            "nine": "Design Reviews: Participate in design reviews and critique sessions to provide and receive feedback.",
            "ten": "Continuous Learning: Stay updated on design trends, tools, and technologies to enhance skills."
        }
    },
    {
        "role": "Network Engineer",
        "responsibility": {
            "one": "Network Design: Design and implement network solutions that meet organizational needs.",
            "two": "Configuration Management: Configure network devices (routers, switches, firewalls) for optimal performance.",
            "three": "Troubleshooting: Diagnose and resolve network issues to minimize downtime.",
            "four": "Monitoring: Monitor network performance and traffic to identify potential bottlenecks.",
            "five": "Security: Implement network security measures to protect against threats and vulnerabilities.",
            "six": "Documentation: Maintain documentation for network configurations and changes.",
            "seven": "Collaboration: Work with cross-functional teams to ensure network requirements align with business goals.",
            "eight": "Upgrades: Plan and execute network upgrades to improve performance and capacity.",
            "nine": "Compliance: Ensure network solutions comply with industry regulations and standards.",
            "ten": "Training: Provide training and guidance to staff on network usage and best practices."
        }
    },
    {
        "role": "Technical Support Specialist",
        "responsibility": {
            "one": "Customer Assistance: Provide technical support to customers via phone, email, or chat.",
            "two": "Issue Resolution: Diagnose and resolve software and hardware issues reported by users.",
            "three": "Documentation: Maintain documentation of issues, resolutions, and support procedures.",
            "four": "Knowledge Base: Develop and update knowledge base articles for common issues and solutions.",
            "five": "Collaboration: Work with product and engineering teams to escalate complex issues.",
            "six": "Training: Conduct training sessions for users on software and hardware products.",
            "seven": "Feedback Gathering: Collect user feedback to identify areas for product improvement.",
            "eight": "System Monitoring: Monitor system performance and alert relevant teams of any issues.",
            "nine": "Customer Relations: Build strong relationships with customers through effective communication.",
            "ten": "Continuous Improvement: Identify opportunities to improve support processes and user experience."
        }
    },
    {
        "role": "Security Analyst",
        "responsibility": {
            "one": "Threat Analysis: Monitor and analyze security threats and vulnerabilities to the organization's systems.",
            "two": "Incident Response: Respond to security incidents and breaches, conducting investigations as needed.",
            "three": "Policy Development: Develop and enforce security policies and procedures to protect sensitive data.",
            "four": "Compliance: Ensure compliance with regulatory requirements and industry standards (e.g., GDPR, HIPAA).",
            "five": "Training: Provide training and awareness programs for staff on security best practices.",
            "six": "Risk Assessment: Conduct regular risk assessments to identify potential security weaknesses.",
            "seven": "Security Audits: Perform security audits and assessments to ensure adherence to policies.",
            "eight": "Collaboration: Work with IT teams to implement security measures across all systems.",
            "nine": "Reporting: Prepare reports on security incidents, trends, and compliance for management.",
            "ten": "Continuous Monitoring: Implement continuous monitoring solutions to detect and respond to threats."
        }
    },
    {
        "role": "Cloud Engineer",
        "responsibility": {
            "one": "Cloud Architecture: Design and implement cloud-based solutions to meet business requirements.",
            "two": "Deployment: Deploy applications and services on cloud platforms (e.g., AWS, Azure, GCP).",
            "three": "Cost Management: Optimize cloud resource usage to control costs and improve efficiency.",
            "four": "Security: Implement security measures to protect cloud-based systems and data.",
            "five": "Monitoring: Set up monitoring and alerting for cloud resources and applications.",
            "six": "Troubleshooting: Diagnose and resolve issues related to cloud infrastructure and services.",
            "seven": "Documentation: Maintain documentation of cloud architecture and configurations.",
            "eight": "Migration: Plan and execute migration strategies for moving applications to the cloud.",
            "nine": "Collaboration: Work with development teams to integrate cloud services into applications.",
            "ten": "Continuous Learning: Stay updated on cloud technologies and best practices to enhance skills."
        }
    },
    {
        "role": "SEO Specialist",
        "responsibility": {
            "one": "Keyword Research: Conduct keyword research to identify opportunities for content optimization.",
            "two": "On-Page Optimization: Optimize website content, meta tags, and headers for target keywords.",
            "three": "Content Strategy: Develop and implement content strategies to improve search rankings.",
            "four": "Technical SEO: Conduct audits to ensure website structure and performance meet SEO best practices.",
            "five": "Link Building: Develop link-building strategies to increase website authority and visibility.",
            "six": "Analytics: Analyze website traffic and performance using tools like Google Analytics.",
            "seven": "Reporting: Prepare regular reports on SEO performance and provide actionable insights.",
            "eight": "Competitor Analysis: Analyze competitor websites and strategies to identify improvement opportunities.",
            "nine": "Staying Updated: Keep up with industry trends and algorithm changes to adapt strategies.",
            "ten": "Collaboration: Work with content creators and web developers to ensure SEO alignment."
        }
    },
    {
        "role": "Mobile App Developer",
        "responsibility": {
            "one": "App Design: Design and develop mobile applications for iOS and Android platforms.",
            "two": "User Interface: Create intuitive user interfaces that enhance user experience on mobile devices.",
            "three": "Performance Optimization: Optimize mobile apps for performance, scalability, and speed.",
            "four": "Testing: Conduct thorough testing to ensure app functionality and performance across devices.",
            "five": "Integration: Integrate third-party services and APIs into mobile applications.",
            "six": "Deployment: Manage the deployment process to app stores (e.g., Google Play, Apple App Store).",
            "seven": "Maintenance: Provide ongoing support and maintenance for mobile applications post-launch.",
            "eight": "Collaboration: Work with cross-functional teams to gather requirements and implement features.",
            "nine": "User Feedback: Gather and incorporate user feedback for app improvements.",
            "ten": "Continuous Learning: Stay updated on mobile development trends and technologies."
        }
    },
    {
        "role": "Game Developer",
        "responsibility": {
            "one": "Game Design: Conceptualize and design game mechanics, levels, and user interfaces.",
            "two": "Programming: Write and optimize code for game functionalities using programming languages (e.g., C#, C++).",
            "three": "Testing: Test games for bugs and gameplay balance, ensuring a smooth user experience.",
            "four": "Collaboration: Work with artists, sound designers, and other developers to create cohesive games.",
            "five": "Performance Optimization: Optimize game performance for different platforms (PC, console, mobile).",
            "six": "Documentation: Maintain documentation for game design, features, and technical specifications.",
            "seven": "User Engagement: Incorporate user feedback and analytics to enhance game experience.",
            "eight": "Version Control: Use version control systems to manage game assets and code.",
            "nine": "Updates: Plan and implement updates and patches post-release to improve gameplay.",
            "ten": "Continuous Learning: Stay updated on gaming trends and emerging technologies."
        }
    },
    {
        "role": "Database Administrator",
        "responsibility": {
            "one": "Database Design: Design and implement database structures to support application requirements.",
            "two": "Performance Tuning: Optimize database performance through indexing, query optimization, and configuration.",
            "three": "Backup & Recovery: Implement and manage backup and recovery procedures for data integrity.",
            "four": "Security: Ensure database security through access control, encryption, and auditing.",
            "five": "Monitoring: Monitor database performance and health using monitoring tools.",
            "six": "Troubleshooting: Diagnose and resolve database issues, including performance bottlenecks.",
            "seven": "Documentation: Maintain documentation for database schemas, procedures, and configurations.",
            "eight": "Collaboration: Work with developers to design and optimize database queries and structures.",
            "nine": "Upgrades: Plan and execute database upgrades and migrations with minimal downtime.",
            "ten": "Continuous Learning: Stay updated on database technologies and best practices."
        }
    },
    {
        "role": "Full Stack Developer",
        "responsibility": {
            "one": "Front-End Development: Build responsive user interfaces using HTML, CSS, and JavaScript frameworks.",
            "two": "Back-End Development: Develop server-side applications using languages like Node.js, Python, or Java.",
            "three": "Database Management: Design and manage databases (e.g., MongoDB, MySQL) to store and retrieve data.",
            "four": "API Development: Create and maintain RESTful APIs for front-end and back-end communication.",
            "five": "Version Control: Use Git for version control to manage code changes and collaborate with team members.",
            "six": "Testing: Conduct testing (unit, integration) to ensure code quality and functionality.",
            "seven": "Deployment: Deploy applications to cloud services or local servers, ensuring proper configuration.",
            "eight": "Collaboration: Work with designers and stakeholders to gather requirements and provide feedback.",
            "nine": "Troubleshooting: Identify and resolve technical issues across the full stack of the application.",
            "ten": "Continuous Learning: Stay updated with the latest technologies and frameworks in full-stack development."
        }
    },
    {
        "role": "Backend Developer",
        "responsibility": {
            "one": "Server-Side Logic: Develop the server-side logic and functionality of web applications.",
            "two": "Database Integration: Integrate and manage databases to store and retrieve application data.",
            "three": "API Development: Create and maintain RESTful APIs for front-end applications to consume.",
            "four": "Performance Optimization: Optimize server-side code for better performance and scalability.",
            "five": "Security: Implement security measures to protect applications from vulnerabilities and attacks.",
            "six": "Version Control: Use version control systems (e.g., Git) to manage code changes.",
            "seven": "Testing: Write and execute tests to ensure the reliability and functionality of the backend services.",
            "eight": "Documentation: Maintain documentation for backend services, APIs, and database schemas.",
            "nine": "Collaboration: Work closely with front-end developers to integrate front-end and back-end functionality.",
            "ten": "Continuous Learning: Stay updated with emerging technologies and best practices in backend development."
        }
    },
    {
        "role": "Frontend Developer",
        "responsibility": {
            "one": "UI Development: Build and implement visually appealing user interfaces using HTML, CSS, and JavaScript.",
            "two": "Framework Utilization: Use frameworks like React, Angular, or Vue.js for dynamic web applications.",
            "three": "Responsive Design: Ensure applications are responsive and optimized for various devices and screen sizes.",
            "four": "Performance Optimization: Optimize front-end performance through code splitting and lazy loading.",
            "five": "Cross-Browser Compatibility: Test and ensure compatibility across multiple web browsers.",
            "six": "API Integration: Integrate front-end applications with back-end services via APIs.",
            "seven": "User Experience: Collaborate with UX/UI designers to enhance user experience.",
            "eight": "Version Control: Use Git for version control to track changes in the codebase.",
            "nine": "Testing: Conduct testing (unit, integration) for front-end components to ensure functionality.",
            "ten": "Continuous Learning: Stay updated with the latest trends and technologies in front-end development."
        }
    }

]




export default function InternshipOffer() {
    
    const printRef = useRef();
    const [formData, setFormData] = useState([]); 
    const [last, setLast] = useState(null); 
    const [respo, setRespo] = useState([]);

    // Fetch form data from the server
    const getData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:4000/api/formRoutes/allforms"
            ); // Replace with the correct API URL

            setFormData(response.data.data)



        } catch (error) {
            console.error("Error fetching form data", error);
        }

    };

    useEffect(() => {
        getData();

    }, []);


    const read = async () => {
        const userdata = formData;
        console.log("u", userdata);
        const lastElement = await userdata[userdata.length - 1];
        // console.log("single", lastElement);
        setLast(lastElement);

    }
    console.log("single", last)


    useEffect(() => {
        read();
    }, [formData]);

    const write = async () => {
        try {
            let a = last.role
            // console.log(a)
            const date = await Data.find(r => r.role === a);
            setRespo(date?.responsibility)
        } catch (error) {
            console.log(error)
        }
    }
    console.log("respo", respo)


    const one = respo.one
    const two = respo.two
    const three = respo.three
    const four = respo.four
    const five = respo.five
    const six = respo.six
    const seven = respo.seven
    const eight = respo.eight
    const nine = respo.nine
    const ten = respo.ten

    // console.log("1", one)

    useEffect(() => {
        write();
    }, [last]);

   
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
                            <p className="lettername">
                                <span className="text">Dear {last.name},</span>
                            </p>
                            <p className="size">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am
                                pleased to extend an offer for an internship at Arohi Software
                                Development. We were impressed with your qualifications and
                                enthusiasm during the interview, and we believe that your skills
                                and experience will be a valuable addition to our team.
                            </p>
                            <p className="lettername">
                                <span className="text">Position: </span>
                                {last.Position}
                            </p>
                            <p className="lettername">
                                <span className="text">Role: </span>
                                {last.role}
                            </p>
                            <p className="lettername">
                                <span className="text">Start Date: </span>
                                {formattedStartDate}
                            </p>
                            <p className="lettername">
                                <span className="text">End Date: </span>
                                {formattedEndDate}
                            </p>

                            {last.range == "Range" ? (
                                <p className="lettername">
                                    <span className="text">Salary: </span>Between {last.start}k to{" "}
                                    {last.end}k per month (based on performance and contribution
                                    to work)
                                </p>
                            ) : (
                                <p className="lettername">
                                    <span className="text">Salary: </span>
                                    {last.start}k
                                </p>
                            )}

                            <p className="size">
                                During your internship, you will have the opportunity to work on
                                various projects and gain hands-on experience in your chosen
                                field. You will be reporting to me, and I will provide guidance
                                and support throughout your internship.
                            </p>

                            <p className="lettername">
                                <span className="text">Key Responsibilities:</span>
                            </p>



                            <ol>

                                {/* {
                                    respo.map((item) => {
                                        for (let i = 1; i < 10; i++) {
                                            return (
                                                <li key={item.id}>
                                                    <span className="text"> {item.i}</span>
                                                </li>
                                            )
                                        }
                                    })
                                } */}

                                <li className="size">{one}</li>
                                <li className="size">{two}</li>
                                <li className="size">{three}</li>
                                <li className="size">{four}</li>
                                <li className="size">{five}</li>
                                <li className="size">{six}</li>
                                <li className="size">{seven}</li>
                                <li className="size">{eight}</li>
                                <li className="size">{nine}</li>
                                <li className="size">{ten}</li>

                            </ol>




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

                            <p className="lettername">
                                <span className="text">Sincerely,</span>
                            </p>
                            <p className="lettername">
                                <span className="text">Mr. Sanket Ghodake,</span>
                            </p>
                            <p className="lettername">
                                <span className="text">Founder & CEO</span>
                            </p>
                            <img src={sign} alt="sign" className="sign" />
                        </div>
                    )}
                </div>
                {last && (
                    <div className="offerletter2">
                        <div className="new-div">
                            <p className="lettername">
                                <span className="text">Acceptance of Offer:</span>
                            </p>
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
                            <p className="lettername">
                                <span className="text">Sincerely,</span>
                            </p>
                            <p className="lettername">Mr. Sanket Ghodake,</p>
                            <p className="lettername">Founder & CEO</p>
                            <p className="lettername">Arohi Software Development</p>

                            <p className="lettername">
                                <span className="text">Acceptance</span>
                            </p>
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
