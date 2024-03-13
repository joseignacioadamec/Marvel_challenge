import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import iconSearch from '../../assets/Images/icon-search.svg'
import './search.css'

export const Search = ({ searchText, setSearchText }) => {
  const { state, setState } = useContext(AppContext)
  const [data, setData] = useState([])

  useEffect(() => {
    if (state.viewFavorites) {
      setData(state.favoritesArray)
    } else {
      setData(state.data)
    }
  }, [state])

  const handleChange = (event) => {
    const { value } = event.target
    setSearchText(value)

    // Realizar la búsqueda en tiempo real
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    )
    setState({ ...state, resultSearch: results })
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
            <img src={iconSearch} alt="" />
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
