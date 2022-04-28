const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController {
  static getExplorersByMission(mission) {
    return ExplorerService.filterByMission("explorers.json", mission);
  }
  static getExplorersUsernamesByMission(mission) {
    return ExplorerService.getExplorersUsernamesByMission("explorers.json",
      mission
    );
  }
  static getExplorersAmonutByMission(mission) {
    return ExplorerService.getAmountOfExplorersByMission(
      "explorers.json",
      mission
    );
  }
}
module.exports = ExplorerController;
