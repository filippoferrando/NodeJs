var faker = require('faker');



for (var i=0; i < 10; i++) {
    var randomProducts = faker.commerce.productName();
    var randomProductsPrice = faker.commerce.price();

    console.log(randomProducts + " - €" + randomProductsPrice);
    console.log(i);

}
