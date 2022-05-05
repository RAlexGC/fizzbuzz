const ExplorerService = require("../../../lib/services/ExplorerService");
const Reader = require("../../../lib/utils/Reader");
const ExplorerController = require("../../../lib/controllers/ExplorerController");

describe("Unit Test for Explorer Controller", () => {
    test("Get explorers by mission", () => {
        const explorersByMission = ExplorerController.getExplorersByMission("explorersTest","node");
        expect(explorersByMission).toStrictEqual([{
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": [
              "javascript",
              "reasonML",
              "elm"
            ]
          }]);
    });
    test("Explorers usernames by mission", () => {
         const explorersUsernames = ExplorerController.getExplorersUsernamesByMission(
            "explorersTest","node");
        expect(explorersUsernames).toStrictEqual(["ajolonauta1"]);
    });
    test("Get explorers amount by mission", () => {
        const amontOfExplorersInMission = ExplorerController.getExplorersAmonutByMission("explorersTest","node");
        expect(amontOfExplorersInMission).toBe(1);
    });
    test("Validate score", () => {
        const scoreFB1 = ExplorerController.validateScore(1);
        const scoreFB3 = ExplorerController.validateScore(3);
        const scoreFB5 = ExplorerController.validateScore(5);
        const scoreFB15 = ExplorerController.validateScore(15);
        expect(scoreFB1).toBe(1);
        expect(scoreFB3).toBe("FIZZ");
        expect(scoreFB5).toBe("BUZZ");
        expect(scoreFB15).toBe("FIZZBUZZ");
    });
    test("Validate input", () => {
        const response1 = ExplorerController.validateInput("explorersTest", "3");
        const response2 = ExplorerController.validateInput("explorersTest", "node");
        const response3 = ExplorerController.validateInput("explorersTest", "test");
        expect(response1).toStrictEqual("Tu número es: 3. Validación: FIZZ.");
        expect(response2).toStrictEqual("Los explorers en la misión node son: Woopa1");
        expect(response3).toStrictEqual("Escribe un mensaje válido (un número o una misión).");
    });
});
