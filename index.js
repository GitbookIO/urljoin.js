var urlResolve = require('url').resolve;

// urlJoin joins two urls
// By resolving a url relative to the root url
// this works nicely with extra slashes in places
function urlJoin(rootUrl, url) {
    // Normalize then resolve URLs
    return urlResolve(
        // Ensure trailing slash
        rootUrl.replace(/\/+$/, '') + '/',
        // Trim preceding slash
        (url || '').replace(/^\/+/, '')
    );
}

module.exports = urlJoin;
