const displayIcon = document.querySelector('#display-icon');
const fight = document.querySelector('#fight');
const rcpDisplay = document.querySelector('#rpc-display');
const resultIcon = document.querySelectorAll('.result-icon');

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
    rcpDisplay.textContent = '1, 2, 3...';

    let i = 0;
    setIntervalX(
        function () {
            displayIcon.classList.toggle('animate__bounce');
            i++;
            console.log(i);
            if (i === 2) {
                rcpDisplay.textContent = 'Rock!';
                displayIcon.classList.remove('fa-thumbs-up');
                displayIcon.classList.add('fa-hand-rock');
            } else if (i === 4) {
                rcpDisplay.textContent = 'Paper!';
                displayIcon.classList.remove('fa-hand-rock');
                displayIcon.classList.add('fa-hand-paper');
            } else if (i === 6) {
                rcpDisplay.textContent = 'Scissors!';
                displayIcon.classList.remove('fa-hand-paper');
                displayIcon.classList.add('fa-hand-scissors');
            } else if (i === 8) {
                rcpDisplay.textContent = 'Winner is...';
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
