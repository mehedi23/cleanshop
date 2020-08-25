// header
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
});


// mobile menu bar
$(".plus-icon").parent().click(function () {
    var submenu = $(this).children(".sub-menu");

    if ($(submenu).is(":hidden")) {
        $(submenu).slideDown(400);
    } else {
        $(submenu).slideUp(400);
    }
});


// account password
$(".account-password-btn").click(function(){
    if($(".account-password").first().is(":hidden")){
        $(".account-password").slideDown();
    }else{
        $(".account-password").slideUp();
    }
})

// different address
$(".different-address-btn").click(function(){
    if($(".different-address").first().is(":hidden")){
        $(".different-address").slideDown();
    }else{
        $(".different-address").slideUp();
    }
})

const listBtn = document.getElementById("list-view");
const gridBtn = document.getElementById("grid-view");

const productCard = document.querySelectorAll(".product-cards");
const productImage = document.querySelectorAll(".product-img")
const productCardBody = document.querySelectorAll(".product-card-body");
const productDetails = document.querySelectorAll(".product-ditails");
const productPrice = document.querySelectorAll(".product-name-price");
const productBtn = document.querySelectorAll(".product-btn")


listBtn.addEventListener("click", () => {
    productCard.forEach((n) => {
        n.classList.add("product-cards-list");
    });
    productCardBody.forEach((n) => {
        n.classList.add("product-list");
    });
    productImage.forEach((n) => {
        n.classList.add("product-img-list");
    });
    productDetails.forEach((n) => {
        n.classList.add("product-ditails-list");
    });
    productPrice.forEach((n) => {
        n.classList.add("product-name-price-list");
    });
    productBtn.forEach((n) => {
        n.classList.add("product-btn-list");
    });
});

gridBtn.addEventListener("click", () => {
    productCard.forEach((e) => {
        e.classList.remove("product-cards-list");
    });
    productCardBody.forEach((e) => {
        e.classList.remove("product-list");
    });
    productImage.forEach((n) => {
        n.classList.remove("product-img-list");
    });
    productDetails.forEach((n) => {
        n.classList.remove("product-ditails-list");
    });
    productPrice.forEach((n) => {
        n.classList.remove("product-name-price-list");
    });
    productBtn.forEach((n) => {
        n.classList.remove("product-btn-list");
    });
});












