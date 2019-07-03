export function getParamsFormUrl(URL) {
    URL = URL || window.location;
    let paramObject = {};
    let paramStr = URL.href.split('?')[1];
    if (!paramStr) return {};
    let params = paramStr.split('&');
    for (let i = 0; i < params.length; i++) {
        let pair = params[i].split('=');
        paramObject[pair[0]] = pair[1];
        paramObject[pair[0]] = decodeURI(paramObject[pair[0]]);
    }
    return paramObject;
}
