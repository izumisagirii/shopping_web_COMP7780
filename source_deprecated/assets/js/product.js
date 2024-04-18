
/*===============REACT TO PRODUCT================*/
var product_name = decodeURI(document.URL)
product_name = product_name.slice(product_name.indexOf("=") + 1)
const productName = document.getElementById('product__name')
const productPrice = document.getElementById('product__price')
const productDisc = document.getElementById('product__disc')
const productPic = document.getElementById('product__pic')
$.getJSON("assets/json/products.json", function (data) {
    for (product in data.products) {
        // console.log(data.products[product])
        if (data.products[product].name == product_name) {
            productName.textContent = data.products[product].fullname
            productPrice.textContent = "Price: " + data.products[product].price + " HKD"
            productDisc.textContent = data.products[product].disc
            productPic.setAttribute("src", "assets/img/" + data.products[product].picture)
        }
    }

});

