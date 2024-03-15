const apiKey = import.meta.env.VITE_API_KEY
const apiHash = import.meta.env.VITE_API_HASH

export const fetchDataSearch = async (value, setState, state) => {
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
