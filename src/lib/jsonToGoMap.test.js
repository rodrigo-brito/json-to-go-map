import jsonToMap from "./jsonToGoMap";
describe("the jsonToGoMap converter", () => {
    test("when a empty string is given, it should return a empty result", () => {
        const result = jsonToMap("");
        expect(result).toEqual("");
    });
    
    test("when a invalid JSON is given, it should return a error mensage", () => {
        const result = jsonToMap(`{"test": invalid`);
        expect(result).toEqual("Unexpected token i in JSON at position 9");
    });
    
    test("when a simple key/value object is given, it should return a valid result", () => {
        const result = jsonToMap(`{"key": "value"}`);
        expect(result).toEqual(`map[string]interface{}{"key":"value"}`);
    });

    test("when null value is given, it should return a valid result", () => {
        const result = jsonToMap(`{"key": null}`);
        expect(result).toEqual(`map[string]interface{}{"key":nil}`);
    });

    test("when array is given, it should return a interface list", () => {
        const result = jsonToMap(`["A", "B", 1]`);
        expect(result).toEqual(`[]interface{}{"A","B",1}`);
    });

    test("when a complex object is given", () => {
        const result = jsonToMap(`{"array":["A", "B",1],"foo":{"bar":0.5}}`);
        expect(result).toEqual(`map[string]interface{}{"array":[]interface{}{"A","B",1},"foo":map[string]interface{}{"bar":0.5}}`);
    });
});
