import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Component/Navbar/Navbar";

export default function CertificateForm() {
  const [Form, setForm] = useState([]);
  const [name, setName] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [role, setRole] = useState("");
  const [stipend, setStipend] = useState("");
  const [acceptancedate, setAcceptancedate] = useState("");
  const [Position, setPosition] = useState("");

  const [range, setRange] = useState("");

  const Generate = async (event) => {
    event.preventDefault(); // Prevent page reload

    try {
      await axios.post("http://localhost:4000/form", {
        name: name,
        date_of_birth: date_of_birth,
        startdate: startdate,
        enddate: enddate,
        role: role,
        Position: Position,
        stipend: stipend,
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
      setStipend("");
      setAcceptancedate("");

      // Fetch the updated data after submission
      getdata();
    } catch (e) {
      console.log(e.message);
      toast.error("Failed to generate certificate");
    }
  };

  const getdata = async () => {
    try {
      const alldata = await axios.get("http://localhost:4000/form");
      console.log(alldata.data.data);
      setForm(alldata.data.data);
    } catch (e) {
      console.error("Failed to fetch data", e);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

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
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="UI/UX Developer">UI/UX Developer</option>
                <option value="Java Developer">Java Developer</option>
                <option value="Python Developer">Python Developer</option>
                <option value="DevOps Developer">DevOps Developer</option>
              </select>
            </div>

            {/* <div>
              <span className="name"> Role :</span> <br />
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="allinput"
                placeholder="Role"
              />
            </div> */}
            {/* <div>
              <span className="name"> Position :</span> <br />
              <input
                type="text"
                value={Position}
                onChange={(e) => setPosition(e.target.value)}
                className="allinput"
                placeholder="Position"
              />
            </div> */}
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
            <div className="block">
              <div>
                <span className="name"> Salary :</span> <br />
                <input
                  type="text"
                  value={stipend}
                  onChange={(e) => setStipend(e.target.value)}
                  className="allinput"
                  placeholder="Salary"
                />
              </div>
            </div>
          ) : (
            <div className="block">
              <div>
                <span className="name"> Start Salary:</span> <br />
                <input
                  type="text"
                  value={stipend}
                  onChange={(e) => setStipend(e.target.value)}
                  className="allinput"
                  placeholder="Start Salary in k"
                />
              </div>

              <div>
                <span className="name"> End Salary:</span> <br />
                <input
                  type="text"
                  value={stipend}
                  onChange={(e) => setStipend(e.target.value)}
                  className="allinput"
                  placeholder="End Salary in k"
                />
              </div>
            </div>
          )}

          <button type="submit" className="buton">
            Generate Certificate
          </button>
        </div>
      </form>

      {/* Add some UI to display the generated form data if needed */}
      {/* <div>
        <h2>Generated Certificates:</h2>
        <ul>
          {Form.map((item, index) => (
            <li key={index}>{item.name} - {item.role}</li>
          ))}
        </ul>
      </div> */}
      <ToastContainer />
    </>
  );
}
