import { useState, useEffect } from 'react'
import Header from './components/Header'
import Worker from './components/Worker'
import Resultado from './components/Resultado';


function App() {
  const [workers, setWorkers] = useState(localStorage.getItem('trabajadores') ? JSON.parse(localStorage.getItem('trabajadores')) : []);
  const [listWorkers, setListWorkers] = useState( workers.length>0 ? true : false);
  const [fullTips, setFullTips] = useState(0);
  const [finalTips, setFinalTips] = useState([]);


  
    useEffect(()=> {
      localStorage.setItem('trabajadores', JSON.stringify(workers) ?? [] )
      if(workers.length==0){
        setListWorkers(false);
        
      }   
    },[workers])

    
    const calcular = ()=>{

      if(fullTips>0){

        
        const sumaHoras = workers.reduce((total, worker)=> worker.hora + total, 0);
        const sumaMinutos = workers.reduce((total, worker)=> worker.minuts + total, 0);
        const totalDeMinuts = (sumaHoras * 60) + sumaMinutos;
        const valorMinuto = fullTips / totalDeMinuts;
        
        
         const workerTip= workers.map(worker=> {
          const tip = parseInt(valorMinuto*((worker.hora*60) + worker.minuts));
          worker.tips = newFormat(tip);
          if(tip>0){
            return newFormat(tip)
          }else{
            return 0;
          }
        });

        setFinalTips(workerTip);
        // console.log(workers);
        
      }else{
        alert('El Monto de las Propinas no es Valido, Por favor Ingresa un monto mayor a 0');
      } 

    }

  const newFormat = cantidad=>{  //LE DA FORMATO DE PESOS CHILENOS 
    return (
      cantidad.toLocaleString('en-US',{
        style: 'currency',
        currency: 'CLP'
      })
    )
  }
  const activarClaseInactive = ()=>{ //ACTIVA LA CLASE INACTIVE
    if(finalTips.length>0){
      return 'inactive';
    }else{
      return '';
    }
  }


  return (
    <div className='main '>
      <div className={`tips-container sombra ${activarClaseInactive()}`}>
        <Header 
          workers={workers}
          setWorkers= {setWorkers}
          setListWorkers={setListWorkers}
        />

        {listWorkers? (
          <Worker
            workers= {workers}
            setWorkers={setWorkers}
            setFullTips={setFullTips}
            activarClaseInactive={activarClaseInactive}
          />
        ) 
      : (<h2>No hay Trabajadores Agregados</h2>)}

        <button 
          className='btn-calc'
          onClick={calcular}
        >
        Calcular
        </button>
      </div>
        
        {finalTips.length>0 && (
          
          
        <Resultado 
          workers={workers}
          setWorkers={setWorkers}
          fullTips={fullTips}
          setFullTips={setFinalTips}
          setFinalTips={setFinalTips}
        />
        )}
      
    </div>
  )
}

export default App
