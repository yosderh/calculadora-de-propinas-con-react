import { useEffect } from 'react';
import ListWorkers from './ListWorkers'

const Worker = ({workers, setWorkers, setFullTips}) => {
    const workersOrder = workers.sort((a,b)=>a.nombre.localeCompare(b.nombre));

    const deleteWorker = id=>{
       const workersAct = workers.filter(worker=> worker.id !==id);

        setWorkers(workersAct);
    }




  return (
        <div className= 'form1'>

                { workersOrder.map(worker=>(
                    <ListWorkers
                        key={worker.id}
                        worker={worker}
                        deleteWorker={deleteWorker}
                    />
                    ))}

                    <form className='form2'>
                        <label  htmlFor="totalTips">Propinas Totales: </label>
                        <input
                            id='totalTips'
                            type="number"
                            onChange={e=>setFullTips(Number(e.target.value))}
                          />
                    </form>

        </div>

  )
}

export default Worker
