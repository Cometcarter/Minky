let displayCards;
let currentCard = 0;
let left = document.querySelector('.fa-arrow-left').addEventListener('click', goLeft)
let right = document.querySelector('.fa-arrow-right').addEventListener('click', goRight)
let front = document.querySelector('.container-front')
let back = document.querySelector('.container-back')


fetch('/getCardFromDB', {
  //recieves the card send form routes
  method: 'get',
  headers: { 'Content-Type': 'application/json' },
})
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
    displayCards = data
    loadCards()
  })

function loadCards() {
  front.innerText = displayCards[currentCard].front
  back.innerText = displayCards[currentCard].back
}

function goLeft() {
  if (currentCard > 0) {
    currentCard -= 1
  } loadCards()
}
function goRight() {
  if (currentCard < displayCards.length) {
    currentCard += 1
  }
  loadCards()
}

function editCards() {
  front.innerText = prompt('Enter New Front Card Text')
  back.innerText = prompt('Enter New Back Card Text')
}

function saveCardtoDB() {
  fetch('/edit', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      '_id': displayCards[currentCard]._id,
      'front': front.innerText,
      'back': back.innerText
    })
  }).then(function (response) {
    window.location.reload()
  })
}

function deleteForever() {
  fetch('/delete', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      '_id': displayCards[currentCard]._id
    })
  }).then(function (response) {
    window.location.reload()
  })
}


// Array.from(edit).forEach(function (element) {
// element.addEventListener('click', function () {
//   // const name = this.parentNode.parentNode.childNodes[1].innerText.trim()
//   // const msg = this.parentNode.parentNode.childNodes[3].innerText.trim()
//   // const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//   console.log(thumbUp)
//   fetch('/getCardFromDB', {
//     method: 'put',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       'name': name,
//       'msg': msg,
//       'thumbUp': thumbUp
//     })
//   })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
// });
// });

// Array.from(trash).forEach(function (element) {
//   element.addEventListener('click', function () {
//     fetch('messages', {
//       method: 'delete',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         'name': name.trim(),
//         'msg': msg.trim()
//       })
//     }).then(function (response) {
//       window.location.reload()
//     })
//   });
// });

