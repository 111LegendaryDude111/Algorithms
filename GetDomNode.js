class DOMWrapper {
  constructor(selector) {
    this.nodes = document.querySelectorAll(selector);
  }

  addClass(className) {
    this.nodes.forEach((el) => el.classList.add(className));

    return this;
  }

  toggleClass(className) {
    this.nodes.forEach((el) => {
      const isContain = el.classList.contains(className);
      el.classList.toggle(className, !isContain);
    });

    return this;
  }

  removeClass(className) {
    this.nodes.forEach((el) => el.classList.remove(className));

    return this;
  }
  css(cssObject) {
    this.nodes.forEach((node) => {
      for (const key in cssObject) {
        node.style[key] = cssObject[key];
      }
    });

    return this;
  }

  html(htmlText) {
    this.nodes.forEach((el) => (el.innerHTML = htmlText));

    return this;
  }
}

function $(selector) {
  return new DOMWrapper(selector);
}

const $node = $(".js-node");

$node
  .addClass("node")
  .toggleClass("item")
  .removeClass("node")
  .css({
    color: "red",
    paddingTop: "10px",
  })
  .html("<li>hello</li>");
