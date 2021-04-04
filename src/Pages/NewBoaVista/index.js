import './newBoaVista.css';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import firebase from '../../services/firebaseConnection';




export default function NewBoaVista(){

    const { id } = useParams();
    const history = useHistory();
    const [prj, setPrj] = useState('Boa Vista');
    const [etr, setEtr] = useState("");
    const [des, setDes] = useState("");
    const [amb, setAmb] = useState("");
    const [errr, setErrr] = useState("");
    const [complemento, setComplemento] = useState('');
  

    useEffect(()=> {
      async function loaders(){
        await firebase.firestore().collection('boavista')
        .get()
        .then((snapshot)=>{
          let lista = [];
  
          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
             
            })
          })
  
         if(id){
            loadId(lista);
          }
  
        })
        .catch((error)=>{
          console.log('DEU ALGUM ERRO!', error);
        
        })
  
      }
  
      loaders();
  
    }, [id]);

    async function loadId(lista){
      await firebase.firestore().collection('boavista').doc(id)
      .get()
      .then((snapshot) => {
        setEtr(snapshot.data().Entregável);
        setErrr(snapshot.data().Tipo);
        setDes(snapshot.data().Desenvolvedor);
        setAmb(snapshot.data().Ambiente);
        setComplemento(snapshot.data().complemento)
  

  
      })
      .catch((err)=>{
        console.log('ERRO NO ID PASSADO: ', err);
        
      })
    }

   
  
    async function handleRegister(e){
      
        e.preventDefault();

        if(id){
          await firebase.firestore().collection('boavista')
          .doc(id)
          .update({
          Projeto: prj,
          Entregável: etr,
          Desenvolvedor: des,
          Ambiente: amb,
          Tipo: errr,
          complemento: complemento,
          created: new Date(),
          })
          .then(()=>{
            toast.success('Editado com sucesso!');
            setComplemento('');
            history.push('/listaboavista');
          })
          .catch((err)=>{
            toast.error('Ops erro ao registrar, tente mais tarde.')
            console.log(err);
          })
    
          return;
        }
    
        await firebase.firestore().collection('boavista')
        .add({
          Projeto: prj,
          Entregável: etr,
          Desenvolvedor: des,
          Ambiente: amb,
          Tipo: errr,
          complemento: complemento,
          created: new Date(),
          
          
          
          
        })
        .then(()=> {
         
          toast.success('Registrado com sucesso!');
          setComplemento('');
          setEtr("");
          setDes("");
          setAmb("");
          setErrr("");

          
          
        })
        .catch((err)=> {
          toast.error('Ops erro ao registrar, tente mais tarde.');
          console.log(err);
        })
    
    
      }

    

      function handleChangePrj(e){
        setPrj(e.target.value);
      }

    function handleChangeEtr(e){
        setEtr(e.target.value);
      }

      function handleChangeDes(e){
        setDes(e.target.value);
      }

      function handleChangeAmb(e){
        setAmb(e.target.value);
      }

      function handleChangeErrr(e){
        setErrr(e.target.value);
      }


     

  return(
    <div>
    
    

        <div className="container">

          <form className="form-profile"  onSubmit={handleRegister} >

           
            
            
          <label>Projeto</label>
          <select value={prj} onChange={handleChangePrj}> 
        <option value="Boa Vista">Boa Vista</option>
            </select> <br/> <br/>
         
         
         
          <label>Entregável</label>
          <select id = "teste" value={etr} onChange={handleChangeEtr} required> 
           <option value="">Selecione o entregável</option>
            <option value="E1">E1</option>
            <option value="E2">E2</option>
            <option value="E3">E3</option>
            </select> <br/> <br/>

            <label>Desenvolvedor</label>
            <select value={des} onChange={handleChangeDes} required> 
            <option value="">Selecione um desenvolvedor</option>
            <option value="Elias">Elias</option>
              <option value="Marcelo Faria">Marcelo Faria</option>
              <option value="Thalles">Thalles</option>
            </select> <br/> <br/>

            <label>Ambiente</label>
            <select value={amb} onChange={handleChangeAmb} required> 
            <option value="">Selecione um ambiente</option>
            <option value="Local">Local</option>
              <option value="Cresol">Cresol</option>
              <option value="Homologação">Homologação</option>
            </select> <br/> <br/>

            <label>Tipo de erro</label>
            <select value={errr} onChange={handleChangeErrr} required> 
            <option value="">Selecione o tipo de erro</option>
            <option value="Implementação">Implementação</option>
              <option value="Entendimento">Entendimento</option>
              <option value="Melhoria">Melhoria</option>
            </select> <br/> <br/>

            <label>Complemento</label>
            <textarea
              type="text"
              placeholder="Descreva o erro."
              value={complemento} required 
              onChange={ (e) => setComplemento(e.target.value) }
            /> 
            
            <button type="submit">Registrar</button>  
            <Link to="/listaboavista" className ="new">
          Voltar para a lista
          </Link>
            

            
            
          

          </form>

        </div>

      </div>
    
  )
}