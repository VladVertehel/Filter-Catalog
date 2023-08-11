const cards = document.querySelectorAll('.card');
const checkboxes = document.querySelectorAll('.checkbox');

document.querySelector('.filter').addEventListener('click', el => {
    if (el.target.tagName !== "INPUT") return false;
    let filterClass = el.target.dataset['filter'];

    if (el.target.checked == true) {
        cards.forEach(card => {
            if (!card.classList.contains(filterClass) &&
                !card.classList.contains('filteredByColor') &&
                !card.classList.contains('filteredByOutline') &&
                !card.classList.contains('filteredByContent')) {
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
                if (el.target.classList.contains('content') && card.classList.contains(filterClass)) {
                    card.classList.add('filteredByContent');
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
                if (el.target.classList.contains('content')) {
                    card.classList.remove('filteredByContent');
                }
                if (!card.classList.contains('filteredByColor') &&
                    !card.classList.contains('filteredByOutline') &&
                    !card.classList.contains('filteredByContent')) {
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
            card.classList.remove('filteredByContent');

            counter = 0;
        })
    }
})

//Pictures
function draw() {
    var canvas = document.getElementById("c1");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.translate(70, 10);
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }

    canvas = document.getElementById("c2");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.translate(70, 10);
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
    }

    canvas = document.getElementById("c3");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.translate(70, 10);
        // Filled triangle
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.fill();

        // Stroked triangle
        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
    }

    canvas = document.getElementById("c4");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.translate(70, 10);
        // Cubic curves example
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fill();
    }

    canvas = document.getElementById("c5");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.translate(70, 10);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        // Quadratric curves example
        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.quadraticCurveTo(25, 25, 25, 62.5);
        ctx.quadraticCurveTo(25, 100, 50, 100);
        ctx.quadraticCurveTo(50, 120, 30, 125);
        ctx.quadraticCurveTo(60, 120, 65, 100);
        ctx.quadraticCurveTo(125, 100, 125, 62.5);
        ctx.quadraticCurveTo(125, 25, 75, 25);
        ctx.stroke();
    }

    canvas = document.getElementById("c6");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.translate(85, 40);
        ctx.lineWidth = 3;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        var rectangle = new Path2D();
        rectangle.rect(10, 10, 50, 50);

        var circle = new Path2D();
        circle.moveTo(125, 35);
        circle.arc(100, 35, 25, 0, 2 * Math.PI);

        ctx.stroke(rectangle);
        ctx.fill(circle);
    }
}

draw();