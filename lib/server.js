const express = require("express");
const ExplorerController = require("./controllers/ExplorerController");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "FizzBuzz Api welcome!" });
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission", (request, response) => {
    const { mission } = request.params;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const { mission } = request.params;
    const amountOfExplorersInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({ mission: request.params.mission, quantity: amountOfExplorersInMission });
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const { mission } = request.params;
    const usernamesOfExplorersInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({ mission: request.params.mission, explorers: usernamesOfExplorersInMission });
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const { score } = request.params;
    const validatedScore = ExplorerController.validateScore(score);
    response.json({ score: request.params.score, trick: validatedScore });
});

app.get("/v1/fbbot/:token", (request, response) => {
    const { token } = request.params;
    const bot = ExplorerController.fizzbuzzBot(token);
    response.json({ message: bot });
});
