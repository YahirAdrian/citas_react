import Paciente from './Paciente'


export default function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

  return (
    <div className='md:w-1/2 md:h-screen overflow-y-scroll'>

      {pacientes && pacientes.length ?  
      (
        <>
          <h2 className='font-black text-3xl text-center'>Listado pacientes</h2>

          <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus {' '}
            <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
          </p>
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>

          <p className='text-xl mt-5 mb-10 text-center'>
          <span className='text-indigo-600 font-bold'>Comienza agregando pacientes y aparecerán en este lugar</span>
          </p>
        </>
      )}

      {pacientes.map( (paciente) =>( 
        <Paciente 
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />

      ))}
    </div>
  )
}
