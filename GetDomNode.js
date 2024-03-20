class $ {
  constructor(selector) {
    this.node = document.querySelector(selector);
  }

  addClass(className) {
    if (!this.node) return;
    console.log(this.node.classList);

    this.node.classList.add(className);

    return this;
  }

  toggleClass(className) {
    if (!this.node) return;
    const isContain = this.node.classList.contains(className);

    console.log(this.node);
    this.node.classList.toggle(className, !isContain);

    return this;
  }

  removeClass(className) {
    if (!this.node) return;

    this.node.classList.remove(className);

    return this;
  }
  css(cssObject) {
    if (!this.node) return;

    this.node.style = cssObject;

    return this;
  }

  html(htmlText) {
    if (!this.node) return;
    this.node.innerHTML = htmlText;

    return this;
  }
}

const $node = new $(".js-node");

$node
  .addClass("node")
  .toggleClass("item")
  .removeClass("node")
  .css({
    color: "red",
    paddingTop: "10px",
  })
  .html("<li>hello</li>");
