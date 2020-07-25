const inputProducts = document.querySelector('#products');
const addProducts = document.querySelector('[data-id="products"');

// const inputOrders = document.querySelector('#orders').style.display = 'none';
// const inputPackage = document.querySelector('#package').style.display = 'none';

// addProducts.style.display = "none";
inputProducts.addEventListener('click', function () {


})




















// kalkulator ceny
function Calculate(products) {
    this.products = products;
    this.price = 1/4;

    this.checkPrice = function () {
        const score = this.products * this.price;
        return score;
    }
}

const test = new Calculate(2,5);
console.log(test.checkPrice());


Calculate.prototype.feel = function() { //prototyp konstruktora //dodanie nowej właściwości
    console.log('Jestem szczęśliwy');
}
test.feel();
// -------------
