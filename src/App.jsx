import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [personas, setPersonas] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function cargarPersonas() {
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

    cargarPersonas()
  }, [])

  if (cargando) {
    return <p>Cargando datos...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <main>
      <h1>Datos de Supabase</h1>

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
