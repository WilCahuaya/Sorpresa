/**
 * CONFIGURACIÓN - Edita estos valores para personalizar la sorpresa
 * ================================================================
 */

export const config = {
  // Contraseña para acceder (puede ser una fecha, nombre, palabra especial)
  password: "anita",

  // URL de la foto (puede ser local: /foto.jpg o externa)
  // Coloca tu imagen en public/foto.jpg o usa una URL externa
  photoUrl: "/foto.jpg",

  // Mensajes principales
  messages: {
    welcome: "Hay algo especial que preparé para ti 💐",
    wrongPassword: "Mmm… intenta con algo que tenga significado para nosotros ❤️",
    loading: "Cargando una pequeña sorpresa…",
    mainTitle: "Feliz Día de la Mujer 💐",
    mainSubtitle:
      "Hoy quiero recordarte lo valiosa y especial que eres.",
    surpriseText:
      "Gracias por existir.\nTu vida es un regalo de Dios.",
    buttonLabel: "Presiona aquí",
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
  finalLetter: `Hoy quería darte este pequeño detalle para recordarte lo especial que eres.
Que Dios bendiga tu vida y que siempre sigas brillando con la luz que Él ha puesto en ti.`,
};
