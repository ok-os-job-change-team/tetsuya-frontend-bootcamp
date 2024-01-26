'use strict';

const button = document.getElementById('button');

// ボタンクリック時に入力されたemailとpasswordを取得
button.addEventListener('click', function(){
  const searchEmail = document.querySelector('#email').value;
  const searchPass = document.querySelector('#password').value;
  login(searchEmail, searchPass);
});

// emailとpasswordのチェック
function login(email, pass) {
  const registeredEmail = 'tetsuya@example.com';
  const registeredPass = 'hogehuga';
  if(email === registeredEmail && pass === registeredPass) {
    setCookie(registeredEmail, registeredPass);
    location.href = 'mypage.html?' + registeredEmail; //mypage.htmlに遷移
  } else {
    alert('メールアドレスまたはパスワードが異なります。');
  }
}

function setCookie(email, pass) {
  if (navigator.cookieEnabled) {
    // emailをクッキーに設定・期限10秒
    document.cookie = 'id=' + email + '; max-age=10';
    document.cookie = 'pass=' + pass + '; max-age=10';
  }
}