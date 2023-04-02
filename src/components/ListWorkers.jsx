import {useEffect, useState} from 'react'
import imgCerrar from '../assets/image/cerrar.svg'

const ListWorkers = ({worker,deleteWorker}) => {

    const [horas, setHoras]= useState(0);
    const [minutos, setMinutos]= useState(0);

    const handleClose= (id)=>{
      const cerrar =  confirm('¿esta seguro de eliminar este Trabajador?')

        if(cerrar){
            deleteWorker(id);
        }
    }

   useEffect(()=>{
        worker.hora = horas;
        worker.minuts= minutos;
   },[horas, minutos])


    

//   useEffect(()=>{
        
//   },[horas])

    // const allMinuts = minut=>{
    //     setMinuts([...minuts, minut])
    // }

  return (
    <div className='form-worker sombra'>

       <label htmlFor="hours"><span>{worker.nombre}</span></label>
                <div >   
                    <input 
                        className='horas'
                        type="number" 
                        placeholder='hrs'
                        id='hours'
                        onChange={e => setHoras(Number(e.target.value))}
                    />
                    <label htmlFor="minuts"> : </label>
                    <input
                        className='minutos'
                        type="number"
                        placeholder='min'
                        id='minuts'
                        onChange={e=> setMinutos(Number(e.target.value))}
                    />
                </div>

                <img 
                className='icon-cerrar' 
                src={imgCerrar} 
                alt=" icono para cerrar"
                onClick={() => handleClose(worker.id)}
                />

    </div>
  )
}

export default ListWorkers
