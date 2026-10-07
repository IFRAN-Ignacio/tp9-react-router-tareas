import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Página de creación: formulario para crear una nueva tarea
function Crear({ agregarTarea }) {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [completada, setCompletada] = useState(false);
  const [intentoEnvio, setIntentoEnvio] = useState(false);

  const tituloInvalido = intentoEnvio && titulo.trim() === '';
  const descripcionInvalida = intentoEnvio && descripcion.trim() === '';

  function enviar(e) {
    e.preventDefault();
    setIntentoEnvio(true);
    if (titulo.trim() === '' || descripcion.trim() === '') return;

    agregarTarea({ titulo: titulo.trim(), descripcion: descripcion.trim(), completada });
    navigate('/'); // vuelve a la lista, donde ya aparece la nueva tarea
  }

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h1 className="h3 mb-4">Nueva tarea</h1>
        <Form onSubmit={enviar} noValidate>
          <Form.Group className="mb-3" controlId="titulo">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              isInvalid={tituloInvalido}
              placeholder="Ej: Estudiar React Router"
            />
            <Form.Control.Feedback type="invalid">Ingresá un título.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="descripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              isInvalid={descripcionInvalida}
              placeholder="Contá de qué se trata la tarea"
            />
            <Form.Control.Feedback type="invalid">Ingresá una descripción.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" controlId="completada">
            <Form.Check
              type="checkbox"
              label="Tarea completada"
              checked={completada}
              onChange={(e) => setCompletada(e.target.checked)}
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button type="submit" variant="primary">
              Guardar tarea
            </Button>
            <Button as={Link} to="/" variant="outline-secondary">
              Cancelar
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Crear;
