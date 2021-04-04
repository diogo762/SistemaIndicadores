import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1></h1>
      <Link to="/indicador" >Indicador</Link> <br/>
      <Link to="/lista">Lista de erros</Link>
    </div>
  );
 }