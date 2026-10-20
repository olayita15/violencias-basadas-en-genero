# Sesión de estudio · VBG

Este proyecto contiene la **Sesión de estudio — Violencias Basadas en Género (VBG)**. No presenta la metodología: es el material que se expone durante la sesión.

## Estructura

```text
slidev-vbg/
├── slides.md              # Contenido y orden de la presentación
├── style.css              # Identidad visual compartida
├── components/            # Componentes reutilizables, incluido ECharts
├── public/slides/         # Recursos separados por diapositiva
├── package.json           # Comandos y dependencias de Slidev
└── README.md              # Guía del proyecto
```

El ejercicio **Jurado 13** no hace parte de estas diapositivas. Debe prepararse en un proyecto o carpeta independiente cuando estén definidos el caso, las reglas y las evidencias.

Cada carpeta bajo `public/slides/` pertenece a una única diapositiva. Allí se guardan fotografías, fuentes, datos, gráficos o archivos de apoyo de esa diapositiva. El componente de ECharts es compartido porque se reutilizará al incorporar los datos de la introducción.

## Uso

```bash
cd slidev-vbg
npm install
npm run dev
```

Para una versión de producción:

```bash
npm run build
```

Para exportar a PDF (Slidev puede solicitar instalar el navegador necesario la primera vez):

```bash
npm run export
```

## Edición

Todo el contenido de la cátedra se edita en `slides.md`. Los estilos generales viven en `style.css`, y las imágenes en `public/assets/`.
