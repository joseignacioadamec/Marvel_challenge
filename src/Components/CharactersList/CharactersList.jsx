import React, { useContext, useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Search } from '../Search/Search'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import { useFavorite } from '../../Hooks/useFavorite'
import imageFavoriteSelected from '../../assets/Images/image-favorite-selected.svg'
import imageFavoriteUnselected from '../../assets/Images/image-favorite-unselected.svg'
import './charactersList.css'

export const CharactersList = () => {
  const navigate = useNavigate()
  const { state } = useContext(AppContext)
  const [searchText, setSearchText] = useState('')
  const { toggleFavorite } = useFavorite()

  let data
  if (state.viewFavorites) {
    data = state?.resultSearch
  } else {
    data = state?.resultSearch
  }

  // Funcion para redirigir a la vista de un ID en concreto
  const navigateUniqueCharacter = (e, id) => {
    if (id && e.target.className !== 'image-favorite') {
      navigate(`/characterDetails/${id}`)
    }
  }

  return (
    <>
      <Navbar setSearchText={setSearchText} />
      {state.viewFavorites && <p className="text-favorites">FAVORITOS</p>}
      <Search searchText={searchText} setSearchText={setSearchText} />
      <div
        className={
          state.viewFavorites || state.resultSearch.length !== 50
            ? 'container-list-favorites'
            : 'container-list'
        }
      >
        {data?.map((data) => (
          <div
            onClick={(e) => navigateUniqueCharacter(e, data.id)}
            key={data.id}
            className="container-characters"
          >
            <div className="container-img">
              <img
                className="images-characters"
                src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                alt="Imagen de super heroe"
              />
            </div>
            <div className="container-name">
              <div className="container-text-favorite">
                <p className="name-character">{data?.name?.split(' (')[0]}</p>
                <img
                  className="image-favorite"
                  onClick={() => toggleFavorite(data)}
                  src={
                    state.favoritesArray.some((item) => item.id === data.id)
                      ? imageFavoriteSelected
                      : imageFavoriteUnselected
                  }
                  alt="Corazon de favoritos"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
