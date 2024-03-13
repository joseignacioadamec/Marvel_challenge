export const showFavorites = (setState, state, setSearchText, navigate) => {
  setState({
    ...state,
    viewFavorites: true,
    resultSearch: state.favoritesArray,
  })
  setSearchText && setSearchText('')
  navigate(`/`)
}
