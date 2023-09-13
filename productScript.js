const keyParam = new URLSearchParams(window.location.search);

const productId = keyParam.get('id');
//$('#ppd').attr("src", "images/berries.jpg");

fetch("data.json")
    .then(response => response.json())
    .then(data => populate_details(data));

function populate_details(data) {
    product = data["product." + productId];
    farm = data["farm.1"];
    console.log(farm);
    //let img = document.getElementById(product.get("id"));
    let image = document.getElementById("ppd");
    image.src = product.img;

    $("<p></p>").text(product.status).appendTo("#status");
    $("<h2></h2>").text(product.name).appendTo("#pTitle");
    $(".unit-price").append(product.price);
    $(".unit-type").append(product.unit);
    $("#origin").append(farm.name);
    $("#owner").append(farm.owner);
    $("#location").append(farm.location);
    $("#farm-name").after($("<p></p>").append($("<i></i>").text(farm.email)));
    $("#farm-name").after($("<p></p>").text(farm.office));
    $("#farm-name").after($("<p></p>").text(farm.phone));
    $("#farm-name").after($("<p></p>").text(farm.street));
    $("#farm-name").after($("<p></p>").text(farm.location));
    $("#farm-name").text(farm.name);
}
function scroll_right() {
    var right = document.querySelector(".similar-products");
    right.scrollBy(350, 0);
}
function scroll_left() {
    var left = document.querySelector(".similar-products");
    left.scrollBy(-350, 0);
}