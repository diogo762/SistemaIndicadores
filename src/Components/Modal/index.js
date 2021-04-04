
import './modal.css';

import { FiX } from 'react-icons/fi';


export default function Modal({conteudo, close}){
  return(
    <div className="modal">
      <div className="container">
        <button className="close" onClick={ close }>
          <FiX size={23} color="#FFF" />
          Voltar
        </button>

        <div>
          <h2>Detalhes</h2>

         {conteudo.complemento !== '' && (
            <>
              <h3>Descrição do erro</h3>
              <p>
                {conteudo.complemento}
              </p>
            </>
          )}

        </div>
      </div>
    </div>
  )
}