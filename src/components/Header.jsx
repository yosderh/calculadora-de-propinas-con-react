import React from 'react'
import IconNewWorker from '../assets/image/nuevo-gasto.svg'
import {generarId} from '../helpers'

const Header = ({workers, setWorkers, setListWorkers}) => {

  const handleNewWorker = ()=>{
    const name= window.prompt('Agrega el Nombre del Trabajador: ');  

    if(name!==null){
      if(name=='' || name.includes(' ')){

        alert('el nombre no es valido');
  
      }else{
          const nombre = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        const worker = {nombre, id: generarId() };
        setWorkers([...workers, worker]);
        setListWorkers(true);
  
    }
      return;
    }



  }

  return (
    <>
       <h2>Calculadora de Propinas</h2>
        <div className="img-contain">
            <div className="image">
        </div>
        </div>
        <div className='new-worker'>
          <img src= {IconNewWorker}
             alt="icono de agregar nuevo trabajador"
             onClick={handleNewWorker} 
          />
      </div>
    </>
  )
}

export default Header
