/**
 * CONFIGURACIÓN - Edita estos valores para personalizar la sorpresa
 * ================================================================
 */

export const config = {
  // Contraseña para acceder (puede ser una fecha, nombre, palabra especial)
  password: "anita",

  // URL de la foto: coloca tu imagen en public/foto.jpg
  // Si no existe, se usa esta imagen por defecto (flores elegantes)
  photoUrl: "/foto.jpg",
  defaultPhotoUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",

  // Mensajes principales
  messages: {
    welcome: "Hay algo especial que preparé para ti 💐",
    wrongPassword: "Mmm… intenta con algo que tenga significado para nosotros ❤️",
    loading: "Preparando algo con mucho amor…",
    mainTitle: "Feliz Día de la Mujer 💐",
    mainSubtitle:
      "Hoy y siempre quiero recordarte lo valiosa y especial que eres. Te amo.",
    surpriseText:
      "Gracias por existir.\nTu vida es un regalo de Dios.\nY tú eres un regalo en mi vida. Te amo.",
    buttonLabel: "Presiona aquí",
    signature: "Con todo mi amor ❤️",
  },

  // Versículos bíblicos
  verses: {
    first: {
      text: "Engañosa es la gracia y vana la hermosura; la mujer que teme al Señor, esa será alabada.",
      reference: "Proverbios 31:30",
    },
    second: {
      text: "La mujer sabia edifica su casa.",
      reference: "Proverbios 14:1",
    },
  },

  // Carta final (editable)
  finalLetter: `Hoy quería darte este pequeño detalle para recordarte lo especial que eres para mí.
Cada día me siento bendecido de tenerte en mi vida. Que Dios bendiga tu camino y que siempre sigas brillando con la luz que Él ha puesto en ti.

Te amo.`,
};
