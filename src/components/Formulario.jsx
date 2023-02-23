import React from 'react'

function Formulario() {
  return (
    <div className='md:w-1/2 lg:w-2/5 '>
      <h2 className='font-black text-3xl text-center'>
        Seguimiento de Pacientes
      </h2>
      <p className='font-bold text-lg mt-5 mb-5 text-center text-3xl'>
        Añade Pacientes y {""}
        <span className='text-indigo-400 font-bold'>Administralos</span>
      </p>
      <div className='mt-7'>  
      <form className='bg-white shadow-md rounded-lg py-10 px-5'>
        <div className='mb-5'>
          <label 
            className='block text-gray-700 uppercase font-bold'
            htmlFor='mascota'
          > 
          Nombre Mascota
          </label>
          <input
            id='mascota' 
            type="text"
            placeholder='Nombre de la Email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label 
            className='block text-gray-700 uppercase font-bold'
            htmlFor='propiertario'
          > 
          Nombre propiertario
          </label>
          <input
            id='propiertario' 
            type="text"
            placeholder='Nombre del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label 
            className='block text-gray-700 uppercase font-bold'
            htmlFor='Email'
          > 
          Email
          </label>
          <input
            id='Email' 
            type="text"
            placeholder='Email contacto'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label 
            className='block text-gray-700 uppercase font-bold'
            htmlFor='Alta'
          > 
          Cita
          </label>
          <input
            id='Alta' 
            type="date"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md placeholder-gray-400'
          />
        </div>
        <div className='mb-5'>
          <label 
            className='block text-gray-700 uppercase font-bold'
            htmlFor='Alta'
          > 
          Motivo
          </label>
          <textarea 
            id="sintomas"
            className='border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md'
            placeholder='Describe los sintomas'
          />
          
        </div> 

        <input 
          type="submit" 
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md 
          hover:bg-indigo-800 cursor-pointer transition-all' 
          value="Agregar Paciente"
        />

      </form>
      </div>
    </div>
  )
}

export default Formulario