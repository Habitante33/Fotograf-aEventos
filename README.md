# Fotografía de Eventos/ Lente vivo

Sitio web estático para un servicio profesional de **fotografía de eventos**. Incluye páginas de inicio, galería, paquetes y contacto, con un diseño moderno, responsivo y optimizado para una experiencia visual premium.



## Estructura del Proyecto

```
Fotograf-aEventos/
│
├── index.html                  # Página principal (Home)
├── .gitignore
├── README.md
│
└── src/
    ├── assets/                 # Recursos estáticos
    │   └── img/                # Imágenes del portafolio y UI
    │       ├── andres.jpg      # Foto del fotógrafo
    │       ├── bautizo.jpg     # Evento: bautizo
    │       ├── bg.jpg          # Imagen de fondo (hero)
    │       ├── boda.jpg        # Evento: boda
    │       ├── concierto.jpg   # Evento: concierto
    │       ├── cumple.jpg      # Evento: cumpleaños
    │       ├── evento.jpg      # Evento genérico
    │       ├── graduacion.jpg  # Evento: graduación
    │       ├── favicon.svg     # Ícono del sitio
    │       └── logo.svg        # Logotipo principal
    │
    ├── components/             # Páginas HTML adicionales
    │   ├── contacto.html       # Página de contacto
    │   ├── galeria.html        # Galería de fotografías
    │   └── paquetes.html       # Paquetes y precios
    │
    ├── css/                    # Hojas de estilo
    │   ├── global.css          # Estilos globales y variables CSS
    │   ├── home.css            # Estilos de la página principal
    │   ├── galeria.css         # Estilos de la galería
    │   ├── paquetes.css        # Estilos de paquetes/precios
    │   └── contacto.css        # Estilos del formulario de contacto
    │
    └── js/                     # Scripts de JavaScript
        └── form.js             # Lógica de validación del formulario de contacto
```

---

## Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica de todas las páginas |
| **CSS3** | Estilos, animaciones y diseño responsivo |
| **JavaScript (Vanilla)** | Validación e interactividad del formulario |
| **SVG** | Logotipo y favicon vectoriales |

---

## Páginas

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Landing page con hero section, servicios destacados y CTA |
| `src/components/galeria.html` | Galería visual de trabajos realizados |
| `src/components/paquetes.html` | Información de paquetes y precios disponibles |
| `src/components/contacto.html` | Formulario de contacto para solicitar servicios |

---

## Sistema de Estilos

- **`global.css`** — Variables de color, tipografía, reset y utilidades compartidas entre todas las páginas.
- Cada página tiene su propio archivo CSS específico para mantener el código modular y fácil de mantener.

---

##  Funcionalidades

-  Diseño responsivo (mobile-first)
-  Galería de fotografías interactiva
-  Sección de paquetes con precios
-  Formulario de contacto con validación en JavaScript
-  Navegación consistente entre páginas
-  Assets vectoriales (SVG) para logo y favicon

---

## link a sitio web

1. Clona el repositorio:
  https://habitante33.github.io/Fotograf-aEventos/

## Convenciones del Proyecto

- Las páginas secundarias viven en `src/components/` para mantener la raíz limpia.
- Cada página enlaza su CSS individual además de `global.css`.
- El JavaScript es mínimo y se limita a la interacción del formulario.

