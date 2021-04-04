import { Link } from 'react-router-dom';
import './lista.css';


function Lista () {
    
    return(

    <div class="container">

<Link to="/listaboavista">
      <h3>Boa vista</h3> <br/>
      </Link>

      <Link to="/listaincorporacao">
      <h3>Incorporação</h3>
      </Link>

    </div>
    );

}

export default Lista;