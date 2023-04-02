import React from 'react'
import iconRecalcular from '../assets/image/icons8-gira-a-la-derecha-24.png'
import iconDevolver from '../assets/image/icons8-volver-50.png'

//+56 9 76304133 numero de Roger

const Resultado = ({workers, fullTips, setFullTips, setFinalTips}) => {



    const regresar = ()=> setFinalTips([]);

    const resetear = ()=>{
        workers.map(worker=>{
            delete worker.hora;
            delete worker.minuts;
            delete worker.tips;
        });
        setFullTips(0);
        setFinalTips([]);

        location.reload();
    }

    const newFormat = cantidad=>{  //LE DA FORMATO DE PESOS CHILENOS 
        return (
          cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'CLP'
          })
        )
      }

      const totalTips = newFormat(fullTips);


  return (
    <div>
        <table className='newDiv sombra'>
            <tr>
                <th>Nombre</th>
                <th>Horas</th>
                <th>Propinas</th>
            </tr>

            {workers.map(worker=>{
                return (
                    <tr key={worker.id}>
                        <td>{worker.nombre}</td>
                        <td>{worker.hora}:{worker.minuts}</td>
                        <td>{worker.tips}</td>
                    </tr>
                )
            })}

        </table>
        <div className='fullTips'><span>Total: {totalTips}</span></div>

        <div className='div-btn-result'>
            <button
                 className='btn-Result'
                onClick={regresar}
            > 
                <img src={iconDevolver} alt="icono de flecha" /> 
                Regresar
            </button>


            <button 
                className='btn-Result'
                onClick={resetear}
            >
                 <img src={iconRecalcular} alt="icono de flecha en vuelta" />
                 Hacer otro Calculo
            </button>
        </div>
    </div>
  )
}

export default Resultado
