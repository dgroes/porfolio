## Datos Hardcodeados o Content Collection
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
s
## C01: Esquemas de colores soportables
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
## C02: Margin Block lh
El uso de `margin-block: 1lh` en un elemento `<p>` es una técnica moderna y considerada una buena práctica.
Las ventajas de utilizarlas son:
- relación con el line-height: `1lh` equivale al valor actual de `line-height` del elemento, lo que mantiene la porporción tipográfica.
- Responsive por diseño: se adapta automáticamente si se cambia el tamañao de fuente o interlineado.
- Coherencia vertical: Crea un espacio relacionado con la rejilla tipogŕafica 
## C03: Componente Contenedor
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
## C04: Biblioteca de validación de Schema
`z` Es el objeto principal de la biblioteca `Zod`, una librería de validación de esquemas para TS que Astro integra directamente en `astro:content`.
Esta librería se utiliza para validar esquemás de datos con TS, en Astro se utiliza para:
- Validar el forntmatter de los archivos `.md`
- Generar tipo automáticos para las colecciones
- Asegurar que los datos cumplan ciertas reglas.
- TS First: Genera tipos automáticamente.
- Validación en tiempo de compilación: Si un .`md` no cumple el esquema, Astro muestra un error.
- Seguridad: Previenen datos malformados.

Entonces Zod es una herramienta para trabajar con datos en TS y Astro lo integra de forma nativa para las coleciones de contenido.
## C05: Clase de Tailwind personalizada
`@apply` es una directiva de Tailwind CSS que permite aplicar clases de utilidad a un selector CSS personalizado. Esto es útil para crear estilos reutilizables y mantener el código limpio.
- Permite combinar múltiples clases de utilidad en una sola regla CSS.
- Se utiliza dentro de un bloque CSS normal, lo que permite crear estilos personalizados.
- Ayuda a evitar la repetición de clases en el HTML.

Dentro de `global.css` está la clase `.transition-smooth`, creada para aplicar ahora dentro y junto a las otras clases de Tailwind, como se puede ver en los enlaces del `header` y `footer` o en el `Badge`
## C06: Separación de código
Para no mantener el fichero `index` saturado de código lo mejor y buena practica será separar cada bloque de cada sección en componentes o en partials y luego importarlos en la `index.astro`.
La organización sería así:
```js
src/
 ├─ components/
 │   ├─ SectionContainer.astro
 │   ├─ Badge.astro
 │   ├─ Footer.astro
 │   ├─ icons/
 │   │   ├─ ProyectIcon.astro
 │   │   └─ AboutIcon.astro
 │   └─ sections/
 │       ├─ Hero.astro        ← presentacion de perfil
 │       ├─ Projects.astro    ← proyectos
 │       ├─ About.astro       ← sobre mí
 │       └─ Contact.astro     ← contacto
 └─ pages/
     └─ index.astro
```
Entonces, para la presentación del perfil se crea el fichero: `Hero.astro`. y de igual forma con las otras secciones principales. Quedano un `index`mucho más limpio y manteniendo la lógica separada:
```astro
<!-- src\pages\index.astro -->
<main>
    <Hero />
    <Projects />
    <About />
</main>
```
s
## C07: Content Collections
Como se menciona el uso de los datos de *Content Collections* en el primer comentario, no hace falta explicar mucho de su proposito.
Entonces está la ruta: `src\content\projects`. Dentro de la ruta está la `data` a utilizar dentro de `sections\Projects.astro`. Para ello sigue un formato especifico. De momento están datos importantes como `title`, `id`, `description`, `images`, `tools`, etc. Puede que a medida que se avance puedan cambiar algunas cosas. Pero ya teniento dicha estructura y con la ayuda del fichero: `src\content\ config.ts`. Gracias a la ayuda de dicho fichero se puede:
- **Declarar las colecciones**: Ejemplo: `projects`, `blog`, `notes`, etc. Para luego hacer su uso en un fichero `.astro`.
- **Definir un esquema con Zod**: Garantiza que todos los ficheros `.md`, `.mdx` o `.json` dentro de esa colección tengan los mismo campos y tipos.
- **Valida en tiempo de build**: Si un dato está mal escrito (ej: Un campo obligatorio falta o un número está en lugar de un string) Astro avisa antes de compilar.
- **Facilita el autocompletado**: VSCode da el tipado en `project.data.titulo`, `project.data.descripcion`, etc.
En este caso ayuda a la consistencia en todos los proyectos, evitando errores como un campo faltante, además de autocompletado y validaciones de tipo con TypeScript y la posibilidad de ordenar y filtar la colección fácilmente con `getCollection("projects")`.
## C08: Corrección de tipos
TS corre siempre en runtime, pero aun asi TypeScript avisa de los errores en los tipados dentro de VSCode.
Actualmente `src\components\sections\Projects.astro` Funciona sin problemas, pero no estaría mal dejar los tipos de datos de manera explicita haciendo:
- Que VSCode proporcione un autocompletado de ayuda
- Evitar errores
- Hacer el código más mantenible
Entonces actualmente `config.ts` está así:
```ts
const proyectsCollection  = defineCollection({
    // Definir el esquema de contenido para la colección
    schema: z.object({
        // Definir los campos del esquema
        title: z.string(),
        description: z.string(),
        functionality: z.array(z.string()),
        images: z.array(
            z.object({
                src: z.string(),
                alt: z.string().optional().default("Captura del proyecto")
            })
        ).min(1).max(3), // Entre 1 y 3 imágenes
        languages: z.array(z.string()),
        github: z.string(),

    }),
});
```
Aquí funciona todo, pero como se mencionó, lo ideal sería añadir explicitamente el tipado de datos que se manejará.
```ts
const projectsCollection = defineCollection({
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    functionality: z.array(z.string()),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string().optional().default("Captura del proyecto"),
      })
    ).min(1).max(3),
    languages: z.array(z.string()),
    github: z.string().url(),
  }),
});
```
Aquí no cambia mucho, previamente ya estaban los datos básicos a usar con el tipado, pero ahora se añade `id`, mostrando que no mejor sería contemplar todos los datos.
## C09: Mostrar la colección
Ahora ya teniendo definino la colección de datos se podrá mostrar dentro de `sections\Projects.astro`.
### 1. getCollection
```ts
import { getCollection, type CollectionEntry } from "astro:content";
```
- Aquí `getCollection("projects")` es una función de Astro que busca dentro de la carpeta `src/content/projects` todos los ficheros de contenido (`.md`, `.mdx`. `.json`) que pertenezcan a esa colección.
- El nombrre `"projects"` viene de lo se definió dentro de `src/content/config.ts`. Al final del código se declara la exportación con dicho nombre, ahora aquí se hace su llamado.
### 2. CollectionEntry<"Projects">
```ts
type Project = CollectionEntry<"projects">;
```
- `CollectionEntry` es un tipo de Astro que representa un fichero individual de una colección.
- `CollectionEntry<"projects">` sería un llado así: "Dame el tipo de datos de un archivo dentro de `projects` según lo definido en `config.ts`"
Con esto, en `config.ts` se dice que cada `project` tiene un `title:string`, cuando se accese a `project.data.title`, TypeScript ya sabe que es un string (aplicando tipado explicito como se mencionó en C08).
### 3. Obtención y ordenar proyectos
```ts
const projects: Project[] = (await getCollection("projects")).sort(
  (a: Project, b: Project) => a.data.id - b.data.id
);
```
- `await getCollection("projects")` devuelve un array de entradas de tipo `Project[]`.
- Cada objeto `Project` tiene:
    - `slug`: generado a partir del nombre del fichero
    - `id`: lo que se definió en el frontmatter
    - `data`: todos los campos definidos en `config.ts`
Entonces si en `src/content/projects/citas-medicas.md` si está esto:
```js
---
id: 1
title: "Sistema de Citas Médicas"
description: "Un sistema para gestionar citas entre pacientes y doctores."
functionality:
  - "Agendar citas"
  - "Cancelar citas"
  - "Filtrar por especialidad"
images:
  - src: "/images/citas1.png"
    alt: "Pantalla principal"
  - src: "/images/citas2.png"
    alt: "Calendario"
github: "https://github.com/tuusuario/citas-medicas"
---
```
Cuando se hace el `getCollection("projects")`, ese `.md` se convierte en algo similar a esto:
```js
{
  slug: "citas-medicas",
  data: {
    id: 1,
    title: "Sistema de Citas Médicas",
    description: "Un sistema para gestionar citas entre pacientes y doctores.",
    functionality: ["Agendar citas", "Cancelar citas", "Filtrar por especialidad"],
    images: [
      { src: "/images/citas1.png", alt: "Pantalla principal" },
      { src: "/images/citas2.png", alt: "Calendario" }
    ],
    github: "https://github.com/tuusuario/citas-medicas"
  }
}
```
Gracias a esto se puede acceder con seguridad a `project.data.title`, `project.data.images`, etc. 
El `.sort(...)` lo que hace es ordenar los proyectos según su `id`. Se puede descendent o ascendente. De manera descendente sería: `a.data.id - b.data.id`.
### 4. Renderizado dentro de Astro
Luego al hacer esto:
```js
projects.map((project: Project) => (
  <article>
    <h1>{project.data.title}</h1>
    <p>{project.data.description}</p>
  </article>
))
```
Lo que se hace es un recorrido de todos los proyectos y renderizando la info en el DOM. Astro a este punto ya está consiente del tipado exacto de cada campo gracias al esquema de `config.ts`.
## C11:
## C12:
## C13:
## C14:
## C15:
## C16: