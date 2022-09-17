
function TabelaPrijavi(props) {

    const ispitiZaPrijavu = props.ispitiZaPrijavu

    return (
        <div>

            <div className='tabela-div'>
                <table className="table table-bordered table-hover">
                    <thead id='th-tbl'>
                        <tr>
                            <th>Naziv</th>
                            <th>ESPB</th>
                            <th>Tip</th>
                            <th>Semestar</th>
                            <th>Profesor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ispitiZaPrijavu.map(ispit => {
                            return (
                                <tr key={ispit.id}>
                                    <td>{ispit.naziv}</td>
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

export default TabelaPrijavi;