import React from 'react'
import Paciente from './Paciente'

function ListadoPacientes({pacientes, setPaciente}) {

  React.useEffect(() => {
    console.log('nuevo paciente')
  }, [pacientes])

  return (
    <div className='md:w-1/2 lg:w-3/5'>
      
      {pacientes && pacientes.length ? (
        <>  
          <h2 className='font-black text-3xl text-center'>
            Listado de Pacientes
          </h2>
          <p className='font-bold text-center mt-5 mb-5'>
              Administra tus {""} 
              <span className=' text-indigo-400'>
                Pacientes y Citas
              </span>
          </p>
          <div className='h-screen overflow-scroll'>
            {pacientes.map( (paciente, i) => {
                return (
                  <Paciente 
                    key={i} /* cuidado con las practicas si es para BBDD extraemos e id 
                    pero si es del lado del cliente es mejor practica generar un
                    id unico y que no se base en el indice de map)*/
                    paciente={paciente}
                    setPaciente={setPaciente}
                  />
                )
            })}
            
          </div>
        </>
      ) : (
          <>
            <h2 className='font-black text-3xl text-center mt-8'>
              No hay pacientes
            </h2>
            <p className='font-bold text-center mt-5 mb-5'>
                Agrega tus {""} 
                <span className=' text-indigo-400'>
                  Pacientes y Citas
                </span>
            </p>
          </>
      )}
      
    </div>
  )
}

export default ListadoPacientes