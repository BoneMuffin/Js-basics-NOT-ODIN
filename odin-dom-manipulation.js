const container = document.querySelector('#container');
  
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content); // takes CONTENT and appends it (as a child) to CONTAINER //

const paragraph = document.createElement('p');
    paragraph.style.color = 'red';
    paragraph.textContent = 'Red, I am';

container.appendChild(paragraph);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'Blue, I am';

container.appendChild(h3);

const div2 = document.createElement('div');
div2.style.border = 'black';
div2.style.background = 'pink';

content.appendChild(div2);

const h1 = document.createElement('h1');
h1.textContent = "I'm a div";

div2.appendChild(h1); // append child h1 to div2 //

const p = document.createElement('p');
p.textContent = 'Me too';

div2.appendChild(p);