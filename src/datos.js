// Archivo de datos: lista inicial de tareas (un simple array de objetos).
// Cada tarea tiene: id, titulo, descripcion, fechaCreacion (ISO) y completada (true/false).
const tareasIniciales = [
  {
    id: 1,
    titulo: 'Instalar React Router',
    descripcion:
      'Agregar la librería react-router-dom al proyecto con npm install y configurar el enrutador en index.js.',
    fechaCreacion: '2026-10-01T09:00:00',
    completada: true,
  },
  {
    id: 2,
    titulo: 'Crear la página de inicio',
    descripcion:
      'Mostrar la lista de tareas con su título y una descripción corta, y un enlace para crear una nueva tarea.',
    fechaCreacion: '2026-10-02T10:30:00',
    completada: true,
  },
  {
    id: 3,
    titulo: 'Crear la página de detalle',
    descripcion:
      'Mostrar la información completa de una tarea: título, descripción, fecha de creación y estado.',
    fechaCreacion: '2026-10-03T15:15:00',
    completada: false,
  },
  {
    id: 4,
    titulo: 'Subir el trabajo a GitHub y a un hosting',
    descripcion:
      'Publicar el código en un repositorio de GitHub y dejar la aplicación funcionando en un hosting gratuito.',
    fechaCreacion: '2026-10-05T18:00:00',
    completada: false,
  },
];

export default tareasIniciales;
