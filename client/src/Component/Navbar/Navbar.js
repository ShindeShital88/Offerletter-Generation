import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Navbar.css';
import img from './logo.webp';

function Navbar() {

  const Logout =()=>{
    localStorage.removeItem('customer');
    window.location.href = '/';
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top barmain">
        <div className="container-fluid">
          <img className="nimg" src={img} alt="Logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5 fw-bold ">
              <li className="nav-item  ms-4">
                <a className="nav-link space " href="/">Form</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link space" href="/InternshipOffer">Certificate</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link space" href="/OfferletterData">OfferletterData</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link space" onClick={Logout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
