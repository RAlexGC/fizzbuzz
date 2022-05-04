const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const TelegramBot = require("node-telegram-bot-api");
require('dotenv').config()

class ExplorerController {
    static getExplorersByMission(filename, mission) {
        return ExplorerService.filterByMission(filename+".json", mission);
    }

    static getExplorersUsernamesByMission(filename, mission) {
        return ExplorerService.getExplorersUsernamesByMission(
            filename+".json",
            mission,
        );
    }

    static getExplorersNamesByMission(filename, mission) {
        return ExplorerService.getExplorersNamesByMission(
            filename+".json",
            mission,
        );
    }

    static getExplorersAmonutByMission(filename, mission) {
        return ExplorerService.getAmountOfExplorersByMission(
            filename+".json",
            mission,
        );
    }

    static validateScore(score) {
        return FizzbuzzService.applyValidationInNumber(score);
    }

}
module.exports = ExplorerController;
