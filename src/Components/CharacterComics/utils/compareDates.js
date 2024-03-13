// Función para comparar las fechas
export const compareDates = (a, b) => {
  // Convertir las fechas a objetos Date
  const dateA = new Date(a.date)
  const dateB = new Date(b.date)

  // Comparar las fechas y devolver el resultado
  return dateA - dateB
}
