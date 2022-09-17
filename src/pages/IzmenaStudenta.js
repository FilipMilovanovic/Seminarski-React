import Sidebar from "../components/Sidebar";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function IzmenaStudenta() {

    const [student, setStudent] = useState({
        name: '',
        broj_indeksa: '',
        password: '',
        email: '',
        status: '',
        smer: ''
    })

    const params = useParams();
    const [brojIndeksa, setBrojIndeksa] = useState(params.broj_indeksa)


    function updateName(e) {
        setStudent({ ...student, name: e.target.value })
    }

    function updateBrojIndeksa(e) {
        setStudent({ ...student, broj_indeksa: e.target.value })
    }

    function updateEmail(e) {
        setStudent({ ...student, email: e.target.value })
    }

    function updatePassword(e) {
        setStudent({ ...student, password: e.target.value })
    }

    function updateStatus(e) {
        setStudent({ ...student, status: e.target.value })
    }

    function updateSmer(e) {
        setStudent({ ...student, smer: e.target.value })
    }



    useEffect(() => {

        axios.get(`http://localhost:8000/api/studentInfo/${brojIndeksa}`).then(res => {
            setStudent(res.data.student)
        });

    }, []);



    function sacuvajIzmene() {

        axios.post(`http://localhost:8000/api/sacuvajIzmene/${brojIndeksa}`, student).then(res => {

            if (res.data.rez == 200) {
                alert("Student je izmenjen!")
                window.location.replace('/studenti')
            }
            else
                alert("Greška!")

        });

    }



    return (
        <div className="izm-div">

            <Sidebar />


            <h1 id="novi-student-h1">Izmena studenta</h1>

            <div className="izmena-f">

                <label>Ime i prezime: </label>
                <input type="text" className="form-control mt-2 mb-3" value={student.name} onChange={updateName} />

                <label>Broj indeksa: </label>
                <input type="text" className="form-control mt-2 mb-3" value={student.broj_indeksa} onChange={updateBrojIndeksa} />

                <label>Password: </label>
                <input type="password" className="form-control mt-2 mb-3" value={student.password} onChange={updatePassword} />

                <label>Email: </label>
                <input type="email" className="form-control mt-2 mb-3" value={student.email} onChange={updateEmail} />

                <label>Status: </label>
                <input type="text" className="form-control mt-2 mb-3" value={student.status} onChange={updateStatus} />

                <label>Smer: </label>
                <input type="text" className="form-control mt-2 mb-3" value={student.smer} onChange={updateSmer} />

                <button className="btn btn-primary" onClick={sacuvajIzmene}>Sačuvaj</button>

            </div>


        </div>
    )
}

export default IzmenaStudenta;