
const form = document.querySelector("#playerForm");
const nameInput = document.querySelector("#playerName");
const scoreInput = document.querySelector("#playerScore");
const messageElement = document.querySelector("#message");
const rankingElement = document.querySelector("#ranking");


let players = [];

// Validate player
export function validatePlayer(name, score) {
    if (name.trim() === "") {
        return "The name cannot be empty.";
    }

    if (score.trim() === "" || isNaN(score) || score < 0) {
        return "Enter a valid score.";
    }

    return null;
}


// Add or update player
export function addOrUpdatePlayer(playerList, newPlayer) {
    const existingPlayer = playerList.find(player =>
        player.name.toLowerCase() === newPlayer.name.toLowerCase()
    );

    if (existingPlayer) {
        existingPlayer.score = newPlayer.score;
        return "updated";
    }

    playerList.push(newPlayer);
    return "added";
}


//sort
export function sortPlayers(playerList) {
    return [...playerList].sort(
        (a, b) => b.score - a.score
    );
}

// Display
export function renderRanking() {
    rankingElement.innerHTML = "";

    if (players.length === 0) {
        rankingElement.innerHTML = "<li>No players yet</li>";
        return;
    }

    const sorted = sortPlayers(players);

    sorted.forEach((player, index) => {
        rankingElement.innerHTML += "<li></li>";
        rankingElement.lastElementChild.textContent =
            `${index + 1} - ${player.name} - ${player.score} points`;
    });
}


// Form submit
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const score = scoreInput.value;

    // Validate
    const error = validatePlayer(name, score);

    if (error) {
        messageElement.textContent = error;
        messageElement.className = "error";
        return;
    }

    // Add or update
    const player = {
        name: name,
        score: Number(score)
    };

    const action = addOrUpdatePlayer(players, player);

    if (action === "added") {
        messageElement.textContent = "Player added successfully.";
    } else {
        messageElement.textContent = "Score updated successfully.";
    }

    messageElement.className = "success";

    renderRanking();

    form.reset();
    nameInput.focus();
});


renderRanking();

