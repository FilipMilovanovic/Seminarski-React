import Sidebar from "../components/Sidebar";
import { useLocation } from 'react-router-dom';


function Index() {

    const location = useLocation()

    return (
        <div>
            <Sidebar />
        </div>
    )
}

export default Index;