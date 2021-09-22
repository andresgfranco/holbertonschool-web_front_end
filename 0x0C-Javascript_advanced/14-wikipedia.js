function createElement(data) {
  const paragraphTag = document.createElement('p');

  paragraphTag.textContent = data;

  document.body.appendChild();
}

function queryWikipedia(callback) {
  const request = new XMLHttpRequest();
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'

  request.addEventListener('load', callback);
  request.open('GET', url);
  request.send();
}

queryWikipedia(createElement);