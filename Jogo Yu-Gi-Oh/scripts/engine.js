const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        drawScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldsCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    playerSides: {
        player1: "player-cards",
        player1Box: document.querySelector("#player-cards"),
        computer: "computer-cards",
        computerBox: document.querySelector("#computer-cards"),
    },
    actions: {
        button: document.getElementById("next-duel"),
    },
};

const pathImagem = "./assets/icons/";

const cardData = [
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImagem}dragon.png`,
        winOf: [1],
        LoseOf: [2],
    },
    {
        id: 1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImagem}magician.png`,
        winOf: [2],
        LoseOf: [0],
    },
    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImagem}exodia.png`,
        winOf: [0],
        LoseOf: [1],
    }
]

async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

async function createCardImage(idCard, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./assets/icons/card-back.png");
    cardImage.setAttribute("data-id", idCard);
    cardImage.classList.add("card");

    if (fieldSide === state.playerSides.player1) {
        cardImage.addEventListener("mouseover", () => {
            drawSelectCard(idCard);
        })

        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        });
    }
    return cardImage;
}

async function drawButton(text) {
    state.actions.button.innerText = text.toUpperCase();
    state.actions.button.style.display = "block";
}

async function updateScore() {
    state.score.scoreBox.innerHTML = `Win: ${state.score.playerScore} Draw: ${state.score.drawScore}  Lose: ${state.score.computerScore}`
}

async function checkDuelResults(playerCardId, computerCardId) {
    let duelResults = "Draw";
    let playerCard = cardData[playerCardId];

    if (playerCard.winOf.includes(computerCardId)) {
        duelResults = "Win";
        await playAudio(duelResults);
        state.score.playerScore++;
    }

    if (playerCard.LoseOf.includes(computerCardId)) {
        duelResults = "Lose";
        await playAudio(duelResults);
        state.score.computerScore++;
    }

    if(duelResults === "Draw"){
        state.score.drawScore++;
    }

    return duelResults;
}

async function removeAllCardsImages() {
    let { computerBox, player1Box } = state.playerSides;
    let imgElements = computerBox.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());

    imgElements = player1Box.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
}

async function setCardsField(cardId) {
    await removeAllCardsImages();

    let computerCardId = await getRandomCardId();
    await showHiddenCardFieldsImagens(true);

    await hiddenCardDetails();

    await drawCardsInField(cardId, computerCardId);
    let duelResults = await checkDuelResults(cardId, computerCardId);

    await updateScore();
    await drawButton(duelResults);
}

async function drawCardsInField(cardId, ComputerCardId){
    state.fieldsCards.player.src = cardData[cardId].img;
    state.fieldsCards.computer.src = cardData[ComputerCardId].img;
}

async function showHiddenCardFieldsImagens(value) {
    if (value === true) {
        state.fieldsCards.player.style.display = "block";
        state.fieldsCards.computer.style.display = "block";

    } else {
        state.fieldsCards.player.style.display = "none";
        state.fieldsCards.computer.style.display = "none";

    }
}

async function hiddenCardDetails() {
    state.cardSprites.avatar.src = "";
    state.cardSprites.name.innerText = "";
    state.cardSprites.type.innerText = "";

}

async function drawSelectCard(index) {
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Attibute : " + cardData[index].type
}

async function drawCards(cardNumber, fieldSide) {
    for (let i = 0; i < cardNumber; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

async function resetDuel() {
    state.cardSprites.avatar.src = "";
    state.actions.button.style.display = "none";

    state.fieldsCards.player.style.display = "none";
    state.fieldsCards.computer.style.display = "none";

    main();
}

async function playAudio(status) {
    const audio = new Audio(`./assets/audios/${status}.wav`);

    try {
        audio.play();
    } catch { }
}

async function putInformativeTextInTheInformationField() {
    state.cardSprites.name.innerText = "Selecione uma carta";
    state.cardSprites.type.innerText = "na parte inferior";
}

function main() {
    putInformativeTextInTheInformationField();
    showHiddenCardFieldsImagens(false);

    drawCards(5, state.playerSides.player1);
    drawCards(5, state.playerSides.computer);

    const bgm = document.getElementById("bgm");
    bgm.play();   
}

main();