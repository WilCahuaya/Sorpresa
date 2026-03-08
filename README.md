# 💐 Sorpresa Día de la Mujer

Una aplicación web romántica y elegante para sorprender en el Día Internacional de la Mujer.

## 🚀 Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📱 Código QR

Imprime un código QR que apunte a la URL de tu aplicación con el mensaje:

**"Escanea esto cuando estés sola ❤️"**

Puedes generar códigos QR gratis en: [qr-code-generator.com](https://www.qr-code-generator.com/)

## ⚙️ Personalización

Edita el archivo `src/config.ts` para personalizar:

| Campo | Descripción |
|-------|-------------|
| `password` | La contraseña para acceder (ej: nombre, fecha especial) |
| `photoUrl` | Ruta a la foto (coloca tu imagen en `public/foto.jpg`) |
| `messages` | Todos los textos de la experiencia |
| `verses` | Los versículos bíblicos |
| `finalLetter` | La carta final personalizada |

## 📸 Agregar tu foto

1. Coloca tu imagen en `public/foto.jpg`
2. O usa una URL externa en `config.photoUrl`

## 🌐 Desplegar

Puedes desplegar gratis en:
- [Vercel](https://vercel.com) (recomendado para Next.js)
- [Netlify](https://netlify.com)

Después de desplegar, genera el código QR con la URL de tu sitio.
