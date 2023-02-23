import React from 'react'

function Paciente() {
  return (
    <div className='bg-white m-3 shadow-md px-5 py-10 rounded-md '>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre: {" "}
            <span className='font-normal normal-case'>Lupe</span>  
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Propietario: {" "} 
            <span className='font-normal normal-case'>Carlos</span>  
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: {" "}
            <span className='font-normal normal-case'>correo.carlosdearmas@gamil.com</span>  
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha de alta: {" "}
            <span className='font-normal normal-case'>06 Julio de 2022</span>  
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Sintomas: {" "}
            <span className='font-normal normal-case'>Esta como una rosa
            preciosa. Mejor que yo y que tu.</span>  
          </p>
        </div>
  )
}

export default Paciente