function changeMode(size, weight, transform, background, color) {
  return function () {
    let html = document.querySelector('html');
    let styleStr = 'font-size:' + size + ';';

    styleStr += 'font-weight:' + weight + ';';
    styleStr += 'text-transform:' + transform + ';';
    styleStr += 'background-color:' + background: + ';';
    styleStr += 'color:' + color + ';';

    html.style = styleStr;
  }
}

function main() {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  let welcomePhrase = 'Welcome Holberton!';
  let paragraphTag = document.createElement('p');
  let body = document.querySelector('body');

  let spookyButton = document.createElement('button');
  let darkModeButton = document.createElement('button');
  let screamModeButton = document.createElement('button');

  paragraphTag.textContent = welcomePhrase;
  body.appendChild(paragraphTag);

  spookyButton.onclick = spooky;
  spookyButton.textContent = 'Spooky';

  darkModeButton.onclick = darkMode;
  darkModeButton.textContent = 'Dark mode';

  screamModeButton.onclick = screamMode;
  screamModeButton.textContent = 'Screamm mode';

  body.appendChild(spookyButton);
  body.appendChild(darkModeButton);
  body.appendChild(screamModeButton);
}

main();