import md5 from 'js-md5'

const marvelApi = 'https://gateway.marvel.com/v1/public/'
const publicKey = 'your public key here'
const privateKey = 'your private key here'

function getMarvelApiQueryString () {
  const ts = new Date().getTime()
  const hash = md5(ts + privateKey + publicKey)
  return `ts=${ts}&apikey=${publicKey}&hash=${hash}`
}

export function getMarvelApiUrl (path, _query) {
  const keys = getMarvelApiQueryString()
  return `${marvelApi}${path}?${keys}`
}

export function getMarvelApiCharacterUrl (id) {
  const keys = getMarvelApiQueryString()
  return `${marvelApi}characters/${id}?${keys}`
}

export function getMarvelCharacter (id) {
  const url = getMarvelApiCharacterUrl(id)

  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.data.results[0]
    })
    .catch(error => console.error(error))
}
