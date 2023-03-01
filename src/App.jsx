import React from 'react'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = React.useState([])
  const [paciente, setPaciente] = React.useState({})


  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
        />
        <ListadoPacientes 
          pacientes={pacientes} 
          setPaciente={setPaciente}
        />
      </div>
    </div>  
  )
}

export default App
