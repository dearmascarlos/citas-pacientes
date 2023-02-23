import React from 'react'
import Paciente from './Paciente'

function ListadoPacientes() {
  return (
    <div className='md:w-1/2 lg:w-3/5'>
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
          <Paciente/>
          <Paciente/>
          <Paciente/>
          <Paciente/>
          
          <Paciente/>
          <Paciente/>
          
          <Paciente/>
          <Paciente/>
        </div>
    </div>
  )
}

export default ListadoPacientes