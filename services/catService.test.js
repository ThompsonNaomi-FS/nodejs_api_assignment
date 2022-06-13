const{ catService, catServiceByID } = require('./catService');

jest.mock('./catService.js');

describe("Cat Fact Service Test", () => {
    test("Should return a list of cat facts", async () => {
        const result = await catService();
        expect(result.data).toHaveLength(10);
        expect(result.data[8].fact).toEqual("Approximately 24 cat skins can make a coat.");
        expect(result.data[8].length).toEqual(43);
    });

    test("Should return a single cat fact by length(id)", async () => {
        const result = await catServiceByID(20);
        expect(result.data.fact).toEqual("Cats have 3 eyelids.");
        expect(result.data.length).toEqual(20);
    });
});