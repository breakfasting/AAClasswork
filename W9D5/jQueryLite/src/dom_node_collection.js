class DOMNodeCollection {
  constructor(arr) {
    this.arr = arr;
  }

  html(str) {
    if (str !== undefined) {
      this.arr.forEach((el) => {
        el.innerHTML = str;
      });
    } else {
      return this.arr[0].innerHTML;
    }
  }

  empty() {
    this.arr.forEach((el) => {
      $l(el).html("");
    });
  }

  append(arg) {
    //<p>1231</p>
    let outer = [];
    arg.arr.forEach((el) => {
      outer.push(el.outerHTML);
    });
    this.arr.forEach((el) => {
      //<div><p>1231</p></div>
      el.innerHTML += outer.join("");
    });
  }

  attr(attrName, value) {
    if (value === undefined) {
      return this.arr[0].getAttribute(attrName);
    } else {
      this.arr[0].setAttribute(attrName, value);
    }
  }

  addClass(classStr) {
    this.arr.forEach((el) => {
      el.className += classStr;
    });
  }

  removeClass(classStr) {
    if (classStr === undefined) {
      this.arr.forEach((el) => {
        el.className = "";
      });
    } else {
      let classArr = classStr.split(" ");

      this.arr.forEach((el) => {
        for (let classStr of classArr) {
          el.classList.remove(classStr);
        }
      });
    }
  }

  children() {
    let allChildren = [];
    this.arr.forEach((el) => {
      allChildren.push(...Array.from(el.children));
    });
    return new DOMNodeCollection(allChildren);
  }

  parent() {
    let parent = [];
    this.arr.forEach((el) => {
      parent.push(el.parentNode);
    });
    return new DOMNodeCollection(parent);
  }

  find(arg) {
    let output = [];
    this.arr.forEach((el) => {
      let match = Array.from(el.querySelectorAll(arg));
      output.push(...match);
    });
    return new DOMNodeCollection(output);
  }

  remove() {
    this.arr.forEach((el) => {
      el.remove();
    });
  }

  on(method, handler) {
    this.arr.forEach((el) => {
      el.addEventListener(method, handler);
    });
  }

  off(method, handler) {
    this.arr.forEach((el) => {
      el.removeEventListener(method, handler);
    });
  }
}

module.exports = DOMNodeCollection;
