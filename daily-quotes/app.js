function renderFavorites() {
    const container = document.getElementById('favorites-list');
    if (favorites.length === 0) {
        container.innerHTML = '<div style="color:white;text-align:center;">⭐ Нет сохранённых цитат</div>';
        return;
    }
    
    container.innerHTML = favorites.map((f, i) => `
        <div class="favorite-item">
            <div class="favorite-text">
                "${f.text}"
                <div class="favorite-author">— ${f.author}</div>
            </div>
            <button class="remove-btn" onclick="removeFavorite(${i})">🗑️</button>
        </div>
    `).join('');
}

function removeFavorite(index) {
    removeFromFavorites(index);
    renderFavorites();
}

document.getElementById('new-btn').onclick = () => {
    const quote = getRandomQuote();
    updateDisplay(quote);
};

document.getElementById('favorite-btn').onclick = () => {
    if (currentQuote) {
        const added = addToFavorites(currentQuote);
        if (added) {
            renderFavorites();
            alert('⭐ Сохранено!');
        } else {
            alert('Уже в избранном');
        }
    }
};

loadFavorites();
renderFavorites();
const firstQuote = getRandomQuote();
updateDisplay(firstQuote);
document.getElementById('share-btn').onclick = shareQuote;
