

       import './dashIncorporacao.css';
       import { useState } from 'react';
       import firebase from '../../services/firebaseConnection';
        
    
        export default function DashIncorporacao () {
            const listRef = firebase.firestore().collection('incorporacao').where('Tipo', '==', 'Implementação');
            const listRef3 = firebase.firestore().collection('incorporacao').where('Tipo', '==', 'Entendimento');
            const listRef4 = firebase.firestore().collection('incorporacao').where('Tipo', '==', 'Melhoria');
            const listRef2 = firebase.firestore().collection('incorporacao').where('Projeto', '==', 'Incorporação');
            const listRef8 = firebase.firestore().collection('incorporacao').where('Ambiente', '==', 'Local');
            const listRef9 = firebase.firestore().collection('incorporacao').where('Ambiente', '==', 'Cresol');
            const listRef10 = firebase.firestore().collection('incorporacao').where('Ambiente', '==', 'Homologação');
            const listRef5 = firebase.firestore().collection('indicadorincorporacao').where('Cenário', '>', 0);
            const listRef6 = firebase.firestore().collection('indicadorincorporacao').where('Res', '>=', 25);
            const listRef7 = firebase.firestore().collection('indicadorincorporacao').where('Res', '<', 25);
            const [chamados2, setChamados2] = useState([]);
            const [chamados3, setChamados3] = useState([]);
            const [chamados4, setChamados4] = useState([]);
            const [chamados5, setChamados5] = useState([]);
            const [chamados6, setChamados6] = useState([]);
            const [chamados7, setChamados7] = useState([]);
            const [chamados8, setChamados8] = useState([]);
            const [chamados9, setChamados9] = useState([]);
            const [chamados10, setChamados10] = useState([]);
            const [chamados11, setChamados11] = useState([]);
            const [chamados1, setChamados1] = useState([]);
            const med_trf = (chamados6.length / chamados5.length) * 100
            const med_trd = (chamados7.length / chamados5.length) * 100
            const med_imp = (chamados2.length / chamados3.length) * 100
            const med_ent = (chamados1.length / chamados3.length) * 100
            const med_melh = (chamados4.length / chamados3.length) * 100
            const med_loc = (chamados8.length / chamados3.length) * 100
            const med_cr = (chamados9.length / chamados3.length) * 100
            const med_hr = (chamados10.length / chamados3.length) * 100
            const med_loc2 = Math.round(med_loc)
            const med_cr2 = Math.round(med_cr)
            const med_hr2 = Math.round(med_hr)
            const med_trd2 = Math.round(med_trd)
            const med_trf2 = Math.round(med_trf)
            const med_melh2 = Math.round(med_melh)
            const med_ent2 = Math.round(med_ent)
            const med_imp2 = Math.round(med_imp)
            const [loading, setLoading] = useState(true);
            let res = [];
            let res2 = [];
            let res3 = [];
            let res4 = [];
            let res5 = [];
            let res6 = [];
            let res7 = [];
            let res8 = [];
            let res9 = [];
            let res10 = [];
            let res11 = [];
           
         
    
    
         
        listRef5.get().then(
                
    
                snapshot => {
                    
    
                    snapshot.docs.forEach(doc => {
                        res5.push ({
    
                            id: doc.id
    
                           
    
                        })
    
                      
                        
                        setChamados5(chamados5 => [...res5])
                       
                        
      
    
                    })
                    setLoading(false);
                    
                })
    
                
    
               listRef6.get().then(
                
    
                    snapshot => {
                        
        
                        snapshot.docs.forEach(doc => {
                            res6.push ({
        
                                id: doc.id
        
                               
        
                            })
        
                          
                            
                            setChamados6(chamados6 => [...res6])
                           
                            
          
        
                        })
                        setLoading(false);
                        
                    })
    
            
            
                   listRef7.get().then(
                
    
                        snapshot => {
                            
            
                            snapshot.docs.forEach(doc => {
                                res7.push ({
            
                                    id: doc.id
            
                                   
            
                                })
            
                              
                                
                                setChamados7(chamados7 => [...res7])
                               
                                
              
            
                            })
                            setLoading(false);
                            
                        })
        
           
           
           
           
           
           
           
           
           
           
           
           
           
          listRef.get().then(
                
    
                snapshot => {
                    
    
                    snapshot.docs.forEach(doc => {
                        res.push ({
    
                            id: doc.id
    
                           
    
                        })
                        
                        setChamados2(chamados2 => [...res])
                        
                       
    
                    })
                    setLoading(false);
                    
                })
    
                 listRef3.get().then(
                
    
                    snapshot => {
                        
        
                        snapshot.docs.forEach(doc => {
                            res3.push ({
        
                                id: doc.id
        
                               
        
                            })
                            
                            setChamados1(chamados1 => [...res3])
                            
          
        
                        })
                        setLoading(false);
                        
                    })
    
    
                    
                      listRef4.get().then(
                
    
                    snapshot => {
                        
        
                        snapshot.docs.forEach(doc => {
                            res4.push ({
        
                                id: doc.id
        
                               
        
                            })
                            
                            setChamados4(chamados4 => [...res4])
                            
          
        
                        })
                        setLoading(false);
                        
                    })
            
            
    
    
                     listRef2.get().then(
                
    
                    snapshot => {
                        
        
                        snapshot.docs.forEach(doc => {
                            res2.push ({
        
                                id: doc.id
        
                               
        
                            })
                            
                            setChamados3(chamados3 => [...res2])
          
        
                        })
        
                        
                    })
    
    
    
    
                    
                    listRef8.get().then(
                
    
                        snapshot => {
                            
            
                            snapshot.docs.forEach(doc => {
                                res8.push ({
            
                                    id: doc.id
            
                                   
            
                                })
            
                              
                                
                                setChamados8(chamados8 => [...res8])
                               
                                
              
            
                            })
                            setLoading(false);
                            
                        })
    
    
                       listRef9.get().then(
                
    
                            snapshot => {
                                
                
                                snapshot.docs.forEach(doc => {
                                    res9.push ({
                
                                        id: doc.id
                
                                       
                
                                    })
                
                                  
                                    
                                    setChamados9(chamados9 => [...res9])
                                   
                                    
                  
                
                                })
                                setLoading(false);
                                
                            })
    
    
                            
                            listRef10.get().then(
                
    
                            snapshot => {
                                
                
                                snapshot.docs.forEach(doc => {
                                    res10.push ({
                
                                        id: doc.id
                
                                       
                
                                    })
                
                                  
                                    
                                    setChamados10(chamados10 => [...res10])
                                   
                                    
                  
                
                                })
                                setLoading(false);
                                
                            }) 

                            listRef5.get().then((snapshot) => {
                                    
                    
                                    snapshot.forEach((doc) => {
                                        res11.push ({
                                            id: doc.id,
                                            Cenário: doc.data().Cenário
                    
                                           
                    
                                        })
                    
                                      
                                        
                                        setChamados11(chamados11 => [...res11])
                                       
                                        
                                        
                    
                                    })
                                    setLoading(false);
                                    
                                })
                                 
                               const item = chamados11.map(items => items.Cenário);

                                

                            let soma = 0

                               for (let i=0; i<item.length; i++) {
                                soma+=item[i];
                               }

                               const med_err = (chamados3.length / soma) * 100
                               const med_err2 = Math.round(med_err)

                               
                               
                                
                                
                            
                   
    
                    
                   
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

<center> 
                    <h1>
                    Indicador Geral de erros
                    </h1><br/><br/>
    
                </center>
                      <table>
    
                    
                  <thead>
                    <tr>
                     
                      <th scope="col">#</th>
                      <th scope="col">cenários</th>
                      <th scope="col">Total de Erros</th>
                      <th scope="col">Resultado</th>
                      <th scope="col">Meta</th>
                      
                     
                      
                      
                      
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td data-label="#"></td>
                      <td data-label="Cenários">{soma}</td>
                      <td data-label="Total de erros">{chamados3.length}</td>
                      <td  data-label="Resultado">{med_err2}%</td>
                      <td  data-label="Meta">
                      <span className="badge" style={{ backgroundColor: med_err2 > 20 ? '#ff0000 '  : '#00ff00'   }}>RES</span>
                      
                      </td>
    
                      
                     
                     
                     
                        
                    </tr>
                      
                    
                  </tbody>
                </table><br/>
    
    
    <center> 
                    <h1>
                    Indicador Por Ambiente
                    </h1><br/><br/>
    
                </center>
                      <table>
    
                    
                  <thead>
                    <tr>
                     
                      <th scope="col">#</th>
                      <th scope="col">Total de erros</th>
                      <th scope="col">Local</th>
                      <th scope="col">Cresol</th>
                      <th scope="col">Homologação</th>
                      <th scope="col">Meta</th>
                     
                      
                      
                      
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td data-label="#"></td>
                      <td data-label="Total de tarefas">{chamados3.length}</td>
                      <td data-label="Local">{med_loc2}%</td>
                      <td  data-label="Cresol">{med_cr2}%</td>
                      <td  data-label="Homologação">{med_hr2}%</td>
                      <td  data-label="Meta">
                      <span className="badge" style={{ backgroundColor: med_loc2 < 80 ? '#ff0000 '  : '#00ff00'   }}>RES</span>
                      
                      </td>
    
                      
                     
                     
                     
                        
                    </tr>
                      
                    
                  </tbody>
                </table><br/>
    
    
    <center> 
                    <h1>
                    Indicador Por Tarefa
                    </h1><br/><br/>
    
                </center>
                      <table>
    
                    
                  <thead>
                    <tr>
                     
                      <th scope="col">#</th>
                      <th scope="col">Total de tarefas</th>
                      <th scope="col">Dentro da meta</th>
                      <th scope="col">Fora da meta</th>
                      
                     
                      
                      
                      
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td data-label="#"></td>
                      <td data-label="Total de tarefas">{chamados5.length}</td>
                      <td data-label="Dentro da meta">{med_trd2}%</td>
                      <td  data-label="Fora da meta">{med_trf2}%</td>
                     
                      
                     
                     
                     
                        
                    </tr>
                      
                    
                  </tbody>
                </table><br/>
                
                <center> 
                    <h1>
                    Indicador Por Tipo de Erro 
                    </h1><br/><br/>
    
                </center>
                      <table>
    
                    
                  <thead>
                    <tr>
                     
                      <th scope="col">#</th>
                      <th scope="col">Tipo de erro</th>
                      <th scope="col">Número de erros</th>
                      <th scope="col">Média</th>
                     
                      
                      
                      
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td data-label="#"></td>
                      <td data-label="Tipo de erro">Implementação</td>
                      <td data-label="Número de erros">{chamados2.length}</td>
                      <td  data-label="Média">{med_imp2}%</td>
                      
                     
                     
                     
                        
                    </tr>
                      
                    
                  </tbody>
                </table><br/>
                
    
                
                
               
                      <table>
    
                    
                  <thead>
                    <tr>
                     
                      <th scope="col">#</th>
                      <th scope="col">Tipo de erro</th>
                      <th scope="col">Número de erros</th>
                      <th scope="col">Média</th>
                     
                      
                      
                      
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td data-label="#"></td>
                      <td data-label="Tipo de erro">Entendimento</td>
                      <td data-label="Número de erros">{chamados1.length}</td>
                      <td  data-label="Média">{med_ent2}%</td>
                      
                     
                     
                     
                        
                    </tr>
                      
                    
                  </tbody>
                </table><br/>
    
                <table>
    
                    
    <thead>
      <tr>
       
        <th scope="col">#</th>
        <th scope="col">Tipo de erro</th>
        <th scope="col">Número de erros</th>
        <th scope="col">Média</th>
       
        
        
        
      </tr>
    </thead>
    <tbody>
    <tr>
        <td data-label="#"></td>
        <td data-label="Tipo de erro">Melhoria</td>
        <td data-label="Número de erros">{chamados4.length}</td>
        <td  data-label="Média">{med_melh2}%</td>
        
       
       
       
          
      </tr>
        
      
    </tbody>
    </table>
    
    
                </div>
               
               
                    
               
                    
                
                    
                    
                    
            
                    
             
                    
                    
                    
                    );
    
                    
                                    
                
        }

        
   
  

        