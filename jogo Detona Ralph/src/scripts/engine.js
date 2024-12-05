const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        livePlayer: document.querySelector("#live"),
        messageGameOver: document.querySelector("#mensagem-game-over")
    },
    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60,
        lives: 3
    },
    actions: {
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    }
}

function countDown() {
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;

    if (state.values.curretTime <= 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        state.view.messageGameOver.textContent = "GAME OVER! " + " Resultado: " + state.values.result;
    }
}

function playSound(audioName) {
    let audio = new Audio(`./audios/${audioName}.m4a`);
    audio.volume = 0.3;
    audio.play();
}

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    })

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];

    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function countLives() {
    if (state.values.lives <= 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        state.view.messageGameOver.textContent = "GAME OVER! " + " Pontuação Total: " + state.values.result;
        playSound("game-over");
    }
}

function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit");
            } else {
                if (state.values.lives != 0) {
                    state.values.lives--;
                    state.view.livePlayer.textContent = "X" + state.values.lives;
                }

                countLives();
            }
        })
    })
}

function main() {
    addListenerHitBox();
}

main();
