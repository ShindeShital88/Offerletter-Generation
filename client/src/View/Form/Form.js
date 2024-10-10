import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Component/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function CertificateForm() {
  const [Form, setForm] = useState([]);
  const [name, setName] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [role, setRole] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [acceptancedate, setAcceptancedate] = useState("");
  const [Position, setPosition] = useState("");
  const [range, setRange] = useState("");

  const navigate = useNavigate();

  const Generate = async (event) => {
    event.preventDefault(); // Prevent page reload

    try {
      await axios.post("http://localhost:4000/api/formRoutes/form", {
        name: name,
        date_of_birth: date_of_birth,
        startdate: startdate,
        enddate: enddate,
        role: role,
        Position: Position,
        range: range,
        start: start,
        end: end,
        acceptancedate: acceptancedate,
      });

      toast.success("Certificate generated successfully");

      // Clear form fields after successful submission
      setName("");
      setDate_of_birth("");
      setStartdate("");
      setEnddate("");
      setRole("");
      setPosition("");
      setRange("");
      setStart("");
      setEnd("");
      setAcceptancedate("");

      // Fetch the updated data after submission
      setTimeout(() => {
        navigate(`/InternshipOffer`);
      }, 5000);
    } catch (e) {
      console.log(e.message);
      toast.error("Failed to generate certificate");
    }
  };

  return (
    <>
      <Navbar />
      <h2
        style={{
          textAlign: "center",
          marginLeft: "20px",
          marginTop: "20vh",
          fontSize: "30px",
        }}
      >
        Certificate Details
      </h2>

      <form onSubmit={Generate}>
        {" "}
        {/* Add onSubmit to the form */}
        <div className="main-form">
          <div className="block">
            <div>
              <span className="name"> Name :</span> <br />
              <input
                type="text"
                value={name} // Bind the value to clear the input on form reset
                onChange={(e) => setName(e.target.value)}
                className="allinput"
                placeholder="Full Name"
              />
            </div>
            <div>
              <span className="name"> Date_of_birth :</span> <br />
              <input
                type="date"
                value={date_of_birth}
                onChange={(e) => setDate_of_birth(e.target.value)}
                className="allinput"
                placeholder="Date_of_birth"
              />
            </div>
          </div>

          <div className="block">
            <div>
              <span className="name"> Start Date :</span> <br />
              <input
                type="date"
                value={startdate}
                onChange={(e) => setStartdate(e.target.value)}
                className="allinput"
                placeholder="Start Date"
              />
            </div>
            <div>
              <span className="name"> End Date :</span> <br />
              <input
                type="date"
                value={enddate}
                onChange={(e) => setEnddate(e.target.value)}
                className="allinput"
                placeholder="End Date"
              />
            </div>
          </div>

          <div className="block">
            <div>
              <span className="name" htmlFor="position">
                Position:
              </span>
              <br />
              <select
                name="position"
                id="position"
                value={Position}
                onChange={(e) => setPosition(e.target.value)}
                required
                className="allinput"
              >
                <option value="">Select Position</option>
                <option value="Internship">Internship</option>
                <option value="Employee">Employee</option>
                <option value="Team Leader">Team Leader</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Senior Project Manager">
                  Senior Project Manager
                </option>
              </select>
            </div>

            <div>
              <span className="name" htmlFor="role">
                Role:
              </span>
              <br />
              <select
                name="role"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="allinput"
              >
                <option value="">Select Role</option>

                <option value="Software Developer/Engineer">
                  Software Developer/Engineer
                </option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="System Administrator">
                  System Administrator
                </option>
                <option value="Business Analyst">Business Analyst</option>
                <option value="Quality Assurance Tester">
                  Quality Assurance Tester
                </option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Network Engineer">Network Engineer</option>
                <option value="Technical Support Specialist">
                  Technical Support Specialist
                </option>
                <option value="Security Analyst">Security Analyst</option>
                <option value="Cloud Engineer">Cloud Engineer</option>
                <option value="SEO Specialist">SEO Specialist</option>
                <option value="Mobile App Developer">
                  Mobile App Developer
                </option>
                <option value="Game Developer">Game Developer</option>
                <option value="Database Administrator">
                  Database Administrator
                </option>
                <option value="Full Stack Developer">
                  Full Stack Developer
                </option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
              </select>
            </div>
          </div>

          <div className="block">
            <div>
              <span className="name"> Acceptance Date :</span> <br />
              <input
                type="date"
                value={acceptancedate}
                onChange={(e) => setAcceptancedate(e.target.value)}
                className="allinput"
                placeholder="Acceptance Date"
                required
              />
            </div>

            <div>
              <span className="name" htmlFor="role">
                Salary Type:
              </span>
              <br />
              <select
                name="role"
                id="role"
                onChange={(e) => {
                  setRange(e.target.value);
                }}
                required
                className="allinput"
              >
                <option value="">Select Salary Type</option>
                <option value="Range">Range</option>
                <option value="Fixed">Fixed</option>
              </select>
            </div>
          </div>

          {range !== "Range" ? (
            <div className="block2">
              <div className="block3">
                <span className="name"> Salary :</span> <br />
                <input
                  type="text"
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                  className="allinput"
                  placeholder="Salary"
                  required
                />
              </div>
            </div>
          ) : (
            <div className="block">
              <div>
                <span className="name"> Start Salary:</span> <br />
                <input
                  type="text"
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                  className="allinput"
                  placeholder="Start Salary in k"
                  required
                />
              </div>

              <div>
                <span className="name"> End Salary:</span> <br />
                <input
                  type="text"
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                  className="allinput"
                  placeholder="End Salary in k"
                  required
                />
              </div>
            </div>
          )}

          <button type="submit" className="buton">
            Generate Certificate
          </button>
        </div>
      </form>

      <ToastContainer />
    </>
  );
}
