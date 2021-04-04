import { Link } from 'react-router-dom';
import './dashboard.css';


function Dashboard () {
    
    return(

    <div class="container">

  <Link to="/dashboavista">
              <h3>Boa vista</h3> <br/>
              </Link>
        
              <Link to="/dashincorporacao">
              <h3>Incorporação</h3>
              </Link>
    </div>
    );

}

export default Dashboard;