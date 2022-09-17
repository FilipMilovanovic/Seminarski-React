import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useState } from 'react'

function Sidebar() {

    const location = useLocation();

    const [brojIndeksa, setBrojIndeksa] = useState(localStorage.getItem('sesija'));

    function odjava() {
        localStorage.removeItem('sesija')
        alert('Uspesna odjava sa sistema!')
        window.location.replace('/')
    }

    return (
        <div className="sidebar-div">
            <div className="container-fluid bg-dark" id='side'>
                <div className="row flex-nowrap" id='pr'>
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/"
                                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline"></span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                                id="menu">
                                <li className="nav-item">
                                    <a className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline display-6 text-white">Obaveštenja</span>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <Link to={`/prijava/${brojIndeksa}`} className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline display-6 text-white">Prijava ispita</span>
                                    </Link>
                                </li>

                            </ul>


                            <button className='btn btn-light' onClick={odjava} id='odjava-btn'>ODJAVA</button>

                        </div>

                    </div>


                </div>


            </div>

        </div>

    )
}

export default Sidebar;