import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

// Se muestra cuando la ruta no existe
function NoEncontrada() {
  return (
    <>
      <h1 className="h3">Página no encontrada</h1>
      <p>La dirección que buscás no existe.</p>
      <Button as={Link} to="/" variant="primary">
        Ir al inicio
      </Button>
    </>
  );
}

export default NoEncontrada;
