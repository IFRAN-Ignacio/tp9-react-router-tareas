# TPN°9 React - Manejo de rutas

**Aplicación publicada:** https://ifran-ignacio.github.io/tp9-react-router-tareas/

## Enunciado

En React, el enrutamiento se utiliza para permitir la navegación dentro de una aplicación web de una sola página
(SPA, por sus siglas en inglés) sin necesidad de recargar la página completa.

Esto se logra mediante el uso de un enrutador de React, que maneja el cambio de la URL del navegador y muestra el
componente correspondiente para la ruta actual.

https://johnserrano.co/blog/aprende-a-crear-rutas-con-react-router

En este trabajo práctico, hacer una aplicación de **lista de tareas** utilizando React y el manejo de rutas con
React Router. La aplicación tendrá una página de inicio que muestra una lista de tareas, una página de detalle para
cada tarea y una página de creación de nuevas tareas.

### Requerimientos

La aplicación debe tener tres páginas:

- Página de inicio: muestra una lista de tareas y un enlace para crear una nueva tarea.
- Página de detalle: muestra la información completa de una tarea.
- Página de creación: muestra un formulario para crear una nueva tarea.

Debe utilizar el enrutador de React Router para manejar la navegación entre las páginas.
La aplicación debe utilizar el estado de React para almacenar la lista de tareas y la información de cada tarea.

**La página de inicio** debe mostrar una lista de tareas, con su título y una descripción corta. Cada tarea debe ser
un enlace que lleva a su página de detalle correspondiente.
**La página de detalle** debe mostrar la información completa de una tarea, incluyendo su título, descripción, fecha
de creación y estado (completa o incompleta).
**La página de creación** debe tener un formulario que permita al usuario ingresar un título, una descripción y
marcar la tarea como completa o incompleta.
Al enviar el formulario, la tarea debe agregarse a la lista de tareas.
La aplicación debe ser responsive y debe tener un diseño atractivo. (utilizar framework)

**Pasos sugeridos:**

- Crear una nueva aplicación de React utilizando Create React App.
- Instalar React Router y las dependencias necesarias.
- Crear un archivo de datos para almacenar la lista de tareas y su información. Este archivo puede ser un simple
  array de objetos.
- Crear la página de inicio y la página de detalle, utilizando React Router para manejar la navegación entre ellas.
- Crear el componente de tarea que se utilizará en la página de inicio y en la de detalle.
- Crear la página de creación y el formulario correspondiente.
- Añadir estilos y asegurarse de que la aplicación sea responsive.

### Entrega

- Presentar link de GitHub en donde esté el código y también un link de hosteo del mismo.

## Solución

| Ruta | Página | Qué hace |
|---|---|---|
| `/` | `src/paginas/Inicio.js` | Lista de tareas (título + descripción corta). Cada tarea es un enlace a su detalle. Botón "Nueva tarea". |
| `/tarea/:id` | `src/paginas/Detalle.js` | Muestra título, descripción, fecha de creación y estado (completa / incompleta). |
| `/nueva` | `src/paginas/Crear.js` | Formulario con título, descripción y casilla "completada". Al guardar, la tarea se agrega a la lista. |
| cualquier otra | `src/paginas/NoEncontrada.js` | Mensaje de página no encontrada. |

- **React Router (v6):** `HashRouter` en `src/index.js`, y `Routes` / `Route` / `Link` / `NavLink` / `useParams` /
  `useNavigate` para la navegación. Se usa `HashRouter` (las rutas quedan como `/#/nueva`) para que funcione en
  GitHub Pages, que no puede redirigir rutas de una SPA, incluso al recargar la página.
- **Estado de React:** `src/App.js` guarda la lista de tareas con `useState` y la reparte a las páginas; la función
  `agregarTarea` crea un nuevo arreglo con la tarea nueva (id nuevo y fecha de creación automática).
- **Archivo de datos:** `src/datos.js` es un array de objetos con las tareas iniciales.
- **Componente de tarea:** `src/componentes/Tarea.js` se usa en la página de inicio (modo `resumen`) y en la de
  detalle (modo `detalle`).
- **Framework de interfaz y responsive:** [React Bootstrap](https://react-bootstrap.github.io/) (`Navbar`, `Card`,
  `Row`/`Col`, `Form`, `Button`, `Badge`). La lista pasa de 1 a 2 y 3 columnas según el ancho de pantalla, y el menú
  se pliega en el celular.
- **Formulario:** valida que el título y la descripción no estén vacíos antes de guardar.

## Hosting: GitHub Pages

Se publica automáticamente con `.github/workflows/deploy.yml` en cada cambio de la rama `main`
(`npm ci` → `npm run build` → publica la carpeta `build`). Como el sitio queda en una subcarpeta, el build se hace con
`PUBLIC_URL=/tp9-react-router-tareas`. En el repositorio: **Settings → Pages → Source: GitHub Actions**.

## Cómo ejecutarlo en la computadora

```bash
npm install
npm start
```

Se abre en http://localhost:3000
