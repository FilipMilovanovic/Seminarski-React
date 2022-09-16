import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function Login() {

    const [login, setLogin] = useState({
        broj_indeksa: '',
        password: ''
    })
    const navigate = useNavigate();

    function saveBrojIndeksa(e) {
        setLogin({ ...login, broj_indeksa: e.target.value })
    }

    function savePassword(e) {
        setLogin({ ...login, password: e.target.value })
    }


    function loginFja() {
        axios.post("http://localhost:8000/api/login", login).then(res => {

            if (res.data.rez == 200) {
                alert("Uspesno ste se prijavili na sistem!")
                navigate("/index", {
                    state: {
                        broj_indeksa: login.broj_indeksa
                    },
                });
            }
            else
                alert("Molimo pokusajte ponovo!")

        }).catch(error => {
            alert(error.response.data.error)
        })
    }



    return (
        <div>

            <div className="brind-div">
                <label id="lbl-broj-indeksa" className="display-6">Broj indeksa:</label>
                <input type="text" className="form-control" id="inp-br-ind" onChange={saveBrojIndeksa} value={login.broj_indeksa} />
            </div>

            <div className="brind-div">
                <label id="lbl-broj-indeksa" className="display-6">Lozinka:</label>
                <input type="password" className="form-control" id="inp-br-ind" onChange={savePassword} value={login.password} />
            </div>

            <button onClick={loginFja} className="btn btn-secondary" id="btn-prijavi-se">Prijavi se</button>

        </div>
    )
}

export default Login;