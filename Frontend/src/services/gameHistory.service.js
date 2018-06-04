const apiUrl = 'http://localhost:4200/api/gameOfDrones/history'

export const getGameHistory = () => {

  return fetch(apiUrl)
    .then(res => res.json())
    .then((data) => data)
}