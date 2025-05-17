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