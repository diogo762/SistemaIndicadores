

    import './indicadorBoaVista.css';
    
    import { useState, useEffect } from 'react';
    import { FiDelete, FiPlus, FiEdit2, FiSearch } from 'react-icons/fi';
    import firebase from '../../services/firebaseConnection';
    import { Link } from 'react-router-dom';
    import { toast } from 'react-toastify';

    const listRef = firebase.firestore().collection('indicadorboavista').orderBy('created', 'desc');
  
    
    export default function IndicadorBoaVista(){
      const [chamados, setChamados] = useState([]);
      const [loading, setLoading] = useState(true);
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
              Cenário: doc.data().Cenário,
              Tarefa: doc.data().Tarefa,
              Local: doc.data().Local,
              Cresol: doc.data().Cresol,
              Total: doc.data().Total,
              Res: doc.data().Res
            })
          })
          
      
          setChamados(chamados => [...chamados, ...lista]);
          
        }else{
          setIsEmpty(true);
        }
    
        
    
      }

    

      function reset() {
        setTimeout(function(){  document.location.reload(true); }, 1000);
      }

      

      async function excluirPost(id){
        
       
        await firebase.firestore().collection('indicadorboavista').doc(id)
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
                <span>Nenhum Indicador registrado...</span>
    
                <Link to="/newindicadorboavista" className="new">
                  <FiPlus size={25} color="#FFF" />
                  Novo Indicador
                </Link>
              </div>
            )  : (
              <>
                <Link to="/newindicadorboavista" className="new">
                  <FiPlus size={25} color="#FFF" />
                  Novo
                </Link>


                <table>
              <thead>
                <tr>
                  
                  <th scope="col">#</th>
                  <th scope="col">Tarefa</th>
                  <th scope="col">Número de cenários</th>
                  <th scope="col">Erros local</th>
                  <th scope="col">Erros Cresol</th>
                  <th scope="col">Total de Erros</th>
                  <th scope="col">Res</th>
                  <th scope="col">Editar/Deletar</th>
                  
                  
                </tr>
              </thead>
              <tbody>
              {chamados.map((item, index)=>{
                  return(
                    <tr key={index}>
                  <td data-label="#"></td>
                  <td data-label="Tarefa">{item.Tarefa}</td>
                  <td className = "qtde" data-label="Cenário">{item.Cenário}</td>
                  <td  data-label="Erros local">{item.Local}</td>
                  <td  data-label="Erros cresol">{item.Cresol}</td>
                  <td data-label="Total de erros">{item.Total}</td>
                  <td data-label="Res">
                  <span className="badge" style={{ backgroundColor: item.Res >= 25 ? '#ff0000 '  : '#00ff00'   }}>{item.Res}%</span>
                  </td>
                  <td data-label="Editar/Deletar">
                    <Link className="action" style={{backgroundColor: '#3583f6' }}to={`/newindicadorboavista/${item.id}`}>
                      <FiEdit2 color="#FFF" size={17} />
                      </Link>
                   <button className="action" style={{backgroundColor: '#F6a935' }}onClick={ () => excluirPost(item.id) }>
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

    
      )
    
          </div>
    
       
      )
    }



    
        
        