### Datos Hardcodeados o Content Collection
*Comentario sin un comment dentro del código*

Documetación: [Coleción de Contenido](https://docs.astro.build/es/guides/content-collections/)

El manejo de los datos en el fichero `Proyect.astro` se puede hacer de distintas maneras. Una de las formas más básicas es mantener los datos "*hardcodeados*" dentro del fichero, sin embargo no es un método escalable y puede resultar engorroso si se quiere añadir más datos, es una opción valida, pero en este contexto será mejor con una **Coleción de Contenido**

El uso de **Coleciones de Contenido** son la mejor manera de administrar y crear contenido en cualquier proyecto. Las coleciones ayudan a organizar los documentos, validar el `frontmatter` y porporcionar una seguridad de tipo automática de TS para todo el contenido

Una Colección de Contenido es un directorio resrvado como `src/content` del proyecto, en este caso el fichero `src/content/proyects/conserjeria.md` cumple como una coleción.
Una **entrada de coleción** es cualquier pieza de contenido dentro de el directorio de coleciones de contenido. Las entradas pueden usar formatos de autoría de contenido que incluyen Markdown, MDX, YAML, JSON

Etonces con una coleción de contenido tenemos:
- Más fácil de mantener
- Añadir metadatos (frontmatter)
- Beneficio del hot-reloading
- Mejor para SEO


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
- **Proyect.astro**: es el componente contenedor (maneja la lógica y datos)
- **ProyectItem.astro**: es el componente presentacional (maneja la UI)
Con esto mejora la organización de código, se puede reutilizar `ProyectItem` en otros lugares y mantiene la separácion clara de responsabilidades

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