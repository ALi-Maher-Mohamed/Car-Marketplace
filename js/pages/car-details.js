
var dealer = {
    name: 'AutoNation West',
    location: 'San Francisco, CA',
    memberSince: '2018',
    mapEmbed: 'https://www.google.com/maps?q=San+Francisco&output=embed'
};


function getCarIdFromUrl() {
    var params = new URLSearchParams(window.location.search);
    return params.get('id');
}


function getCarById(id) {
    var cars = getAllCars();
    for (var i = 0; i < cars.length; i++) {
        if (cars[i].id == id) {
            return cars[i];
        }
    }
    return null;
}

function buildDealerCard(dealer) {
    var card = el('div', 'bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 space-y-4');

    // Header
    var header = el('div', 'flex items-center gap-4');
    var avatar = el('div', 'w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center');
    avatar.appendChild(icon('person', 'text-primary'));

    var info = el('div');
    info.appendChild(el('h4', 'font-bold', {}, dealer.name));
    info.appendChild(el('p', 'text-sm text-gray-500 flex items-center gap-1', {}, '📍 ' + dealer.location));

    header.appendChild(avatar);
    header.appendChild(info);

    // Member + chat
    var actions = el('div', 'flex items-center justify-between text-sm');
    actions.appendChild(el('span', 'text-gray-400', {}, 'Member since ' + dealer.memberSince));

    var chatBtn = el('button', 'text-primary font-semibold hover:underline flex items-center gap-1');
    chatBtn.appendChild(icon('chat', 'text-base'));
    chatBtn.appendChild(el('span', '', {}, 'Chat with Dealer'));

    actions.appendChild(chatBtn);

    // Map
    var mapWrapper = el('div', 'rounded-lg overflow-hidden h-40');
    var map = document.createElement('iframe');
    map.src = dealer.mapEmbed;
    map.className = 'w-full h-full border-0';
    map.loading = 'lazy';

    mapWrapper.appendChild(map);

    card.appendChild(header);
    card.appendChild(actions);
    card.appendChild(mapWrapper);

    return card;
}


function renderCarDetails(car) {
    var container = document.getElementById('car-details');
    container.innerHTML = '';

    if (!car) {
        container.innerHTML = '<div class="col-span-full text-center py-20"><span class="material-symbols-outlined text-6xl text-gray-300">error</span><p class="mt-4 text-gray-500">Car not found</p><a href="/pages/cars_landing/cars.html" class="mt-4 inline-block text-primary hover:underline">Back to Cars</a></div>';
        return;
    }


    document.getElementById('breadcrumb-title').textContent = car.title;
    document.title = car.title + ' - AutoMarket';


    var imageSection = el('div', 'space-y-4');


    var mainImageWrapper = el('div', 'relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800');
    var mainImage = el('img', 'w-full h-[400px] object-cover', {
        src: car.images && car.images.length > 0 ? car.images[1] : 'https://via.placeholder.com/400x300?text=No+Image',
        alt: car.title,
        id: 'main-image'
    });
    mainImageWrapper.appendChild(mainImage);
    imageSection.appendChild(mainImageWrapper);


    if (car.images && car.images.length > 1) {
        var gallery = el('div', 'grid grid-cols-4 gap-3');
        for (var i = 0; i < car.images.length && i < 4; i++) {
            var thumb = el('div', 'relative rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary transition-colors');
            var thumbImg = el('img', 'w-full h-20 object-cover', {
                src: car.images[i],
                alt: 'Image ' + (i + 1),
                'data-index': i
            });
            thumbImg.onclick = function () {
                document.getElementById('main-image').src = this.src;
            };
            thumb.appendChild(thumbImg);
            gallery.appendChild(thumb);
        }
        imageSection.appendChild(gallery);
    }

    imageSection.appendChild(buildDealerCard(dealer));
    container.appendChild(imageSection);

    var detailsSection = el('div', 'space-y-6');


    var header = el('div', 'space-y-2');
    header.appendChild(el('span', 'inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full', {}, car.tags ? car.tags[0] : 'Available'));
    header.appendChild(el('h1', 'text-3xl font-black text-[#111318] dark:text-white', {}, car.title));
    header.appendChild(el('p', 'text-3xl font-black text-primary', {}, '$' + car.price.toLocaleString()));
    detailsSection.appendChild(header);


    var stats = el('div', 'grid grid-cols-3 gap-4 p-4 bg-[#f0f2f4] dark:bg-gray-800 rounded-xl');

    var statItems = [
        { icon: 'speed', label: 'Mileage', value: (car.stock * 1000) + ' mi' },
        { icon: 'settings', label: 'Transmission', value: 'Automatic' },
        { icon: 'local_gas_station', label: 'Fuel', value: 'Petrol' }
    ];

    for (var j = 0; j < statItems.length; j++) {
        var stat = statItems[j];
        var statEl = el('div', 'flex flex-col items-center text-center gap-1');
        statEl.appendChild(icon(stat.icon, 'text-2xl text-primary'));
        statEl.appendChild(el('span', 'text-xs text-gray-500', {}, stat.label));
        statEl.appendChild(el('span', 'text-sm font-bold', {}, stat.value));
        stats.appendChild(statEl);
    }
    detailsSection.appendChild(stats);


    var descSection = el('div', 'space-y-3');
    descSection.appendChild(el('h3', 'text-lg font-bold', {}, 'Description'));
    descSection.appendChild(el('p', 'text-gray-600 dark:text-gray-400 leading-relaxed', {}, car.description));
    detailsSection.appendChild(descSection);


    var specsSection = el('div', 'space-y-3');
    specsSection.appendChild(el('h3', 'text-lg font-bold', {}, 'Specifications'));

    var specsGrid = el('div', 'grid grid-cols-2 gap-3');
    var specs = [
        { label: 'Brand', value: car.brand },
        { label: 'Category', value: car.category },
        { label: 'Rating', value: car.rating + '/5' },
        { label: 'Stock', value: car.stock + ' available' },
        { label: 'Discount', value: car.discountPercentage + '%' },
        { label: 'Warranty', value: car.warrantyInformation || 'N/A' }
    ];

    for (var k = 0; k < specs.length; k++) {
        var specItem = el('div', 'flex justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700');
        specItem.appendChild(el('span', 'text-gray-500 text-sm', {}, specs[k].label));
        specItem.appendChild(el('span', 'font-medium text-sm', {}, specs[k].value));
        specsGrid.appendChild(specItem);
    }
    specsSection.appendChild(specsGrid);
    detailsSection.appendChild(specsSection);


    var actions = el('div', 'flex gap-4 pt-4');

    var contactBtn = el('button', 'flex-1 h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2');
    contactBtn.appendChild(icon('call', 'text-xl'));
    contactBtn.appendChild(el('span', '', {}, 'Contact Seller'));

    var favoriteBtn = el(
        'button',
        'h-12 px-4 border border-gray-200 rounded-xl flex items-center justify-center'
    );

    var favIcon = icon(
        'favorite',
        'text-xl ' + (car.isFavorite ? 'text-red-500' : 'text-gray-400')
    );

    favoriteBtn.appendChild(favIcon);

    favoriteBtn.onclick = function () {
        toggleFavorite(car.id, favoriteBtn);
    };


    actions.appendChild(contactBtn);
    actions.appendChild(favoriteBtn);
    detailsSection.appendChild(actions);

    // detailsSection.appendChild(buildDealerCard(dealer));

    container.appendChild(detailsSection);



}


function init() {
    document.getElementById('auth-buttons').appendChild(buildAuthButtons());

    var carId = getCarIdFromUrl();

    if (carId) {
        var car = getCarById(carId);
        renderCarDetails(car);
    } else {
        renderCarDetails(null);
    }




    var footerContainer = document.getElementById('footer-container');
    footerContainer.appendChild(buildFooter());
}


document.addEventListener('DOMContentLoaded', init);
