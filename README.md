# Proyecto: Lista de Metas (Goals List)

Este proyecto es una aplicación web sencilla desarrollada con JavaScript, HTML y CSS, que permite a los usuarios agregar metas (goals) a una lista dinámica. Es ideal para practicar manipulación del DOM y eventos en JavaScript puro, sin frameworks.

## Estructura del Proyecto

- `index.html`: Archivo principal que contiene la estructura HTML de la aplicación.
- `app.js`: Archivo JavaScript donde se implementa la lógica para agregar metas y manipular el DOM.
- `styles.css`: Archivo de estilos para la apariencia visual de la aplicación.

## Funcionalidades

- **Agregar metas**: El usuario puede escribir una meta en el campo de texto y agregarla a la lista presionando el botón "Add Goal".
- **Lista dinámica**: Las metas se muestran en una lista (`<ul>`) que se actualiza dinámicamente cada vez que se agrega una nueva meta.
- **Validación básica**: Se recomienda implementar validación para evitar agregar metas vacías.

## Cómo ejecutar el proyecto

1. Clona o descarga el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador preferido.
3. Escribe una meta en el campo de texto y haz clic en "Add Goal" para agregarla a la lista.

## Mejoras sugeridas

- Permitir eliminar metas de la lista.
- Guardar las metas en el almacenamiento local del navegador (localStorage).
- Agregar estilos más avanzados para mejorar la experiencia de usuario.
- Implementar animaciones al agregar o eliminar metas.

## Estructura del HTML principal

```html
<section id="app">
    <div>
        <label for="goal">Goal</label>
        <input type="text" id="goal" placeholder="Enter your goal here">
        <button>Add Goal</button>
    </div>
    <ul>
        <!-- Goals will be added here dynamically -->
    </ul>
</section>
```

## Lógica básica en JavaScript

- Selección de elementos del DOM.
- Manejo de eventos (click en el botón).
- Creación y agregado de elementos `<li>` a la lista.

## Autor

Este proyecto es parte del curso de JavaScript y manipulación del DOM de @AdaKademy.

---

¡Siéntete libre de modificar y mejorar este proyecto para tus necesidades de aprendizaje!
