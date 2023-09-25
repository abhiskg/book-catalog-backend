"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHelper = void 0;
const updateDocument = (result, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(payload).length > 0) {
        Object.keys(payload).forEach((key) => {
            if (key in result) {
                result[key] = payload[key];
            }
        });
    }
    // if (nestedObjects && Object.keys(nestedObjects)?.length > 0) {
    //   Object.entries(nestedObjects).forEach(([key, value]) => {
    //     if (value && Object.keys(value)?.length > 0) {
    //       Object.keys(value).forEach((key2) => {
    //         (result as any)[key][key2] = value[key2 as keyof typeof value];
    //       });
    //     }
    //   });
    // }
    const updatedDocument = yield result.save();
    return { updatedDocument };
});
exports.UpdateHelper = {
    updateDocument,
};
