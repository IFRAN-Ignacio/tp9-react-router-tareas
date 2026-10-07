import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import tareasIniciales from './datos';
import Menu from './componentes/Menu';
import Inicio from './paginas/Inicio';
import Detalle from './paginas/Detalle';
import Crear from './paginas/Crear';
import NoEncontrada from './paginas/NoEncontrada';

function App() {
  // Estado de React con la lista de tareas (y la información de cada una)
  const [tareas, setTareas] = useState(tareasIniciales);

  // Agrega una nueva tarea a la lista (siempre se crea un nuevo arreglo)
  function agregarTarea({ titulo, descripcion, completada }) {
    const nuevoId = tareas.reduce((maximo, t) => Math.max(maximo, t.id), 0) + 1;
    const nueva = {
      id: nuevoId,
      titulo,
      descripcion,
      fechaCreacion: new Date().toISOString(),
      completada,
    };
    setTareas([...tareas, nueva]);
  }

  return (
    <>
      <Menu />
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<Inicio tareas={tareas} />} />
          <Route path="/tarea/:id" element={<Detalle tareas={tareas} />} />
          <Route path="/nueva" element={<Crear agregarTarea={agregarTarea} />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
