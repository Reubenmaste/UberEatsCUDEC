# Mixes Homero (UberEatsCUDEC)

## 1. Título del proyecto

- Mixes Homero — identificador interno `UBEREATSCUDEC`
- Tipo de aplicación: PWA (Progressive Web App)
- **Descripción breve:** Aplicación web progresiva para consultar el catálogo de platillos, registrar nuevos platillos con foto y precio, y gestionar pedidos desde el celular o la computadora.
- **Materia / carrera / alumno:** _[Completar: nombre de la materia, carrera y alumno(s)]_

> **Nota:** el `<title>` y el menú muestran "Mixes Homero", mientras que el `manifest.json` y las meta etiquetas usan el nombre "UBEREATSCUDEC". Vale la pena unificar el nombre antes de la entrega final.

## 2. Descripción del proyecto

La aplicación digitaliza el menú de un negocio de comida (mixes/antojitos), permitiendo a los usuarios ver los platillos disponibles, y a un administrador registrar nuevos platillos (nombre, ingredientes, precio y fotografía tomada desde la cámara del dispositivo). También contempla un módulo de pedidos para que los clientes puedan realizar y dar seguimiento a sus órdenes.

- **Usuarios:** clientes del negocio y administrador(es) que dan de alta los platillos.
- **Propósito:** ofrecer un catálogo accesible, instalable como app (PWA) y con funcionamiento offline básico gracias al service worker.

## 3. Objetivos

**Objetivo general**
Desarrollar una Progressive Web App que permita administrar y consultar el catálogo de platillos de "Mixes Homero", incluyendo registro de pedidos, de forma instalable y con soporte offline.

**Objetivos específicos**
- Implementar un catálogo de platillos consultable desde la pantalla de inicio.
- Permitir el registro de nuevos platillos con nombre, ingredientes, precio y foto capturada con la cámara del dispositivo.
- Integrar una base de datos en la nube (Firebase Firestore) para persistir la información.
- Habilitar instalación como app (manifest + iconos) y caché básico offline (service worker).
- Implementar el módulo de pedidos y las páginas informativas (Acerca, Contacto).

## 4. Características principales

- **Listado de platillos** en la pantalla de inicio (`.recipes`), cargado dinámicamente.
- **Alta de nuevos platillos** mediante un formulario lateral (sidenav "Nuevo platillo") con campos de nombre, ingredientes y precio.
- **Captura de foto del platillo** usando la cámara del dispositivo (elementos `video`/`canvas` y botones "Imagen"/"capturar").
- **Menú de navegación lateral (sidenav)** con acceso a Inicio, Acerca, Pedidos y Contacto.
- **Módulo de Pedidos** (`pages/pedidos.html`).
- **Página "Acerca"** y **página de "Contacto"**.
- **Instalable como PWA**: manifest con iconos en múltiples resoluciones (16×16 a 512×512, incluyendo variantes *maskable*).
- **Soporte offline básico** vía service worker, que cachea `index.html` al instalarse.
- **Persistencia de datos en la nube** mediante Firebase / Firestore.

## 5. Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 / CSS3 | Estructura y estilos base |
| [Materialize CSS/JS](https://materializecss.com/) | Framework de UI (sidenav, botones, inputs) |
| JavaScript (vanilla) | Lógica de la app (`js/index.js`, `js/db.js`) |
| Firebase App SDK v6.0.1 | Inicialización de Firebase |
| Firebase Firestore v6.0.1 | Base de datos en la nube |
| Web App Manifest | Instalabilidad como PWA |
| Service Worker API | Caché offline |
| MediaDevices API (`getUserMedia`) | Captura de foto del platillo desde la cámara |

## 6. Estructura del proyecto

```
/
├── index.html            # Pantalla principal: listado y alta de platillos
├── manifest.json         # Manifest de la PWA (nombre, orientación, iconos)
├── sw.js                 # Service worker (caché offline)
├── readme.md             # Este documento
├── css/
│   ├── materialize.min.css
│   └── styles.css
├── js/
│   ├── materialize.min.js
│   ├── firebase.js       # Configuración/inicialización de Firebase
│   ├── index.js          # Lógica de la pantalla principal
│   └── db.js             # Operaciones contra Firestore
├── img/
│   └── icons/             # Iconos referenciados en manifest.json
└── pages/
    ├── about.html
    ├── pedidos.html
    └── contact.html
```

> Nota: `index.html` referencia los iconos directamente en la raíz (`icon-16x16.png`, etc.), mientras que `manifest.json` los referencia dentro de `img/icons/`. Conviene unificar la ruta para que ambos coincidan.

## 7. Evidencias / capturas de pantalla

_[Agregar capturas de pantalla de:]_
- Inicio
- Registrar platillo
- Realizar pedido (al terminar de hacer el pedido)
- Acerca
- Contacto

## 8. Base de datos

- **Motor utilizado:** Firebase Firestore (base de datos NoSQL en la nube), inicializado mediante el SDK de Firebase v6.0.1 (`js/firebase.js`).
- **Colecciones:** _[Completar según `js/db.js`, por ejemplo: `platillos`, `pedidos`]_

## 9. Licencia

Este proyecto fue desarrollado con fines académicos como parte de la carrera **[Nombre de la carrera]**, para la materia **[Nombre de la materia]**, del **[Grupo]** en **[Nombre de la institución]**.
