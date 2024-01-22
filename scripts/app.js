const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const links = body.querySelectorAll('main div li');

const hamburgerToggle = document.querySelector("#hamburger-toggle");
const navElement = document.querySelector(".navigation");

hamburgerToggle.addEventListener("click", () => {
    navElement.classList.toggle('open');
    hamburgerToggle.classList.toggle('open');
});

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        body.querySelector('main h1').style.color = 'black';
        body.querySelector('main section h3').style.color = 'black';
        links.forEach(link => {
            link.style.color = 'black';
        });
        body.querySelector('main h1').style.borderBottom = '3px solid black';
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
        body.querySelector('main h1').style.color = 'white';
        body.querySelector('main section h3').style.color = 'white';
        links.forEach(link => {
            link.style.color = 'white';
        });
        body.querySelector('main h1').style.borderBottom = '3px solid white';

    }
});
