const ExplorerService = require("../../../lib/services/ExplorerService");
const Reader = require("../../../lib/utils/Reader");

describe("Unit Test for Explorer Service", () => {
    test("Filter by mission method", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersFiltered = explorers.filter((explorer) => explorer.mission == "node");
        const explorersByMission = ExplorerService.filterByMission("explorers.json", "node");
        expect(explorersByMission).toStrictEqual(explorersFiltered);
    });
    test("Amount of explorers by mission", () => {
        const amountOfExplorers = ExplorerService.getAmountOfExplorersByMission("explorers.json", "node");
        expect(amountOfExplorers).toBe(10);
    });
    test("Get explorers username by mission", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        const explorersUsernames = ExplorerService.getExplorersUsernamesByMission("explorers.json", "node");
        expect(explorersUsernames).toStrictEqual(usernamesInNode);
    });
});
