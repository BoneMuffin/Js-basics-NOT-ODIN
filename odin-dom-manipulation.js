const container = document.querySelector('#container');
  
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
    paragraph.style.color = 'red';
    paragraph.textContent = 'Red, I am';

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'Blue, I am';

container.appendChild('h3');

const div2 = document.createElement('div');
div2.style.border = 'black';
div2.style.background = 'pink';
