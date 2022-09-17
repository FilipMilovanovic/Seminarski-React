import Sidebar from "../components/Sidebar";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import TabelaPolozeni from "../components/TabelaPolozeni";


function PolozeniIspiti() {

    const [polozeniIspiti, setPolozeniIspiti] = useState([])
    const params = new useParams();
    const brojIndeksa = params.broj_indeksa;
    const [sort, setSort] = useState('desc')


    useEffect(() => {
        axios.get(`http://localhost:8000/api/polozeniIspitiStudenta/${brojIndeksa}`).then(res => {
            setPolozeniIspiti(res.data.ispiti);
        });

    }, []);


    function sortiranje() {
        axios.get(`http://localhost:8000/api/sortiranje/${brojIndeksa}/${sort}`).then(res => {
            setPolozeniIspiti(res.data.ispiti);
        });

        if (sort == 'desc')
            setSort('asc')
        else
            setSort('desc')
    }



    var zbirOcena = 0;
    var zbirESPB = 0;

    for (let i = 0; i < polozeniIspiti.length; i++) {
        zbirOcena += polozeniIspiti[i].ocena;
        zbirESPB += polozeniIspiti[i].ESPB;
    }

    var prosek = Number(zbirOcena / polozeniIspiti.length).toFixed(2);


    console.log(polozeniIspiti)

    return (
        <div className="polozeni-ispiti-div">

            <Sidebar />


            {polozeniIspiti.length > 0 ? (
                <div className="pispiti-div">

                    <h1 id="polozeni-h1">Položeni ispiti</h1>

                    <TabelaPolozeni polozeniIspiti={polozeniIspiti} sortiranje={sortiranje} />

                    <h5 id="prosek">Prosečna ocena: {prosek} </h5>
                    <h5 id="zbirespb">Zbir ESPB poena: {zbirESPB} </h5>
                </div>
            )

                : <h1 id="nemate-h1">Nemate položene ispite!</h1>}

        </div>
    )
}

export default PolozeniIspiti;