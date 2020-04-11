const DOMNodeCollection = require('./dom_node_collection.js');

function $l(arg) {
  if (typeof arg === 'string') {
    const ele = document.querySelectorAll(arg);
    const arr = Array.from(ele);
    return new DOMNodeCollection(arr);
  } else if (arg instanceof HTMLElement ){
    return new DOMNodeCollection([arg]);
  }
}

window.$l = $l;

let pictures = $l(".pictures");
let button = $l(".picture-form button")

button.on("click", e =>{
    e.preventDefault();
    let title = $l("#picture-title").attr("value");
    let url = $l("#picture-url").attr("value");
    let li = $l(document.createElement("li"));
    let img = $l(document.createElement("img"));
    let h2 = $l(document.createElement("h2"));
    img.attr("src", url);
    h2.html(title);
    li.append(img);
    li.append(h2);
})


