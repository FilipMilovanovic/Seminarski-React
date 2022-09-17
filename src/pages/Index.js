import Sidebar from "../components/Sidebar";
import { useLocation, useNavigate } from 'react-router-dom';


function Index() {

    const location = useLocation()
    const navigate = useNavigate()

    if (localStorage.getItem('sesija') == '')
        window.location.replace('/')


    return (
        <div className="index-div">
            <Sidebar />

            <h1 id="index-h1">Važno obaveštenje</h1>

            <h6 id="dtm" className="text-muted">15.6.2022</h6>

            <h4 id="txt-ob">Poštovani, podsećamo studente da je obavezno da u komunikaciji sa službama i zaposlenima Fakulteta<br /> koriste svoju studentsku mejl adresu.
                Mejlovi poslati sa privatnih mejl adresa neće biti uzeti u razmatranje.
            </h4>

        </div>
    )
}

export default Index;