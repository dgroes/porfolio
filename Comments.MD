### C01: Esquemas de colores soportables
La propiedad `color-sheme` es una característica de CSS, con ella se le indica al navegador qué esquemas de color soporta el sitio, haciendo una mejor integración con las preferencias del sistema operativo.

#### Qué hace?
- Comunica al navegador que el sitio está preparado para trabajar en modo claro y oscuro
- Activa los colores nativos del sistema para elementos de la interfaz: 
    - barras de scroll
    - inputs, formularios
    - Text selections
    - botones del sistema

#### Es útil
Es una propiedad útil, ya que los elementos nativos del navegador se adaptarán al modo claro/oscuro automáticamente, mejorando el rendimiento al aplicar los estilos nativos más efeicientemente

### C02: Margin Block lh
El uso de `margin-block: 1lh` en un elemento `<p>` es una técnica moderna y considerada una buena práctica.
Las ventajas de utilizarlas son:
- relación con el line-height: `1lh` equivale al valor actual de `line-height` del elemento, lo que mantiene la porporción tipográfica.
- Responsive por diseño: se adapta automáticamente si se cambia el tamañao de fuente o interlineado.
- Coherencia vertical: Crea un espacio relacionado con la rejilla tipogŕafica 

### C03: Componente Contenedor
Para poder manejar de mejor manera los proyecto se decide utilizar un "componente contenedor".

#### `ProyectItem.astro`: 
Es un componente de presentación (`presentational component`):
- Su fucnión es recibir los props (title, description, functionality, etc)
- Renderiza el contenido de forma visual, sin preocuparse por la lógica de dónde vienen los datos
- solo se enfoca en cómo se ve cada proyecto

#### `Proyect.astro`
Componente Container (`Container Component`)
- Gestiona la data (`PROYECT` array)
- Hace el `.map()` sobre los proyectos y renderiza cada uno con `<ProyectItem />`
- Es responsable de la lógica de renderizado de la lista
Con este patrón se separa la lógica (data y blucles) de la presentación (diseño visual). Es más limpio, escalable y típico en frameworks modernos

#### `Index.astro`
Componente Page (`Page Component`)
- Es la página principal del sitio
- Importa el `Proyect.astro`, que ya maneja todo lo relacionado a mostrar los proyectos.
- puede contener otros bloques de contenido

#### Ventajas
Con separar la lógica con componentes contenedor se obtiene lo siguiente:
- Separación de responsabilidades: Cada componente tiene una única tarea.
- Reutilización: se puede usar `ProyecItem` en otros contexto sin reescribirlo.
s