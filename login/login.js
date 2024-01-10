'use strict';

const button = document.getElementById('button');

// ボタンクリック時に入力されたemailとpasswordを取得
button.addEventListener('click', function(){
  const searchEmail = document.querySelector('#email').value;
  const searchPass = document.querySelector('#password').value;
  setCookie(searchEmail);
  login(searchEmail, searchPass);
});

// emailとpasswordのチェック
function login(email, pass) {
  if(email === 'tetsuya@example.com' && pass === 'hogehuga') {
    window.open('mypage.html'); // mypage.htmlを開く
  } else {
    alert('メールアドレスまたはパスワードが異なります。');
  }
}

function setCookie(email) {
  if (navigator.cookieEnabled) {
    document.cookie = "id=123"  // + email;
    alert(document.cookie);
  }
}
