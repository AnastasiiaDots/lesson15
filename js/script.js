'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.render = function () {
    let elem;
    if (this.selector.startsWith('.')) {
        elem = document.createElement('div');
        elem.classList.add(this.selector.slice(1));
    } else if (this.selector.startsWith('#')) {
        elem = document.createElement('p');
        elem.setAttribute('id', this.selector.slice(1));
    } else {
        elem = document.createElement('div');
    }

    elem.style.cssText = `
      height: ${this.height};
      width: ${this.width};
      background-color: ${this.bg};
      font-size: ${this.fontSize};
    `;

    elem.textContent = 'Hi, mate!';

    document.body.appendChild(elem);
    return elem;
};

const myElement = new DomElement('#greet', '100px', '200px', 'turquoise', '30px');
const createdElement = myElement.render();
console.log(createdElement);

