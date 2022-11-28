const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');
const scoreButton = document.querySelector('.board');
const newGame = document.getElementById('newgame');

let homePoints = 0;
let guestPoints = 0;



scoreButton.addEventListener('click', e => {
    if (e.target.textContent === '+1' && e.target.parentElement.classList == 'home') {
        homePoints += 1;
        homeScore.textContent = homePoints;
        console.log(e.target.parentElement.classList == 'home')
    } else if (e.target.textContent === '+2' && e.target.parentElement.classList == 'home') {
        homePoints += 2;
        homeScore.textContent = homePoints;
    } else if (e.target.textContent === '+3' && e.target.parentElement.classList == 'home') {
        homePoints += 3;
        homeScore.textContent = homePoints;
    } else if (e.target.textContent === '+1' && e.target.parentElement.classList == 'guest') {
        guestPoints += 1;
        guestScore.textContent = guestPoints;
    } else if (e.target.textContent === '+2' && e.target.parentElement.classList == 'guest') {
        guestPoints += 2;
        guestScore.textContent = guestPoints;
    } else if (e.target.textContent === '+3' && e.target.parentElement.classList == 'guest') {
        guestPoints += 3;
        guestScore.textContent = guestPoints;
    }
});


newGame.addEventListener('click', () => {
    homePoints = 0;
    guestPoints = 0;
    homeScore.textContent = homePoints;
    guestScore.textContent = guestPoints;
});