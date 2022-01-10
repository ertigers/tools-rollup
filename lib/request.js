import { xml2json } from './x2js.js'

const QxRequest = (method, url, params)=> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {   // 成功
          resolve(JSON.parse(xhr.responseText));
        } else {
          let query = {
            code: -2,
            msg: '登录异常！'
          }
          resolve(query);  // 网络错误或者请求终止
        }
      }
    };

    // get
    if (method === "get" || method === "GET") {
      if (typeof params === "object") {
        // params拆解成字符串
        params = Object.keys(params)
          .map(function (key) {
            return (
              encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
            );
          })
          .join("&");
      }
      url = params ? url + "?" + params : url;
      xhr.open(method, url, true);
      xhr.timeout = 8000; // 超时时间，单位是毫秒
      // 超时
      // xhr.ontimeout = function (e) {
      //   // XMLHttpRequest 超时。在此做某事。
      // };
      xhr.send();
    }

    //post
    if (method === "post" || method === "POST") {
      xhr.open(method, url, true);
      // xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhr.setRequestHeader("Accept", "*/*");
      xhr.timeout = 8000; // 超时时间，单位是毫秒
      // 超时
      // xhr.ontimeout = function (e) {
      //   // XMLHttpRequest 超时。在此做某事。
      // };
      xhr.send(JSON.stringify(params));
    }
  });
}

const QxRequestXML = (method, url, params)=> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      // readyState为4的时候已接收完毕
      if (xhr.readyState === 4) {
        // 状态码200表示成功
        if (xhr.status === 200) {
          let responseText = xml2json(xhr.responseText)
          resolve(responseText);
        } else {
          reject(xhr.status);
        }
      }
    };

    //post
    if (method === "post" || method === "POST") {
      xhr.open(method, url, true);
      // xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhr.setRequestHeader("Accept", "*/*");
      xhr.send(JSON.stringify(params));
    }
  });
}

export { QxRequest,QxRequestXML }