import { mock } from 'mockjs';

//遍历文件夹下内容
const mockFiles = require.context('./data', true, /\.json$/)
mockFiles.keys().forEach(filePath => {
  let fileValue = mockFiles(filePath);

  if (fileValue instanceof Array) {
    //是array则遍历注册mock
    fileValue.forEach(jsonObject => {
      registerMock(jsonObject);
    });
  } else if (!(fileValue instanceof Array) && fileValue instanceof Object) {
    //是对象则注册mock
    registerMock(fileValue);
  } else {
    let fileName = filePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    console.warn('mock文件：' + fileName + '格式错误，请检查！');
  }
});


function registerMock(json) {
  if (json.method) {
    mock(RegExp(json.path + '(?=\\\\?.*)'), json.method, mock(json.data));
  } else {
    mock(RegExp(json.path + '(?=\\\\?.*)'), mock(json.data));
  }
}
