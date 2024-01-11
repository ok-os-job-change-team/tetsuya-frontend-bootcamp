'use strict';

const email = readCookie('id');
const password = readCookie('pass');

// cookieの読み取り
function readCookie(property) {
  const cookies = document.cookie;
  const array = cookies.split('; ');

  let cookie = {};
  array.forEach(function(value) {
    const content = value.split('=');
    cookie[content[0]] = content[1]; // cookieオブジェクトにプロパティを追加
  })
  return(cookie[property]);
}

// URL'?'以降取得
function getUrl() {
  const url = location.href;
  const nextSharpNum = url.indexOf('?') + 1;
  return(url.substring(nextSharpNum));
}

// cookieとURLを比較
function checkCookie() {
  if(getUrl() !== readCookie('id')) {
    alert('ログインセッションが切れています。');
    location.href = 'index.html';
  }
}

// クッキー確認
checkCookie();

// email,passwordを挿入
document.getElementById('my_email').insertAdjacentHTML('beforeend', email);
document.getElementById('my_password').innerHTML = password;