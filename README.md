# MovieTime
Tuve problemas con permisos y restricciones de Bitbucket,
por eso subí el repositorio en GitHub para evidenciar los cambios.

Proyecto web desarrollado con HTML, CSS, JavaScript, Bootstrap y Sass.

MovieTime es una página interactiva de películas donde el usuario puede:

- Visualizar películas destacadas
- Ver información detallada de cada película
- Buscar películas
- Calificar con estrellas 
- Agregar comentarios
- Visualizar una interfaz moderna tipo streaming

--------------------------------------------------

#  Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Sass
- Git y GitHub

--------------------------------------------------

#  Funcionalidades Sass implementadas

##  Variables Sass

Se implementaron variables para:

- colores principales
- colores secundarios
- texto
- fondos
- bordes redondeados

Ejemplo:

$color-principal: #121212;
$color-secundario: #e50914;

--------------------------------------------------

## Anidación de selectores

Se utilizó anidación para organizar mejor los estilos.

Ejemplo:

body {

  .navbar {

    .navbar-brand {

    }

  }

}

--------------------------------------------------

## Interpolación

Se implementaron dos casos de interpolación.

Ejemplo:

.#{$clase}

y:

#{$propiedad}: 20px;

--------------------------------------------------

# Estructura del proyecto

MovieTime
│
├── index.html
├── script.js
│
├── scss
│   └── style.scss
│
├── css
│   └── style.css
│
├── michael.jpg
├── diablo.webp

--------------------------------------------------

# Vista del proyecto

El proyecto cuenta con:

- diseño responsive
- modal interactivo
- sistema de comentarios
- sistema de calificación
- buscador dinámico

--------------------------------------------------

# Autor

Maria Fernanda Arcila Icasa
