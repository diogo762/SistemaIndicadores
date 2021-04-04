import './newIndicadorBoaVista.css';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import firebase from '../../services/firebaseConnection';




export default function NewIndicadorBoaVista(){

    const { id } = useParams();
    const history = useHistory();
    const [tarefa, setTarefa] = useState("");
    const [cenario, setCenario] = useState("");
    const [local, setLocal] = useState("");
    const [cresol, setCresol] = useState("");
    const [total, setTotal] = useState("");
    const [res, setRes] = useState('');
    let per = parseInt (cresol) + parseInt (local);
    let per2 = parseFloat(per) / parseFloat (cenario) * 100;
   
  
  
   


    useEffect(()=> {
      async function loaders(){
        await firebase.firestore().collection('indicadorboavista')
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
      await firebase.firestore().collection('indicadorboavista').doc(id)
      .get()
      .then((snapshot) => {
        setTarefa(snapshot.data().Tarefa);
        setCenario(snapshot.data().Cenário);
        setLocal(snapshot.data().Local);
        setCresol(snapshot.data().Cresol);
        setTotal(snapshot.data().Total)
        setRes(snapshot.data().Res)
  

  
      })
      .catch((err)=>{
        console.log('ERRO NO ID PASSADO: ', err);
        
      })
    }

   
  
    async function handleRegister(e){
      
        e.preventDefault();

        if(id){
          await firebase.firestore().collection('indicadorboavista')
          .doc(id)
          .update({
          Tarefa: tarefa,
          Cenário: cenario,
          Local: local,
          Cresol: cresol,
          created: new Date(),
          })
          .then(()=>{
            toast.success('Editado com sucesso!');
          
            history.push('/indicadorboavista');
          })
          .catch((err)=>{
            toast.error('Ops erro ao registrar, tente mais tarde.')
            console.log(err);
          })
    
          return;
        }
    
        await firebase.firestore().collection('indicadorboavista')
        .add({
            Tarefa: tarefa,
            Cenário: parseInt (cenario),
            Local: parseInt (local),
            Cresol: parseInt ( cresol, total),
            Total: parseInt (cresol) + parseInt ( local),
            Res: Math.round(per2),
            created: new Date(),

            
            
          
          
          
          
        })
        .then(()=> {
         
          toast.success('Registrado com sucesso!');
          setCenario('');
          setLocal('');
          setCresol('');
          setTarefa('');

          
          
        })
        .catch((err)=> {
          toast.error('Ops erro ao registrar, tente mais tarde.');
          console.log(err);
        })
    
    
      }

    
    function handleChangeTr(e){
        setTarefa(e.target.value);
      }

    function handleChangeCen(e){
        setCenario(e.target.value);
      }

      function handleChangeLo(e){
       setLocal(e.target.value);
      }

      function handleChangeCr(e){
        setCresol(e.target.value);
      }

      


          
        


     

  return(
    <div>
    
    

    <div className="container">

      <form className="form-profile"  onSubmit={handleRegister} >

       
        
        
      <label>Tarefa</label>
      <select value={tarefa} onChange={handleChangeTr} required>
      <option value="">Selecione a tarefa</option> 
        <option value="E1">E1</option>
        <option value="E2">E2</option>
        <option value="E3">E3</option>
        <option value="E4">E4</option>
        <option value="E5">E5</option>
        <option value="E6">E6</option>
        <option value="E7">E7</option>
        <option value="E8">E8</option>
        <option value="E9">E9</option>
        <option value="E10">E10</option>
        <option value="E11">E11</option>
        <option value="E12">E12</option>
        <option value="E13">E13</option>
        <option value="E14">E14</option>
        <option value="E15">E15</option>
        <option value="E16">E16</option>
        <option value="E17">E17</option>
        <option value="E18">E18</option>
        <option value="E19">E19</option>
        <option value="E20">E20</option>
        <option value="E21">E21</option>
        <option value="E22">E22</option>
        <option value="E23">E23</option>
        <option value="E24">E24</option>
        <option value="E25">E25</option>
        <option value="E26">E26</option>
        <option value="E27">E27</option>
        <option value="E28">E28</option>
        </select> <br/> <br/>
     
     
     
      <label>Cenários</label>
      <select  value={cenario} onChange={handleChangeCen} required> 
       <option value="">Selecione o número de cenários</option>
       <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
        <option value="44">44</option>
        <option value="45">45</option>
        <option value="46">46</option>
        <option value="47">47</option>
        <option value="48">48</option>
        <option value="49">49</option>
        <option value="50">50</option>
        
        </select> <br/> <br/>

        <label>Erros Local</label>
        <select value={local} onChange={handleChangeLo} required> 
        <option value="">Quantidade de erros Local</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
        <option value="44">44</option>
        <option value="45">45</option>
        <option value="46">46</option>
        <option value="47">47</option>
        <option value="48">48</option>
        <option value="49">49</option>
        <option value="50">50</option>

        </select> <br/> <br/>

        <label>Erros Cresol</label>
        <select value={cresol} onChange={handleChangeCr} required> 
        <option value="">Quantidade de erros Cresol</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
        <option value="44">44</option>
        <option value="45">45</option>
        <option value="46">46</option>
        <option value="47">47</option>
        <option value="48">48</option>
        <option value="49">49</option>
        <option value="50">50</option>
        </select> <br/> <br/>


        
        <button type="submit">Registrar</button>  

        <Link to="/indicadorboavista" className ="new">
      Voltar para a lista
      </Link>
        

        
        
      

      </form>

    </div>

  </div>

  
  )
}

      

   
    
