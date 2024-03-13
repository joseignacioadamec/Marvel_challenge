// Funcion para redirigir a la vista de un ID en concreto
export const navigateUniqueCharacter = (e, id, navigate) => {
  if (id && e.target.className !== 'image-favorite') {
    navigate(`/characterDetails/${id}`)
  }
}
