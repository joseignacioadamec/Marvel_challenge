import React, { useContext, useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Search } from '../Search/Search'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import { useFavorite } from '../../Hooks/useFavorite'
import { navigateUniqueCharacter } from './utils/navigateUniqueCharacter'
import imageFavoriteSelected from '../../assets/Images/image-favorite-selected.svg'
import imageFavoriteUnselected from '../../assets/Images/image-favorite-unselected.svg'
import './charactersList.css'

export const CharactersList = () => {
  const navigate = useNavigate()
  const { state } = useContext(AppContext)
  const [searchText, setSearchText] = useState('')
  const { toggleFavorite } = useFavorite()

  return (
    <>
      <Navbar setSearchText={setSearchText} />
      {state.viewFavorites && <p className="text-favorites">FAVORITES</p>}
      <Search searchText={searchText} setSearchText={setSearchText} />
      <div
        className={
          state?.viewFavorites || state?.resultSearch?.length !== 50
            ? 'container-list-favorites container-images-comics'
            : 'container-list'
        }
      >
        {state?.resultSearch?.map((data) => (
          <div
            onClick={(e) => navigateUniqueCharacter(e, data.id, navigate)}
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
