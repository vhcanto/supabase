import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [personas, setPersonas] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [vista, setVista] = useState('lista')
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  const [errorFormulario, setErrorFormulario] = useState(null)

  async function cargarPersonas() {
    setCargando(true)
    setError(null)

    const { data, error } = await supabase
      .from('tabla01')
      .select('id, created_at, nombre, edad')

    if (error) {
      setError('Ocurrió un error al cargar los datos.')
    } else {
      setPersonas(data)
    }

    setCargando(false)
  }

  useEffect(() => {
    cargarPersonas()
  }, [])

  async function crearPersona(event) {
    event.preventDefault()
    setErrorFormulario(null)

    const { error } = await supabase
      .from('tabla01')
      .insert({ nombre, edad: Number(edad) })

    if (error) {
      setErrorFormulario('Ocurrió un error al guardar el registro.')
      return
    }

    setNombre('')
    setEdad('')
    await cargarPersonas()
    setVista('lista')
  }

  if (cargando) {
    return <p>Cargando datos...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (vista === 'formulario') {
    return (
      <main>
        <h1>Nuevo registro</h1>

        {errorFormulario && <p>{errorFormulario}</p>}

        <form onSubmit={crearPersona}>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="edad">Edad</label>
            <input
              id="edad"
              type="number"
              value={edad}
              onChange={(event) => setEdad(event.target.value)}
              required
            />
          </div>

          <button type="submit">Guardar</button>
          <button type="button" onClick={() => setVista('lista')}>
            Cancelar
          </button>
        </form>
      </main>
    )
  }

  return (
    <main>
      <h1>Datos de Supabase</h1>
      <button type="button" onClick={() => setVista('formulario')}>
        Nuevo registro
      </button>

      {personas.length === 0 ? (
        <p>No hay registros.</p>
      ) : (
        <ul>
          {personas.map((persona) => (
            <li key={persona.id}>
              {persona.nombre} - {persona.edad} años
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
