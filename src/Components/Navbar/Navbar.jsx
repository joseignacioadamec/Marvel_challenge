import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import marvelLogo from '../../assets/Images/marvel-logo.svg'
import imageFavoriteSelected from '../../assets/Images/image-favorite-selected.svg'
import imageFavoriteUnselected from '../../assets/Images/image-favorite-unselected.svg'
import { navigateCharacters } from './utils/navigateCharacters'
import { showFavorites } from './utils/showFavorites'
import './navbar.css'

export const Navbar = ({ setSearchText = null }) => {
  const navigate = useNavigate()
  const { state, setState } = useContext(AppContext)
  let numbersFavorites = state?.favoritesArray?.length
  let resultImage =
    numbersFavorites !== 0 ? imageFavoriteSelected : imageFavoriteUnselected

  return (
    <nav className="navbar-container">
      <div
        onClick={() =>
          navigateCharacters(setState, state, setSearchText, navigate)
        }
        className="logo-marbel"
      >
        <img src={`${marvelLogo}`} alt="" className="image-logo" />
      </div>
      <div className="favorite-navbar">
        <img
          onClick={() =>
            showFavorites(setState, state, setSearchText, navigate)
          }
          // ASI PARA LOCAL
          // src={resultImage}

          // ASI PARA PRO
          src={`.${resultImage}`}
          alt="Imagen Corazón rojo para favoritos"
          className="favorite"
        />
        <p>{numbersFavorites}</p>
      </div>
    </nav>
  )
}
