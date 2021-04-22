var xmlRequest = new XMLHttpRequest();
const readJson = (uri) => {
    try {
        xmlRequest.open("get", uri, false);
        xmlRequest.send(null);
        let data = JSON.parse(xmlRequest.responseText)
        return data;
    } catch (e) {
        console.warn('mock文件：' + uri + '格式错误，请检查！', e);
    }
}

export { readJson };