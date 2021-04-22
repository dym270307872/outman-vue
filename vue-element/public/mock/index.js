import { mock } from 'mockjs';
import path from 'path';

const jsonList = readJson('mock/data/mockList.json');

if (jsonList) {
  jsonList.forEach(fileName => {
    //解析json
    let json = readJson(path.join('mock/data', fileName));

    //是对象则注册mock
    if (!(json instanceof Array) && json instanceof Object) {
      if (json.method) {
        mock(json.path, json.method, mock(json.data));
      } else {
        mock(json.path, mock(json.data));
      }
    } else {
      console.warn('mock文件：' + fileName + '格式错误，请检查！');
    }
  });

}

function readJson(uri) {
  var xmlRequest = new XMLHttpRequest();
  try {
    xmlRequest.open("get", uri, false);
    xmlRequest.send(null);
    let data = JSON.parse(xmlRequest.responseText)
    return data;
  } catch (e) {
    console.warn('mock文件：' + uri + '格式错误，请检查！', e);
  }
}