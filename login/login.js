'use strict';

document.getElementById('form').onsubmit = function() {
  const entered_email = document.getElementById('form').email.value
  console.log(entered_email)
};