import { useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TabelaPrijavi from '../components/TabelaPrijavi';

function PrijavaIspita() {

    const params = new useParams();
    const brojIndeksa = params.broj_indeksa;

    const [sviIspiti, setSviIspiti] = useState([]);
    const [polozeniIspiti, setPolozeniIspiti] = useState([]);
    const [ispitiZaPrijavu, setIspitiZaPrijavu] = useState([]);


    useEffect(() => {


        axios.get(`http://localhost:8000/api/ispitiZaPrijavu/${brojIndeksa}`).then(res => {
            setIspitiZaPrijavu(res.data.ispiti);
        });



    }, []);


    console.log(ispitiZaPrijavu)

    return (
        <div className="prijava-ispita-div">
            <Sidebar />

            <h1 id='ispiti-pri-h1'>Ispiti koje mogu da prijavim</h1>

            <TabelaPrijavi ispitiZaPrijavu={ispitiZaPrijavu} />

        </div>
    )
}

export default PrijavaIspita;