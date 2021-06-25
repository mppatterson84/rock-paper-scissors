const displayIcon = document.querySelector('#display-icon');
const fight = document.querySelector('#fight');
const choiceDisplay = document.querySelectorAll('.choice-display');
const resultIcon = document.querySelectorAll('.result-icon');
const playerChoice = document.querySelectorAll('.player-choice');

// radio button functionality
playerChoice.forEach(function (choice, index) {
    choice.addEventListener('click', function () {
        for (let i = 0; i < playerChoice.length; i++) {
            if (playerChoice[i] == choice) {
                choice.classList.remove('btn-outline-secondary');
                choice.classList.add('btn-outline-success');
            } else {
                playerChoice[i].classList.remove('btn-outline-success');
                playerChoice[i].classList.add('btn-outline-secondary');
            }
        }
    });
});

function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {
        callback();

        if (++x === repetitions) {
            window.clearInterval(intervalID);
        }
    }, delay);
}

fight.addEventListener('click', () => {
    fight.disabled = true;
    displayIcon.hidden = false;
    resultIcon[0].hidden = true;
    resultIcon[1].hidden = true;
    choiceDisplay[1].textContent = '1, 2, 3...';

    let i = 0;
    setIntervalX(
        function () {
            displayIcon.classList.toggle('animate__bounce');
            i++;
            // console.log(i);
            if (i === 2) {
                choiceDisplay[1].textContent = 'Rock!';
                displayIcon.classList.remove('fa-thumbs-up');
                displayIcon.classList.add('fa-hand-rock');
            } else if (i === 4) {
                choiceDisplay[1].textContent = 'Paper!';
                displayIcon.classList.remove('fa-hand-rock');
                displayIcon.classList.add('fa-hand-paper');
            } else if (i === 6) {
                choiceDisplay[1].textContent = 'Scissors!';
                displayIcon.classList.remove('fa-hand-paper');
                displayIcon.classList.add('fa-hand-scissors');
            } else if (i === 8) {
                choiceDisplay[1].textContent = 'Winner is...';
                displayIcon.classList.remove('fa-hand-scissors');
                displayIcon.classList.add('fa-thumbs-up');
                displayIcon.hidden = true;
                resultIcon[0].classList.remove('fa-thumbs-up');
                resultIcon[0].classList.add('fa-hand-paper');
                resultIcon[0].hidden = false;
                resultIcon[1].classList.remove('fa-thumbs-up');
                resultIcon[1].classList.add('fa-hand-rock');
                resultIcon[1].hidden = false;
                fight.disabled = false;
            }
        },
        550,
        8
    );
});
