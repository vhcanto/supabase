# React + Supabase

App básica creada con React + Vite para leer datos de una tabla de Supabase y mostrarlos en pantalla.

## Archivos principales

- `src/supabaseClient.js`: crea la conexión con Supabase usando la Project URL y la Anon Key.
- `src/App.jsx`: consulta la tabla `tabla01`, guarda los datos con `useState`, carga la información con `useEffect` y muestra `nombre` y `edad`.
- `src/main.jsx`: monta la aplicación React en el elemento `root` del HTML.
- `index.html`: archivo HTML principal usado por Vite.

## Comandos

Instalar dependencias:

```bash
npm install
```

Instalar Supabase:

```bash
npm install @supabase/supabase-js
```

Ejecutar el proyecto:

```bash
npm run dev
```

## Nota

Antes de ejecutar la app, reemplaza `PEGAR_AQUI_LA_ANON_KEY` en `src/supabaseClient.js` por la Anon Key real del proyecto.
