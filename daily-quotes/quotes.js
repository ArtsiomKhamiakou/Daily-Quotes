const quotes = [
    { text: "Будь изменением, которое хочешь видеть в мире", author: "Махатма Ганди" },
    { text: "Жизнь — это то, что с тобой происходит, пока ты строишь планы", author: "Джон Леннон" },
    { text: "Не бойся совершенства. Тебе его не достичь", author: "Сальвадор Дали" },
    { text: "Единственный способ делать великую работу — любить то, что ты делаешь", author: "Стив Джобс" },
    { text: "Или ты управляешь своим днём, или день управляет тобой", author: "Джим Рон" }
];

let currentQuote = null;

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return { ...quotes[randomIndex] };
}

function updateDisplay(quote) {
    document.getElementById('quote-text').textContent = quote.text;
    document.getElementById('quote-author').textContent = `— ${quote.author}`;
    currentQuote = quote;
}
