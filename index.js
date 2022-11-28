const homeScore = document.getElementById('home-score'); //Home Points
const guestScore = document.getElementById('guest-score'); //Guest Points
const scoreButton = document.querySelector('.board'); //All +Score Buttons
const newGame = document.getElementById('newgame'); //New Game Button

// Initial Score
let homePoints = 0;
let guestPoints = 0;

// Event listener for all buttons that checks what points to assign, team it's for and highlights leader
scoreButton.addEventListener('click', e => {
    if (e.target.textContent === '+1' && e.target.parentElement.classList.contains('home')) {
        homePoints += 1;
        homeScore.textContent = homePoints;
        leader();
    } else if (e.target.textContent === '+2' && e.target.parentElement.classList.contains('home')) {
        homePoints += 2;
        homeScore.textContent = homePoints;
        leader();
    } else if (e.target.textContent === '+3' && e.target.parentElement.classList.contains('home')) {
        homePoints += 3;
        homeScore.textContent = homePoints;
        leader();
    } else if (e.target.textContent === '+1' && e.target.parentElement.classList.contains('guest')) {
        guestPoints += 1;
        guestScore.textContent = guestPoints;
        leader();
    } else if (e.target.textContent === '+2' && e.target.parentElement.classList.contains('guest')) {
        guestPoints += 2;
        guestScore.textContent = guestPoints;
        leader();
    } else if (e.target.textContent === '+3' && e.target.parentElement.classList.contains('guest')) {
        guestPoints += 3;
        guestScore.textContent = guestPoints;
        leader();
    }
});

// Resets the game score tracking.
newGame.addEventListener('click', () => {
    homePoints = 0;
    guestPoints = 0;
    homeScore.textContent = homePoints;
    guestScore.textContent = guestPoints;
    leader();
});

// Checks and hightlights which teams has the highest score.
function leader () {
    let home = document.querySelector('.home');
    let guest = document.querySelector('.guest');

    if (homePoints > guestPoints) {
        guest.classList.remove('leader');
        home.classList.add('leader');
    } else if (homePoints < guestPoints) {
        home.classList.remove('leader');
        guest.classList.add('leader');
    } else if ( homePoints === guestPoints ) {
        home.classList.remove('leader');
        guest.classList.remove('leader');
    }
}