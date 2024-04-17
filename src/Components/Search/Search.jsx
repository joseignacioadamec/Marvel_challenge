import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import { fetchDataSearch } from '../../helpers/fetchDataSearch'
import iconSearch from '../../assets/Images/icon-search.svg'
import './search.css'

export const Search = ({ searchText, setSearchText }) => {
  const { state, setState } = useContext(AppContext)

  const handleChange = (event) => {
    const { value } = event.target
    setSearchText(value)
   
    if (value !== '') {
      if (state.viewFavorites) {
        const results = state.favoritesArray.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase()),
        )
        setState({ ...state, resultSearch: results })
      } else {
        fetchDataSearch(value, setState, state)
      }
    } else {
      if (state.viewFavorites) {
        setState({ ...state, resultSearch: state.favoritesArray })
      } else {
        setState({ ...state, resultSearch: state.data })
      }
    }
  }
  return (
    <div
      className={
        state.viewFavorites
          ? 'container-search custom-container-search'
          : 'container-search'
      }
    >
      <form>
        <div className="search-character">
          <div className="icon-search">
            <img src={`.${iconSearch}`} alt="Icono de lupa" />
          </div>
          <input
            className="custom-input"
            type="text"
            placeholder="SEARCH A CHARACTER..."
            value={searchText}
            onChange={handleChange}
          />
        </div>
      </form>
      <p className="text-result">{`${state.resultSearch?.length} RESULTS`}</p>
    </div>
  )
}
