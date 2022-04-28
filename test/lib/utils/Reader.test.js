const Reader = require('../../../lib/utils/Reader')

describe("Unit Test for Reader Util", () => {
    test("Reading JSON file", () => {
        const explorers = Reader.readJsonFile('explorersTest.json')
        expect(explorers).toStrictEqual([
            {
              "name": "Woopa1",
              "githubUsername": "ajolonauta1",
              "score": 1,
              "mission": "node",
              "stacks": [
                "javascript",
                "reasonML",
                "elm"
              ]
            }])
    })
})