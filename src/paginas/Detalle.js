import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Tarea from '../componentes/Tarea';

// Página de detalle: información completa de una tarea (el id viene en la URL: /tarea/:id)
function Detalle({ tareas }) {
  const { id } = useParams();
  const tarea = tareas.find((t) => t.id === Number(id));

  if (!tarea) {
    return (
      <>
        <h1 className="h3">Tarea no encontrada</h1>
        <p>No existe ninguna tarea con el número {id}.</p>
        <Button as={Link} to="/" variant="primary">
          Volver al inicio
        </Button>
      </>
    );
  }

  return (
    <>
      <Tarea tarea={tarea} modo="detalle" />
      <Button as={Link} to="/" variant="outline-secondary" className="mt-3">
        ← Volver a la lista
      </Button>
    </>
  );
}

export default Detalle;
