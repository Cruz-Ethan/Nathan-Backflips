import { images } from './data.js';

const container = document.querySelector('.js-container');

let index = 0;
const length = images.length;

setInterval(() => {
    container.innerHTML = parseImage(images[index]);
    index++;
    index %= length;
}, 100);

function parseImage(data) {
    let image = '';
    const lineLength = 143;

    while(data) {
        image += '<p>' + data.substring(0, lineLength) + '</p>';
        data = data.substring(lineLength);
    }

    return image;
}