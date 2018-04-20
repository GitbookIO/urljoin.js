import resolvePathname from 'resolve-pathname';
import splitURL from './splitURL';

// concatURL joins two urls
// By resolving a url relative to the root url
// this works nicely with extra slashes in places
function concatURL(rootUrl, url) {
    // Normalize then resolve URLs
    return resolvePathname(
        // Trim preceding slash
        (url || '').replace(/^\/+/, ''),
        // Ensure trailing slash
        `${(rootUrl || '').replace(/\/+$/, '')}/`
    );
}

// joinURL joins all arguments as URLs
function joinURL(...args) {
    const baseUrl = args[0] || '/';
    const parts = splitURL(baseUrl);
    const joinedPath = args
        .slice(1)
        .reduce((accu, x) => concatURL(accu, x), parts.path || '/');

    return concatURL(parts.domain, joinedPath);
}

export default joinURL;
