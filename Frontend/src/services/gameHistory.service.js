const apiUrl = 'http://localhost:4200/api/gameOfDrones/history'

export const getGameHistory = () => {

  return fetch(apiUrl)
    .then(res => res.json())
    .then((data) => data)
}

export const saveGame = (game) => {
  fetch(apiUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(game)
  }).then((res) => res.json).then((res) => console.log(res)) 
}