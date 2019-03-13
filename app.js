const cafeList = document.getElementById('cafe-list')

// create element and render cafe
function renderCafe(doc) {
  let li = document.createElement('li')
  let name = document.createElement('span')
  let city = document.createElement('span')

  li.setAttribute
}

db.collection('cafes').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    renderCafe(doc)
  });
})