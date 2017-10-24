/**
 * Return whether obj is an Object
 * @param {any} obj 
 * @returns whether obj is an object
 */
const isObject = obj => typeof obj === "object" && obj !== null;

/**
 * Return a string with a given number of tabs
 * @param {number} numberTabs number of tabs to indent
 * @return a string of tabs
 */
const getTabs = numberTabs => {
    let result = "";
    for (let i = 0; i < numberTabs; i++) {
        result += "\t";
    }

    return result;
};

/**
 * Recursive function to convert json to a map
 * Converts arrays to slices and objects to maps
 * @param {object} obj to convert to golang map
 * @param {number} tabLevel indentation level
 * @returns the golang map
 */
const jsonToMap = (obj, tabLevel = 1) => {
    if (obj === null || obj === undefined) {
        return "nil";
    } else if (Array.isArray(obj)) {
        const output = obj
            .map(key => `${getTabs(tabLevel)}${jsonToMap(key, tabLevel + 1)},`)
            .join("\n");

        return `[]interface{}{\n${output}\n${getTabs(tabLevel - 1)}}`;
    } else if (isObject(obj)) {
        const values = Object.keys(obj).map(
            key =>
                `${getTabs(tabLevel)}"${key}": ${jsonToMap(obj[key], tabLevel + 1)},`
        );
        const output = values.join("\n");

        return `map[string]interface{}{\n${output}\n${getTabs(tabLevel - 1)}}`;
    }

    return JSON.stringify(obj);
};

/**
 * Get convert a json string to a golang map
 * @param {string} jsonString
 * @returns the golang map string or an error string if conversion
 * is unsuccessful
 */
const convert = jsonString => {
    if (!jsonString) {
        return "";
    }

    try {
        const parsedObject = JSON.parse(jsonString);

        return jsonToMap(parsedObject);
    } catch (e) {
        return e.message;
    }
};

export default convert;
