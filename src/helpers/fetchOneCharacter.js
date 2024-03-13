export const fetchOneCharacter = async (id) => {
  const apiKey = import.meta.env.VITE_API_KEY
  const apiHash = import.meta.env.VITE_API_HASH

  try {
    const res = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${apiKey}&hash=${apiHash}`,
    )
    const data = await res.json()
    return data
  } catch (error) {
    console.log('Error fetching data:', error)
    return error
  }
}
