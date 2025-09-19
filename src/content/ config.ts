// C04: Biblioteca de validación de Schema
// C07: Content Collections
// Importar utilidades de `astro:content`
import { defineCollection, z } from "astro:content";

const proyectsCollection  = defineCollection({
    // Definir el esquema de contenido para la colección
    schema: z.object({
        // Definir los campos del esquema
        id: z.number(),
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

// Exportar las colecciones definidas
export const collections = {
  projects: proyectsCollection,
};