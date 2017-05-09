// urlSplit splits a url into [`proto://domain` and `/path`]
function urlSplit(url) {
    var protoIdx = url.indexOf('://');
    // Plain path
    if(protoIdx === -1) {
        return {
            domain: '',
            path: url,
        };
    }

    var slashIdx = url.indexOf('/', protoIdx+3);
    // No slash, so plain domain
    if(slashIdx === -1) {
        return {
            domain: url,
            path: '',
        };
    }

    // Split path
    return {
        domain: url.slice(0, slashIdx),
        path: url.slice(slashIdx)
    };
}

module.exports = urlSplit;
