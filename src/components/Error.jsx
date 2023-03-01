import React from 'react'

function Error() {
  return (
    <div 
        className='bg-gray-200 rounded-md'
    >
        <p 
            className='font-bold text-red-700 text-center mb-2'
        > * Todos los campos son obligatorios</p>
    </div>
  )
}

export default Error