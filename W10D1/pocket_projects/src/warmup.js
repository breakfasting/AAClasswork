
const partyHeader = document.getElementById('party');
let h1 = document.querySelector('h1');

export const htmlGenerator = (string, htmlElement) => {
  let paragraph = document.createElement('p');
  if (htmlElement.hasChildNodes()) {
    let children = Array.from(htmlElement.children);
    children.forEach(child => child.remove());
  }
  paragraph.innerHTML = string;
  htmlElement.appendChild(paragraph);
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator('I <3 Vanilla DOM manipulation.', h1);