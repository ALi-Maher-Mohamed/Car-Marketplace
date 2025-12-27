function getFavoriteCars() {
    var cars = getAllCars();

    var map = {};
    var favorites = [];

    for (var i = 0; i < cars.length; i++) {
        var car = cars[i];

        if (car.isFavorite && !map[car.id]) {
            map[car.id] = true;
            favorites.push(car);
        }
    }

    return favorites;
}


function renderFavorites() {
    var container = document.getElementById('favorites-container');
    container.innerHTML = '';

    var favorites = getFavoriteCars();

    // لو مفيش Favorites
    if (favorites.length === 0) {
        renderEmptyState(container);
        return;
    }

    favorites.forEach(car => {
        container.innerHTML += createCarCard(car);
    });
    
}

function renderEmptyState(container) {
    container.innerHTML = `
        <div class="col-span-full flex flex-col items-center justify-center text-center py-20 bg-white rounded-xl">
            <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <span class="material-symbols-outlined text-gray-400 text-3xl">garage</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Your garage is looking a bit empty</h3>
            <p class="text-gray-500 mb-6 max-w-md">
                Start browsing to find your dream car. Save vehicles you like to compare later.
            </p>
            <a href="/pages/cars_landing/cars.html"
               class="px-6 h-12 bg-primary text-white rounded-xl flex items-center justify-center">
                Browse Inventory
            </a>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    renderFavorites();

    document.getElementById('auth-buttons').appendChild(buildAuthButtons());

    document
        .getElementById('footer-container')
        .appendChild(buildFooter());
});
