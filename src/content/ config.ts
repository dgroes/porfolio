// C04: Biblioteca de validación de Schema
// C07: Content Collections

// Importar utilidades de `astro:content`
import { defineCollection, z } from "astro:content";

// Colección de proyectos 👷
const proyectsCollection = defineCollection({
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

// Colección de de experiencias laborales 💼
const experiencesCollection = defineCollection({
    schema: z.object({
        id: z.number(),
        company: z.array(z.string()),
        position: z.string(),
        status: z.number(),
        webPage: z.string().url(),
        starDate: z.string(),
        endDate: z.string().optional(),
        duties: z.array(z.string()),
        responsibilities: z.array(z.string()),
        toolsIcons: z.array(
            z.object({
                src: z.string(),
                alt: z.string(),
            })
        ),

    })
});

// Colección de lenguajes y heramientas(que manejo) 🛠️
const technologiesCollection = defineCollection({
  type: 'content', // ¡Esto es importante!
  schema: z.object({
    name: z.string(),
    icons: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
      })
    ),
  })
});

// Exportar las colecciones definidas
export const collections = {
    projects: proyectsCollection,
    experiences: experiencesCollection,
    technologies: technologiesCollection,
};