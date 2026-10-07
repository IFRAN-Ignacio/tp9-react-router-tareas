import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const LARGO_RESUMEN = 100;

export function formatearFecha(iso) {
  return new Date(iso).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function EstadoTarea({ completada }) {
  return (
    <Badge bg={completada ? 'success' : 'warning'} text={completada ? undefined : 'dark'}>
      {completada ? 'Completa' : 'Incompleta'}
    </Badge>
  );
}

// Componente de tarea: se usa en la página de inicio (modo "resumen")
// y en la página de detalle (modo "detalle").
function Tarea({ tarea, modo = 'resumen' }) {
  if (modo === 'detalle') {
    return (
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title as="h1" className="h3">
            {tarea.titulo}
          </Card.Title>
          <Card.Text>{tarea.descripcion}</Card.Text>
          <ul className="list-unstyled mb-0">
            <li>
              <strong>Fecha de creación:</strong> {formatearFecha(tarea.fechaCreacion)}
            </li>
            <li>
              <strong>Estado:</strong> <EstadoTarea completada={tarea.completada} />
            </li>
          </ul>
        </Card.Body>
      </Card>
    );
  }

  // Descripción corta: si es larga, se corta en una palabra completa y se agrega "…"
  let corta = tarea.descripcion;
  if (corta.length > LARGO_RESUMEN) {
    corta = corta.slice(0, LARGO_RESUMEN);
    const ultimoEspacio = corta.lastIndexOf(' ');
    if (ultimoEspacio > 0) corta = corta.slice(0, ultimoEspacio);
    corta = corta.replace(/[\s.,;:]+$/, '') + '…';
  }

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h2" className="h5">
          {/* Cada tarea es un enlace a su página de detalle */}
          <Link to={`/tarea/${tarea.id}`} className="stretched-link">
            {tarea.titulo}
          </Link>
        </Card.Title>
        <Card.Text className="flex-grow-1">{corta}</Card.Text>
        <div>
          <EstadoTarea completada={tarea.completada} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Tarea;
