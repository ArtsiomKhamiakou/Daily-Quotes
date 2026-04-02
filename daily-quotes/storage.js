let favorites = [];

function loadFavorites() {
    const saved = localStorage.getItem('favorites');
    if (saved) {
        favorites = JSON.parse(saved);
    }
}

function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function addToFavorites(quote) {
    const exists = favorites.some(f => f.text === quote.text);
    if (!exists) {
        favorites.push(quote);
        saveFavorites();
        return true;
    }
    return false;
}

function removeFromFavorites(index) {
    favorites.splice(index, 1);
    saveFavorites();
}
