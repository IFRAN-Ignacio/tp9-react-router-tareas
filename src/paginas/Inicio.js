import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Tarea from '../componentes/Tarea';

// Página de inicio: lista de tareas + enlace para crear una nueva
function Inicio({ tareas }) {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
        <h1 className="h3 mb-0">Mis tareas</h1>
        <Button as={Link} to="/nueva" variant="primary">
          + Nueva tarea
        </Button>
      </div>

      {tareas.length === 0 ? (
        <p className="text-muted">No hay tareas. ¡Creá la primera!</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-3">
          {tareas.map((t) => (
            <Col key={t.id}>
              <Tarea tarea={t} modo="resumen" />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default Inicio;
