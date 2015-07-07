var urlResolve = require('url').resolve;

// Resolves a url relative to the root git url
// this produces a full url (domain included)
// this works nicely with extra slashes in places
function urlJoin(rootUrl, url) {
    // Normalize then resolve URLs
    return urlResolve(
        ensureSuffix(trimSuffix(rootUrl, '/'), '/'),
        trimPrefix(url || '', '/')
    );
}

/*
 * Utility functions
 */

// Ensure str (a url) ends with a suffix
function ensureSuffix(str, suffix) {
    return hasSuffix(str, suffix) ? str : str+suffix;
}

// Ensure str (a url) does not end with a suffix
function trimSuffix(str, suffix) {
    return hasSuffix(str, suffix) ? str.substring(0, str.length-suffix.length) : str;
}

// Ensure str (a url) does not start with a prefix
function trimPrefix(str, prefix) {
    return hasPrefix(str, prefix) ? str.substring(prefix.length) : str;
}

function hasSuffix(str, suffix) {
    return str.substring(str.length-suffix.length) === suffix;
}

function hasPrefix(str, prefix) {
    return str.indexOf(prefix) === 0;
}

module.exports = urlJoin;
