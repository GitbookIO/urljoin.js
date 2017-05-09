var urlResolve = require('resolve-pathname');
var urlSplit = require('./urlsplit');

// _urlJoin joins two urls
// By resolving a url relative to the root url
// this works nicely with extra slashes in places
function _urlJoin(rootUrl, url) {
    // Normalize then resolve URLs
    return urlResolve(
        // Trim preceding slash
        (url || '').replace(/^\/+/, ''),
        // Ensure trailing slash
        (rootUrl || '').replace(/\/+$/, '') + '/'
    );
}

// urlJoin joins all arguments as URLs
function urlJoin() {
    var args = Array.prototype.slice.call(arguments, 0);

    var baseUrl = args[0] || '/';
    var parts = urlSplit(baseUrl);

    var joinedPath = args.slice(1)
    .reduce(function(accu, x) {
        return _urlJoin(accu, x);
    }, parts.path || '/');

    return _urlJoin(parts.domain, joinedPath);
}

module.exports = urlJoin;
