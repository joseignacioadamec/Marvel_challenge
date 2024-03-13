export const navigateCharacters = (
  setState,
  state,
  setSearchText,
  navigate,
) => {
  setState({ ...state, viewFavorites: false, resultSearch: state.data })
  setSearchText && setSearchText('')
  navigate(`/`)
}
