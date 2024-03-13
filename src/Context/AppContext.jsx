import React, { createContext, useEffect, useState } from 'react'
import { fetchData } from '../helpers/fetchData'

const AppContext = createContext()

let initialState = {
  data: [],
  resultSearch: [],
  favoritesArray: [],
  oneCharacter: {},
  comics: [],
  viewFavorites: false,
}

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData()
        setState((prevState) => ({
          ...prevState,
          data: response.data.results,
          resultSearch: response.data.results,
        }))
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }

    fetchDataAsync()
  }, [])

  useEffect(() => {
    const myData = JSON.parse(sessionStorage.getItem('favorites'))

    if (myData) {
      const favoritesArray = state.data.filter((character) =>
        myData.includes(character.id),
      )

      setState((prevState) => ({
        ...prevState,
        favoritesArray,
      }))
    }
  }, [state.data])

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
