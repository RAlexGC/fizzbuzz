const Reader = require('../utils/Reader')

class ExplorerService {
    static filterByMission(path, mission){
        const explorers = Reader.readJsonFile(path);
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    static getAmountOfExplorersByMission(path, mission){
        const explorersInMission = this.filterByMission(path,mission);
        return explorersInMission.length;
    }
    static getExplorersUsernamesByMission(path, mission){
        const explorersInMission = this.filterByMission(path, mission);
        return explorersInMission.map((explorer) => explorer.githubUsername);
    }
}

module.exports = ExplorerService