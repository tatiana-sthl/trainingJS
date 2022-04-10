const container = document.querySelector("#container");

/* Create a red paragraphe in div-container */
const p = document.createElement("p");
p.style.color = 'red';
p.textContent = "Hey I'm red!";
container.appendChild(p);

/* Create an h3 in div-container */
const h3 = document.createElement("h3");
h3.style.color = 'blue';
h3.textContent = "I’m a blue h3!";
container.appendChild(h3);

/* Create a div-display in div-container */
const display = document.createElement("div");
display.style.backgroundColor = 'pink';
display.style.border = '3px solid black';

/* Create an h1 in div-display */
const h1 = document.createElement("h1");
h1.textContent = "I’m in a div.";
display.appendChild(h1);

/* Create a p in div-display */
const p2 = document.createElement("p2");
p2.textContent = "ME TOO!";
display.appendChild(p2);

container.appendChild(display);
