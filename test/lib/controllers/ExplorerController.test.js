const ExplorerService = require("../../../lib/services/ExplorerService");
const Reader = require("../../../lib/utils/Reader");
const ExplorerController = require("../../../lib/controllers/ExplorerController");

describe("Unit Test for Explorer Controller", () => {
  test("Get explorers by mission", () => {
    const explorers = Reader.readJsonFile("explorers.json");
    const explorersFiltered = explorers.filter(
      (explorer) => explorer.mission == "node"
    );
    const explorersByMission = ExplorerController.getExplorersByMission("node");
    expect(explorersByMission).toStrictEqual(explorersFiltered);
  });
  test("Explorers usernames by mission", () => {
    const explorers = Reader.readJsonFile("explorers.json");
    const explorersInNodeToGetUsernames = explorers.filter(
      (explorer) => explorer.mission == "node"
    );
    const usernamesInNode = explorersInNodeToGetUsernames.map(
      (explorer) => explorer.githubUsername
    );
    const explorersUsernames = ExplorerController.getExplorersUsernamesByMission(
      "node");
    expect(explorersUsernames).toStrictEqual(usernamesInNode);
  });
  test("Get explorers amount by mission", () => {
    const amontOfExplorersInMission = ExplorerController.getExplorersAmonutByMission(
      "node");
    expect(amontOfExplorersInMission).toBe(10);
  });
  test("Validate score", () => {
    const scoreFB1 = ExplorerController.validateScore(1);
    const scoreFB3 = ExplorerController.validateScore(3);
    const scoreFB5 = ExplorerController.validateScore(5);
    const scoreFB15 = ExplorerController.validateScore(15);
    expect(scoreFB1).toBe(1);
    expect(scoreFB3).toBe('FIZZ');
    expect(scoreFB5).toBe('BUZZ');
    expect(scoreFB15).toBe('FIZZBUZZ');
  });
});
