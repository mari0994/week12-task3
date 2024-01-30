const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

const randomOne = Math.floor(Math.random() * alphabet.length);

const randomTwo = Math.floor(Math.random() * alphabet.length);

const randomThree = Math.floor(Math.random() * alphabet.length);

const randomFour = Math.floor(Math.random() * alphabet.length);

const randomWord = alphabet[randomOne] + alphabet[randomTwo] + alphabet[randomThree] + alphabet[randomFour];

const paragraph = document.getElementById('random-word');
paragraph.textContent = randomWord;