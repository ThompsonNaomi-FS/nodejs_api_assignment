const{ catService, catServiceByID } = require('./catService');


describe("Cat Fact Service Test", () => {
    test("Should return a list of cat facts", async () => {
        const result = await catService();
        expect(result.data.current_page).toEqual(1);
    });

    test("Should return a single cat fact by length(id)", async () => {
        const result = await catServiceByID(20);
        expect(result.data.length).toEqual(20);
    });
});