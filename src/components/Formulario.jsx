import React from 'react'
import Error from './Error'

function Formulario( { setPacientes, pacientes, paciente } ) {

  const [nombre, setNombre] = React.useState('')
  const [propietario, setPropietario] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [fecha, setFecha] = React.useState('')
  const [sintomas, setSintomas] = React.useState('')
  const [error, setError] = React.useState(false)

  const genId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (e) => {  
    e.preventDefault()
      // Crear validaciones del formulario
    if ([ nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true)
    } else {
      setError(false)

      const datosPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        id: genId()
      }
      console.log(datosPaciente)
  
      setPacientes([...pacientes, datosPaciente])
  
      setNombre('')
      setEmail('')
      setFecha('')
      setSintomas('')
      setPropietario('')
    }

  }
  
  React.useEffect(() => {
    if( Object.keys(paciente).length > 0 ) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])
  return (
    <div className='md:w-1/2 lg:w-2/5 mx:5 my:10'>
      <h2 className='font-black text-3xl text-center'>
        Seguimiento de Pacientes
      </h2>
      <p className='font-bold text-lg mt-5 mb-5 text-center text-3xl'>
        Añade Pacientes y {""}
        <span className='text-indigo-400 font-bold'>Administralos</span>
      </p>
      <div className='mt-7'>  
      <form 
        className='bg-white shadow-md rounded-lg py-10 px-5'
        onSubmit={handleSubmit}
        
        >
          
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
            placeholder='Nombre de la Mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
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
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
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
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            />
          
        </div>
        { error && <Error/> }
        <input 
          type="submit" 
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md 
          hover:bg-indigo-800 cursor-pointer transition-all' 
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          />

      </form>
      </div>
    </div>
  )
}

export default Formulario