function createCarCard(car) {
    const badge = car.tags && car.tags[0] ? car.tags[0] : 'Used';
    const badgeColor = badge === 'New Arrival' ? 'bg-green-600/90' :
        badge === 'Premium' ? 'bg-gray-800/90' : 'bg-primary/90';

    return `
        <div class="group flex flex-col bg-white dark:bg-[#1a202c] rounded-xl border border-[#dbdfe6] dark:border-gray-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div class="relative h-48 w-full overflow-hidden">
                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt="${car.title || car.brand + ' ' + car.model}"
                    src="${car.thumbnail || car.images?.[0] || 'https://via.placeholder.com/400x300?text=No+Image'}" />
                <div class="absolute top-3 right-3">
                    <button class="flex items-center justify-center size-8 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm text-gray-500 hover:text-red-500 transition-colors shadow-sm">
                        <span class="material-symbols-outlined text-[20px]">favorite</span>
                    </button>
                </div>
                <div class="absolute top-3 left-3">
                    <span class="${badgeColor} backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">${badge}</span>
                </div>
            </div>
            <div class="p-4 flex flex-col flex-1">
                <div class="flex justify-between items-start mb-1">
                    <h3 class="text-lg font-bold text-[#111318] dark:text-white line-clamp-1" title="${car.title || ''}">${car.title || car.brand + ' ' + car.model}</h3>
                </div>
                <p class="text-sm text-[#616f89] dark:text-gray-400 mb-3">${car.description ? car.description.substring(0, 30) + '...' : 'No description'}</p>
                <div class="flex items-center gap-4 border-y border-[#f0f2f4] dark:border-gray-700 py-3 mb-4">
                    <div class="flex flex-col items-center gap-1 flex-1 border-r border-[#f0f2f4] dark:border-gray-700">
                        <span class="material-symbols-outlined text-gray-400 text-[18px]">calendar_month</span>
                        <span class="text-xs font-medium">${car.year || 'N/A'}</span>
                    </div>
                    <div class="flex flex-col items-center gap-1 flex-1 border-r border-[#f0f2f4] dark:border-gray-700">
                        <span class="material-symbols-outlined text-gray-400 text-[18px]">settings</span>
                        <span class="text-xs font-medium">${car.transmission || 'Auto'}</span>
                    </div>
                    <div class="flex flex-col items-center gap-1 flex-1">
                        <span class="material-symbols-outlined text-gray-400 text-[18px]">local_gas_station</span>
                        <span class="text-xs font-medium">${car.fuelType || 'Petrol'}</span>
                    </div>
                </div>
                <div class="mt-auto flex items-center justify-between gap-3">
                    <p class="text-xl font-black text-[#111318] dark:text-white">$${car.price ? car.price.toLocaleString() : 'N/A'}</p>
                    <button class="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-lg transition-colors shadow-sm shadow-blue-200 dark:shadow-none">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `;
}

export { createCarCard };
