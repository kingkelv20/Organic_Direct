
function scroll_right() {
    var right = document.querySelector(".similar-products");
    right.scrollBy(350, 0);
}
function scroll_left() {
    var left = document.querySelector(".similar-products");
    left.scrollBy(-350, 0);
}
let home = document.querySelector('.logo');
  home.onclick = () => {
    let url = "/orgadirect/";
    window.location = url;
}
