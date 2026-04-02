function shareQuote() {
    if (!currentQuote) return;
    const text = `"${currentQuote.text}" — ${currentQuote.author}`;
    if (navigator.share) {
        navigator.share({ title: 'Цитата дня', text: text });
    } else {
        navigator.clipboard.writeText(text);
        alert('📋 Цитата скопирована!');
    }
}
