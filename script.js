const cards = document.querySelectorAll('.card');
const checkboxes = document.querySelectorAll('.checkbox');

document.querySelector('.filter').addEventListener('click', el => {
    if (el.target.tagName !== "INPUT") return false;
    let filterClass = el.target.dataset['filter'];

    if (el.target.checked == true) {
        cards.forEach(card => {
            if (!card.classList.contains(filterClass) &&
                !card.classList.contains('filteredByColor') &&
                !card.classList.contains('filteredByOutline')) {
                card.classList.add('hide');
            }
            else {
                card.classList.remove('hide');
                if (el.target.classList.contains('color') && card.classList.contains(filterClass)) {
                    card.classList.add('filteredByColor');
                }
                if (el.target.classList.contains('outline') && card.classList.contains(filterClass)) {
                    card.classList.add('filteredByOutline');
                }
            }
        })
    } else {
        cards.forEach(card => {
            if (card.classList.contains(filterClass)) {
                if (el.target.classList.contains('color')) {
                    card.classList.remove('filteredByColor');
                }
                if (el.target.classList.contains('outline')) {
                    card.classList.remove('filteredByOutline');
                }
                if (!card.classList.contains('filteredByColor') &&
                    !card.classList.contains('filteredByOutline')) {
                    card.classList.add('hide');
                }
            }
        })
    }

    let counter = 0;
    checkboxes.forEach(cb => {
        if (cb.checked == false) {
            counter++;
        }
    })
    if (counter == checkboxes.length) {
        cards.forEach(card => {
            card.classList.remove('hide');
            card.classList.remove('filteredByColor');
            card.classList.remove('filteredByOutline');
            counter = 0;
        })
    }
})