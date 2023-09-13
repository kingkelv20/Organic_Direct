// JavaScript source code



/*
 * fetch("data.json")
    .then(response => response.json())
    .then(data => setItems(data));
 * Trying to load from json
 * function setItems(data) {
    let products = document.querySelector(".products");
    for (let key in data) {
        if (key.includes("product")) {
            let item = document.createElement("div");
            item.class = "item";

            let image = document.createElement("img");
            image.src = data[key].img;
            item.appendChild(image);

            let status = document.createElement("div");
            status.class = "status";
            let statusp = document.createElement("p");
            let statusTxt = document.createTextNode(data[key].status);
            statusp.appendChild(statusTxt);
            status.appendChild(statusp);
            item.appendChild(status);

            let price = document.createElement("div");
            price.class = "price";
            let name = document.createElement("h4");
            let nametxt = document.createTextNode(data[key].name);
            name.appendChild(nametxt);
            let priceU = document.createElement("p");
            let pricetxt = document.createTextNode("Price : $" + data[key].price + "/" + data[key].unit);
            priceU.appendChild(pricetxt);
            price.appendChild(name);
            price.appendChild(priceU);

            let info = document.createElement("div");
            info.class = "info";
            info.appendChild(price);
            item.appendChild(info);
            products.appendChild(item);
        }
    }
}
*/

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
        let url = "product.html?id=" + item.id;
        window.location = url   ;
    })
})
