"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationHelper = void 0;
const calculatePagination = (options, defaultOptions) => {
    const page = Number(options.page) || defaultOptions.page;
    const limit = Number(options.limit) || defaultOptions.limit;
    const skip = (page - 1) * limit;
    const sortBy = options.sortBy || defaultOptions.sortBy;
    const sortOrder = options.sortOrder || defaultOptions.sortOrder;
    const sortCondition = {};
    if (sortBy && sortOrder) {
        sortCondition[sortBy] = sortOrder;
    }
    return {
        page,
        limit,
        skip,
        sortCondition,
    };
};
exports.PaginationHelper = {
    calculatePagination,
};
