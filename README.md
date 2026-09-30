# Lucía 2025 — sitio web estático

Landing page responsive hecha con HTML, CSS y JavaScript vanilla (sin frameworks ni dependencias de build). Incluye siete destinos, imágenes WebP locales, búsqueda, navegación móvil, detalles en diálogo y botones de consulta por WhatsApp.

## Cómo abrirla localmente

1. Descomprimí `lucia-viajes-web.zip`.
2. Abrí una terminal dentro de la carpeta `lucia-viajes-web`.
3. Ejecutá `python3 -m http.server 8000`.
4. Visitá `http://localhost:8000` en el navegador.

Se recomienda usar un servidor local en vez de abrir `index.html` directamente, para que el módulo JavaScript funcione en todos los navegadores.

## WhatsApp

Los botones preparan un mensaje con el nombre del destino y abren la pantalla para compartir en WhatsApp; allí se elige el chat destinatario. No se configuró un número de empresa porque no se proporcionó uno. Para dirigir las consultas a un negocio, editá `whatsappShareLink()` en `main.js` y agregá el número internacional real en el enlace `https://wa.me/NUMERO?text=...`.

## Archivos

- `index.html`: estructura y contenido.
- `styles.css`: estilos responsive.
- `main.js`: datos de destinos e interacciones.
- `assets/`: hero y siete imágenes locales de destino.
