

function Login() {




    return (
        <div>

            <div className="brind-div">
                <label id="lbl-broj-indeksa" className="display-6">Broj indeksa:</label>
                <input type="text" className="form-control" id="inp-br-ind" />
            </div>

            <div className="brind-div">
                <label id="lbl-broj-indeksa" className="display-6">Lozinka:</label>
                <input type="text" className="form-control" id="inp-br-ind" />
            </div>

            <button className="btn btn-secondary" id="btn-prijavi-se">Prijavi se</button>

        </div>
    )
}

export default Login;