export default function convert(jsonString){
    if (!jsonString) {
        return  ""
    }
    try {
        const parseObect = JSON.parse(jsonString)
        return jsonToMap(parseObect);
    } catch(e) {
        return e.message
    }
}

function jsonToMap(obj, tabLevel = 1){
    if (obj === null || obj === undefined){
        return "nil"
    } else if (Array.isArray(obj)) {
        const output = obj.map(key => {
            return `${getTabs(tabLevel)}${jsonToMap(key, tabLevel + 1)},`
        }).join("\n")
        return `[]interface{}{\n${output}\n${getTabs(tabLevel-1)}}`
    } else if (isObject(obj)) {
        const values = Object.keys(obj).map(key => {
            return `${getTabs(tabLevel)}"${key}":${jsonToMap(obj[key], tabLevel + 1)},`
        })
        const output = values.join("\n")
        return `map[string]interface{}{\n${output}\n${getTabs(tabLevel - 1)}}`
    }
    return JSON.stringify(obj)
}

function getTabs(numberTabs) {
    let result = ""; 
    for (let i = 0; i < numberTabs; i++){
        result += "\t";
    }
    return result;
}

function isObject(obj) {
  return obj === Object(obj);
}