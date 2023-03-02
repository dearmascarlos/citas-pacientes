import React from 'react'

function Paciente({paciente, setPaciente, eliminarPaciente}) {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  return (
    <div className='bg-white m-3 shadow-md px-5 py-10 rounded-md '>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre: {" "}
            <span className='font-normal normal-case'>{nombre}</span>  
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Propietario: {" "} 
            <span className='font-normal normal-case'>{propietario}</span>  
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: {" "}
            <span className='font-normal normal-case'>{email}</span>  
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha de alta: {" "}
            <span className='font-normal normal-case'>{fecha}</span>  
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Sintomas: {" "}
            <span className='font-normal normal-case'>{sintomas}</span>  
          </p>
          <div 
            className='flex justify-between mt-8'
          >
            <button
              className='py-2 px-8 bg-green-500 rounded-md text-white font-bold' 
              type='button'
              onClick={() => setPaciente(paciente)}
            >Editar
            </button>

            <button
              className='py-2 px-8 bg-red-500 rounded-md font-bold text-white'
              type='button'
              onClick={ () => eliminarPaciente(id)}
            >Eliminar
            </button>

          </div>
        </div>
  )
}

export default Paciente