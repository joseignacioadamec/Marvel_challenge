import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import './characterComics.css'

export const CharacterComics = () => {
  const { state } = useContext(AppContext)
  let dataComics = state?.comics

  let comicsCopy = [...dataComics]

  // Función para comparar las fechas
  const compareDates = (a, b) => {
    // Convertir las fechas a objetos Date
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)

    // Comparar las fechas y devolver el resultado
    return dateA - dateB
  }

  // Ordenar el array comics por fecha
  comicsCopy.sort((a, b) => compareDates(a.dates[0], b.dates[0]))
  console.log(comicsCopy)
  return (
    <div className="container-generic-comics">
      <div className="container-comics">
        <p className="text-comics">COMICS</p>
        <div className="container-images-comics">
          {comicsCopy?.map((comic) => (
            <div key={comic.id}>
              <img
                className="unic-image-comic"
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt="Imagen de super heroe"
              />
              <div className="container-text-date">
                <p className="text-description">{comic.title}</p>
                <p className="date">
                  {new Date(comic.dates[0].date).getFullYear()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
