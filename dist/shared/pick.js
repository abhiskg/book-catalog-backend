"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pick = (obj, keys) => {
    const pickedObject = {};
    for (const key of keys) {
        //if obj has the key then append it
        if (obj && Object.hasOwnProperty.call(obj, key)) {
            pickedObject[key] = obj[key];
        }
    }
    return pickedObject;
};
exports.default = pick;
