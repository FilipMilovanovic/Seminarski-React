import Sidebar from "../components/Sidebar";
import { useState } from 'react'
import axios from 'axios'

function NoviStudent() {

    const [student, setStudent] = useState({
        name: '',
        broj_indeksa: '',
        password: '',
        email: '',
        status: '',
        smer: '',
    })

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


    const options = {
        method: 'POST',
        url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '4916172c11msh0beee19c8846ca4p127267jsn0bc7bcd7fc43',
            'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
        },
        data: '{"personalizations":[{"to":[{"email": "' + student.email + '"}],"subject":"Studentski nalog"}],"from":{"email":"studentska@fon.rs"},"content":[{"type":"text/plain","value":"Poštovani ' + student.name + ', Vaš nalog na studentskom sistemu je kreiran. Broj indeksa: ' + student.broj_indeksa + ', lozinka: ' + student.password + '"}]}'
    };

    function sacuvajStudenta() {

        axios.post(`http://localhost:8000/api/sacuvajStudenta`, student).then(res => {

            if (res.data.rez == 200) {
                alert("Student je sačuvan!")
                window.location.replace('/studenti')
            }
            else
                alert("Greška!")

        });

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }




    return (
        <div className="novi-div">

            <Sidebar />

            <h1 id="novi-student-h1">Novi student</h1>

            <div className="novi-f">

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

                <button className="btn btn-primary" onClick={sacuvajStudenta}>Sačuvaj</button>

            </div>


        </div>
    )
}

export default NoviStudent;