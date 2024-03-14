import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import iconSearch from '../../assets/Images/icon-search.svg'
import './search.css'

const apiKey = import.meta.env.VITE_API_KEY
const apiHash = import.meta.env.VITE_API_HASH

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

    const fetchDataSearch = async () => {
      try {
        const res = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${value}&ts=1&apikey=${apiKey}&hash=${apiHash}`,
        )
        const data = await res.json()
        setState({ ...state, resultSearch: data.data.results })
        return data
      } catch (error) {
        console.log('Error fetching data:', error)
        return error
      }
    }
    if (value !== '') {
      if (state.viewFavorites) {
        const results = state.favoritesArray.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase()),
        )
        setState({ ...state, resultSearch: results })
      } else {
        fetchDataSearch()
      }
    } else {
      if (state.viewFavorites) {
        setState({ ...state, resultSearch: state.favoritesArray })
      } else {
        setState({ ...state, resultSearch: state.data.results })
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
