

    import './listaIncorporacao.css';
    
    import { useState, useEffect } from 'react';
    import { FiDelete, FiPlus, FiEdit2, FiSearch } from 'react-icons/fi';
    import firebase from '../../services/firebaseConnection';
    import Modal from '../../Components/Modal';
    import { toast } from 'react-toastify';
    import { Link } from 'react-router-dom';

    const listRef = firebase.firestore().collection('incorporacao').orderBy('created', 'desc');
    
    export default function ListaIncorporacao(){
      const [chamados, setChamados] = useState([]);
      const [loading, setLoading] = useState(true);
      const [showPostModal, setShowPostModal] = useState(false);
      const [detail, setDetail] = useState();
      const [isEmpty, setIsEmpty] = useState(false);

      useEffect(()=> {

        loadChamados();
    
        return () => {
    
        }
      }, []);
    
      
      async function loadChamados(){
        await listRef
        .get()
        .then((snapshot) => {
          updateState(snapshot)
        })
        .catch((err)=>{
          console.log('Deu algum erro: ', err);
         
        })
    
        setLoading(false);
    
      }
    
    
      async function updateState(snapshot){
        const isCollectionEmpty = snapshot.size === 0;
    
        if(!isCollectionEmpty){
          let lista = [];
    
          snapshot.forEach((doc)=>{
            lista.push({
              id: doc.id,
              Projeto: doc.data().Projeto,
              Entregável: doc.data().Entregável,
              Desenvolvedor: doc.data().Desenvolvedor,
              Ambiente: doc.data().Ambiente,
              Tipo: doc.data().Tipo,
              complemento: doc.data().complemento
            })
          })
          
      
          setChamados(chamados => [...chamados, ...lista]);
          
        }else{
          setIsEmpty(true);
        }
    
        
    
      }

      function togglePostModal(item){
        setShowPostModal(!showPostModal) 
        setDetail(item);
      }

      function reset() {
        setTimeout(function(){  document.location.reload(true); }, 1000);
      }


      
      async function excluirPost(id){
        
       
        await firebase.firestore().collection('incorporacao').doc(id)
        .delete()
        .then(()=>{
         
       toast.success('Deletado com sucesso');
        
       reset()
          
          
       })
        
      }
    

          if(loading){
            return(
             
                
        
                <div className="content">
                 
        
                  <div className="container dashboard">
                    <span>Buscando Lista...</span>
                  </div>
        
                </div>      
              
            )
          }
    
    
      return(
        <div>
          
    {chamados.length === 0 ? (
              <div className="container dashboard">
                <span>Nenhum Erro registrado...</span>
    
                <Link to="/newincorporacao" className="new">
                  <FiPlus size={25} color="#FFF" />
                  Novo incidente
                </Link>
              </div>
            )  : (
              <>
                <Link to="/newincorporacao" className="new">
                  <FiPlus size={25} color="#FFF" />
                  Novo incidente
                </Link>


                <table>
              <thead>
                <tr>
                  
                  <th scope="col">#</th>
                  <th scope="col">Projeto</th>
                  <th scope="col">Entregável</th>
                  <th scope="col">Desenvolvedor</th>
                  <th scope="col">Ambiente</th>
                  <th scope="col">Tipo de erro</th>
                  <th scope="col">Descrição</th>
                  <th scope="col">Editar/Deletar</th>
                  
                  
                </tr>
              </thead>
              <tbody>
              {chamados.map((item, index)=>{
                  return(
                    <tr key={index}>
                  <td data-label="#"></td>
                  <td data-label="Projeto">{item.Projeto}</td>
                  <td data-label="Entregável">{item.Entregável}</td>
                  <td data-label="Desenvolvedor">{item.Desenvolvedor}</td>
                  <td data-label="Ambiente">{item.Ambiente}</td>
                  <td data-label="Tipo de erro">{item.Tipo}</td>
                  <td data-label="Detalhes">
                  <button className="action" style={{backgroundColor: '#3583f6' }}onClick={ () => togglePostModal(item) }>
                      <FiSearch color="#FFF" size={17} />
                      </button>
                      </td>
                  <td data-label="Editar/Deletar">
                  <Link className="action" style={{backgroundColor: '#3583f6' }}to={`/newincorporacao/${item.id}`}>
                      <FiEdit2 color="#FFF" size={17} />
                      </Link>
                   <button className="action" style={{backgroundColor: '#F6a935' }} onClick={ () => excluirPost(item.id)}>
                      <FiDelete color="#FFF" size={17} />
                    </button>
                    </td>
                    
                </tr>
                  )
                   })}
              </tbody>
            </table>
         
              </>

              
            )}

    {showPostModal && (
        <Modal
          conteudo={detail}
          close={togglePostModal}
        />
      )}
    
          </div>
    
       
      )
    }