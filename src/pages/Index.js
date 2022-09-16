import Sidebar from "../components/Sidebar";
import { useLocation, useNavigate } from 'react-router-dom';


function Index() {

    const location = useLocation()
    const navigate = useNavigate()

    if (localStorage.getItem('sesija') == '')
        window.location.replace('/')


    return (
        <div>
            <Sidebar />
        </div>
    )
}

export default Index;