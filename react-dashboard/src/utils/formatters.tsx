"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.formatNumber = exports.formatCurrency = void 0;
// src/utils/formatters.ts
const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
};
exports.formatCurrency = formatCurrency;
const formatNumber = (value) => {
    return new Intl.NumberFormat('en-US').format(value);
};
exports.formatNumber = formatNumber;
const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);
};
exports.formatDate = formatDate;
