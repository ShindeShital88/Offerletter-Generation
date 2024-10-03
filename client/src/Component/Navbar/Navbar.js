
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Navbar.css';

function Navbar() {

  return (
    <>
      <nav class="navbar barmain navbar-expand-lg navbar-light bg-light fixed-top ">
        <div class="container-fluid">
         {/* <img className='logomain' src={logomain} /> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active space" aria-current="page" className='home' href="/">Form</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active space" aria-current="page" className='home' href="/InternshipOffer">Certificate</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active space" aria-current="page" className='home' href="/OfferletterData">OfferletterData</a>
              </li>
            
             
              <li class="nav-item">
                <a class="nav-link space" className='home' href="/Login">Login</a>


             </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
