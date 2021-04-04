import { Link } from 'react-router-dom'
import './header.css';
import { FiHome, FiX, FiBarChart, FiBookOpen } from "react-icons/fi";


export default function Header(){
  return(
   
    <div className="sidebar">
      

      <Link to="/home">
        <FiHome color="#FFF" size={24} />
       Página inicial
      </Link>

      <Link to="/lista">
        <FiX color="#FFF" size={24} />
        Lista de erros
      </Link>    
     
      
      <Link to="/indicador">
        <FiBookOpen color="#FFF" size={24} />
        Indicadores
      </Link>    

      <Link to="/dashboard">
        <FiBarChart color="#FFF" size={24} />
        Dashboard
      </Link>
               
    </div>
    
        
  )
}