var urlResolve = require('url').resolve;

// Resolves a url relative to the root git url
// this produces a full url (domain included)
// this works nicely with extra slashes in places
function urlJoin(rootUrl, url) {
    // Normalize then resolve URLs
    return urlResolve(
        // Ensure trailing slash
        rootUrl.replace(/\/$/, '') + '/',
        // Trim preceding slash
        (url || '').replace(/^\//, '')
    );
}

module.exports = urlJoin;
