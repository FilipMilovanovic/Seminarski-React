function TabelaPolozeni(props) {

    const polozeniIspiti = props.polozeniIspiti;


    return (
        <div>

            <div className='tabela-polozeni-div'>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Naziv</th>
                            <th onClick={props.sortiranje}>Ocena</th>
                            <th>ESPB</th>
                            <th>Tip</th>
                            <th>Semestar</th>
                            <th>Profesor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {polozeniIspiti.map(ispit => {
                            return (
                                <tr key={ispit.id}>
                                    <td>{ispit.naziv}</td>
                                    <td>{ispit.ocena}</td>
                                    <td>{ispit.ESPB}</td>
                                    <td>{ispit.tip}</td>
                                    <td>{ispit.semestar}</td>
                                    <td>{ispit.profesor}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>


            </div>




        </div>
    )
}

export default TabelaPolozeni;