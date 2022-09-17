import Sidebar from "../components/Sidebar";
import { useState, useEffect } from 'react';
import axios from 'axios';


function Studenti() {

    const [sviStudenti, setSviStudenti] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8000/api/sviStudenti`).then(res => {
            setSviStudenti(res.data.studenti);
        });

    }, []);


    console.log(sviStudenti)

    return (
        <div className="studenti-div">

            <Sidebar />

            <h1 id="studenti-h1">Studenti</h1>


            <div className='studenti-tabela'>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Ime i prezime</th>
                            <th>Broj indeksa</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sviStudenti.map(student => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.broj_indeksa}</td>
                                    <td>{student.email}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>


            </div>


        </div>
    )
}

export default Studenti;