var xhr = new XMLHttpRequest()

xhr.open('get', '../data/index.json')

xhr.onload = function () {
  console.log(xhr.responseText)
}

xhr.send()

// var xhr2 = new XMLHttpRequest()

// xhr2.open('get', '/list')

// xhr2.onload = function () {
//   console.log(JSON.parse(xhr2.responseText))
// }

// xhr2.send()


var xhr2 = new XMLHttpRequest()

xhr2.open('get', '/server/list.php')

xhr2.onload = function () {
  console.log(JSON.parse(xhr2.responseText))
}

xhr2.send()


var xhr3 = new XMLHttpRequest()

xhr3.open('get', '/server/test.php')

xhr3.onload = function () {
  console.log(xhr3.responseText)
}

xhr3.send()
