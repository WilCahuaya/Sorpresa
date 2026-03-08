# 🚀 Desplegar en GitHub y Vercel

## Paso 1: Crear repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repositorio: `sorpresa-dia-mujer` (o el que prefieras)
3. Descripción: "Sorpresa romántica para el Día de la Mujer"
4. Elige **privado** si no quieres que sea público
5. **No** marques "Add README" (ya tenemos archivos)
6. Clic en **Create repository**

## Paso 2: Subir el código a GitHub

En la terminal, ejecuta (reemplaza `TU_USUARIO` con tu usuario de GitHub):

```bash
cd dia-mujer-app

git remote add origin https://github.com/TU_USUARIO/sorpresa-dia-mujer.git

git branch -M main

git push -u origin main
```

Si GitHub te pide autenticación, usa tu usuario y un **Personal Access Token** (no la contraseña).

## Paso 3: Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Clic en **Add New** → **Project**
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es Next.js
5. Clic en **Deploy**
6. En 1-2 minutos tendrás tu URL pública (ej: `sorpresa-dia-mujer.vercel.app`)

## Paso 4: Código QR

1. Copia la URL de tu sitio en Vercel
2. Genera un código QR en [qr-code-generator.com](https://www.qr-code-generator.com/)
3. Imprime con el mensaje: **"Escanea esto cuando estés sola ❤️"**

---

**Nota:** Si el repositorio es privado, Vercel puede requerir una cuenta Pro para despliegues automáticos. Con repositorio público funciona gratis.
