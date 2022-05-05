const Reader = require("../utils/Reader");
const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerService {
    static filterByMission(path, mission) {
        const explorers = Reader.readJsonFile(path);
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    static getAmountOfExplorersByMission(path, mission) {
        const explorersInMission = this.filterByMission(path, mission);
        return explorersInMission.length;
    }

    static getExplorersUsernamesByMission(path, mission) {
        const explorersInMission = this.filterByMission(path, mission);
        return explorersInMission.map((explorer) => explorer.githubUsername);
    }

    static getExplorersNamesByMission(path, mission) {
        const explorersInMission = this.filterByMission(path, mission);
        const explorersMaped = explorersInMission.map((explorer) => explorer.name)
        return explorersMaped.join("\n");;
    }

    static validateInput(path, message){
        const numberToApplyFb = parseInt(message);
        if(!isNaN(numberToApplyFb)){
            const fizzbuzzTrick = FizzbuzzService.applyValidationInNumber(numberToApplyFb);
            return `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}.`;
        } else if(message == "node"||message =="java"){
            const explorersNames = this.getExplorersNamesByMission(path, message)
            return `Los explorers en la misión ${message} son: ${explorersNames}`;
        } else {
            return "Escribe un mensaje válido (un número o una misión).";
        }
    }
}

module.exports = ExplorerService;
