import jsonToMap from "./jsonToGoMap";
describe("the jsonToGoMap converter", () => {
    test("when an empty value is given, it should return an empty string", () => {
        const result = jsonToMap("");
        expect(result).toEqual("");
    });
    
    test("when an invalid JSON is given, it should return an error mensage", () => {
        const result = jsonToMap(`{"test": invalid`);
        expect(result).toEqual("Unexpected token i in JSON at position 9");
    });

    test("when a simple key/value object is given, it should return a valid result", () => {
        const result = jsonToMap(`{"key": "value"}`);
        expect(result).toMatchSnapshot();
    });

    test("when null value is given, it should return a valid result", () => {
        const result = jsonToMap(`{"key": null}`);
        expect(result).toMatchSnapshot();
    });

    test("when array is given, it should return an interface list", () => {
        const result = jsonToMap(`["A", "B", 1]`);
        expect(result).toMatchSnapshot();
    });

    test("when a complex object is given", () => {
        const result = jsonToMap(`{"array":["A", "B",1],"foo":{"bar":0.5}}`);
        expect(result).toMatchSnapshot();
    });
});
