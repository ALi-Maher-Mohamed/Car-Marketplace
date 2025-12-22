function getAllCars() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dummyjson.com/products/category/vehicle", false);
    xhr.send();
    var res = JSON.parse(xhr.responseText);
    var cars = res.products;
    var dublicateCars = cars.concat(cars).concat(cars);
    return dublicateCars;
}







