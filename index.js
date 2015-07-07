var urlResolve = require('url').resolve;

// _urlJoin joins two urls
// By resolving a url relative to the root url
// this works nicely with extra slashes in places
function _urlJoin(rootUrl, url) {
    // Normalize then resolve URLs
    return urlResolve(
        // Ensure trailing slash
        (rootUrl || '').replace(/\/+$/, '') + '/',
        // Trim preceding slash
        (url || '').replace(/^\/+/, '')
    );
}

// urlJoin joins all arguments as URLs
function urlJoin() {
    var args = Array.prototype.slice.call(arguments, 0);
    return args.slice(1)
    .reduce(function(accu, x) {
        return _urlJoin(accu, x);
    }, args[0] || '/');

}

module.exports = urlJoin;
