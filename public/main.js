var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash-o");

Array.from(thumbUp).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText.trim()
    const msg = this.parentNode.parentNode.childNodes[3].innerText.trim()
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    console.log(thumbUp)
    fetch('thumbup', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbUp': thumbUp
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});

Array.from(thumbDown).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText.trim()
    const msg = this.parentNode.parentNode.childNodes[3].innerText.trim()
    const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    console.log(thumbDown)
    fetch('thumbdown', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name.trim(),
        'msg': msg.trim(),
        'thumbUp': thumbDown
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});

Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText.trim()
    const msg = this.parentNode.parentNode.childNodes[3].innerText.trim()
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name.trim(),
        'msg': msg.trim()
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
