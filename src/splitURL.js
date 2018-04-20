// urlSplit splits a url into [`proto://domain` and `/path`]
function splitURL(url) {
    const protoIdx = url.indexOf('://');

    // Plain path
    if(protoIdx === -1) {
        return {
            domain: '',
            path: url,
        };
    }

    const slashIdx = url.indexOf('/', protoIdx+3);

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

export default splitURL;
