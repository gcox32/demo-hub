const filter = document.getElementById('demo-filter');
const cards = document.getElementsByClassName('card');

filter.addEventListener('input', function () {
    var val = this.value.toUpperCase();
    if (val.length > 0) {
        for (let i = 0; i < cards.length; i++) {
            var cardTitle = cards[i].querySelector('.card-title').innerText.toUpperCase();
            var cardText = cards[i].querySelector('.card-text').innerText.toUpperCase();
            if (!(cardTitle.includes(val)) && !(cardText.includes(val))) {
                cards[i].style.display = 'none';
            } else {
                cards[i].style.display = 'block';
            }
        }
    } else {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'block';
        }
    }
})

for (let i = 0; i < cards.length; i++) {
    if (cards[i].dataset.dest) {
        cards[i].addEventListener('click', function () {
            window.open(cards[i].dataset.dest);
        })
    }
}