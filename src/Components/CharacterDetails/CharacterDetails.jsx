import React, { useContext, useEffect } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'
import { fetchOneCharacter } from '../../helpers/fetchOneCharacter'
import { fetchDataComics } from '../../helpers/fetchDataComics'
import { useFavorite } from '../../Hooks/useFavorite'
import { CharacterComics } from '../CharacterComics/CharacterComics'
import imageFavoriteSelected from '../../assets/Images/image-favorite-selected.svg'
import imageFavoriteUnselected from '../../assets/Images/image-favorite-unselected.svg'
import './characterDetails.css'

export const CharacterDetails = () => {
  const { id } = useParams()
  const { state, setState } = useContext(AppContext)
  let data = state?.oneCharacter
  const { toggleFavorite } = useFavorite()

  useEffect(() => {
    if (id) {
      let resultOneCharacter = fetchOneCharacter(id)
      resultOneCharacter
        .then((response) => {
          setState((prevState) => ({
            ...prevState,
            oneCharacter: response.data.results[0],
          }))
        })
        .catch((error) => {
          console.log('Error fetching data:', error)
        })

      let resultComics = fetchDataComics(id)
      resultComics
        .then((res) => {
          setState((prevState) => ({ ...prevState, comics: res.data.results }))
        })
        .catch((error) => {
          console.log('Error fetching data:', error)
        })
    }
  }, [id, setState])

  return (
    <>
      <Navbar />
      <div>
        <header>
          <div className="container-generic-header">
            <div className="image-character">
              <img
                className="image-one-characters"
                src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
                alt="Imagen de super heroe"
              />
            </div>
            <div className="info-character">
              <div className="character-name-favorite">
                <p className="character-name">{data?.name}</p>
                <img
                  onClick={() => toggleFavorite(data)}
                  src={
                    state.favoritesArray.some((item) => item.id === data.id)

                    // ASI PARA LOCAL
                      // ? imageFavoriteSelected
                      // : imageFavoriteUnselected

                      // ASI PARA PRO
                      ? `.${imageFavoriteSelected}`
                      : `.${imageFavoriteUnselected}`
                  }
                  alt="Corazon de favoritos"
                  className="character-favorite"
                />
              </div>
              <p className="character-description">{data?.description}</p>
            </div>
          </div>
        </header>
        <CharacterComics />
      </div>
    </>
  )
}
