$(document ).ready(function(){
  const LOCALHOST = "54.82.179.188";
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 0);
  })

  let menu = document.querySelector('#menu-icon');
  let nav_menu = document.querySelector('.navBar');

  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav_menu.classList.toggle('open');
  }

  const products = document.querySelector('.products');

  let items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.addEventListener('click', (e) => {
        let url = "/orgadirect/product/" + item.id;
        window.location = url;
    })
  })

  let login = document.querySelector('#login');
  let loginUrl = "/orgadirect/login/"
  login.href= loginUrl;
});
