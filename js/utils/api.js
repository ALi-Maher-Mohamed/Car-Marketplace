var Data = [];

/* =========================
   Fetch Cars From API
========================= */
function getAPI() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dummyjson.com/products/category/vehicle", false);
    xhr.send();

    var res = JSON.parse(xhr.responseText);
    var cars = res.products;

    // favorites from localStorage
    var savedCars = JSON.parse(localStorage.getItem('cars')) || [];

    // init cars
    for (var i = 0; i < cars.length; i++) {
        var saved = savedCars.find(c => c.id === cars[i].id);
        cars[i].isFavorite = saved ? saved.isFavorite : false;
    }

    // duplicate cars (for UI only)
    Data = cars.concat(cars).concat(cars);
}

/* =========================
   Get All Cars
========================= */
function getAllCars() {
    if (Data.length === 0) {
        getAPI();
    }
    return Data;
}

/* =========================
   Toggle Favorite
========================= */
function toggleFavorite(carId, btn) {
    for (var i = 0; i < Data.length; i++) {
        if (Data[i].id == carId) {
            Data[i].isFavorite = !Data[i].isFavorite;
        }
    }

    // save unique cars only
    var uniqueCars = [];
    Data.forEach(car => {
        if (!uniqueCars.find(c => c.id === car.id)) {
            uniqueCars.push({
                id: car.id,
                isFavorite: car.isFavorite
            });
        }
    });

    localStorage.setItem('cars', JSON.stringify(uniqueCars));

    // update UI
    var icon = btn.querySelector('.material-symbols-outlined');
    icon.classList.toggle('text-red-500');
    icon.classList.toggle('text-gray-400');
}
