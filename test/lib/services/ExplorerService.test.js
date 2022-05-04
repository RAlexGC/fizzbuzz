const ExplorerService = require("../../../lib/services/ExplorerService");
const Reader = require("../../../lib/utils/Reader");

describe("Unit Test for Explorer Service", () => {
    test("Filter by mission method", () => {
        const explorersByMission = ExplorerService.filterByMission("explorersTest.json", "node");
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
    test("Amount of explorers by mission", () => {
        const amountOfExplorers = ExplorerService.getAmountOfExplorersByMission("explorersTest.json", "node");
        expect(amountOfExplorers).toBe(1);
    });
    test("Get explorers username by mission", () => {
        const explorersUsernames = ExplorerService.getExplorersUsernamesByMission("explorersTest.json", "node");
        expect(explorersUsernames).toStrictEqual(["ajolonauta1"]);
    });
    test("Get explorers name by mission", () => {
        const explorersUsernames = ExplorerService.getExplorersNamesByMission("explorersTest.json", "node");
        expect(explorersUsernames).toStrictEqual(["Woopa1"]);
    });
});
