// Id Add Using JS

const addHeadingId = document.createElement("div");
addHeadingId.setAttribute("id", "heading-add");
document.body.appendChild(addHeadingId);

const addPragraphId = document.createElement("div");
addPragraphId.setAttribute("id", "text-add");
document.body.appendChild(addPragraphId);

// Heading add using JS
const headingAdd = document.getElementById("heading-add");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");
const h4 = document.createElement("h4");
const h5 = document.createElement("h5");
const h6 = document.createElement("h6");

h1.innerText = " I'm Heading One";
h2.innerText = "I'm Heading Two";
h3.innerText = "I'm Heading Three";
h4.innerText = "I'm Heading Four";
h5.innerText = "I'm Heading Five";
h6.innerText = "I'm Heading Six";


headingAdd.append(h1, h2, h3, h4, h5, h6);
document.getElementById("heading-add");


// Paragraph add using JS

const paragraphAdd = document.getElementById("text-add");
const p = document.createElement("p");
p.innerText = "How to add paragraph in html using javascript";
paragraphAdd.append(p);
document.getElementById("text-add").style.cssText = 'color:green; font-size:50px';

