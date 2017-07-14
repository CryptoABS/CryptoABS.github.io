function httpGetAsync(theUrl, callback) {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 
  xmlHttp.send(null);
}

function httpPostAsync(theUrl, params, callback) {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("Post", theUrl, true); // true for asynchronous 
  // Send the proper header information along with the request
  xmlHttp.setRequestHeader("Content-type", "application/json");
  // xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  // xmlHttp.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  // xmlHttp.setRequestHeader("header", "Accept: application/json");

  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.send(JSON.stringify(params));
}

function responseText(response) {
  console.log(response);
}

function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function subscribeEmail() {
  let emailInput = document.getElementsByClassName("email-input")[0].value;
  if (validateEmail(emailInput)) {
    let postBody = {
      email: emailInput
    };
    httpPostAsync(url.subscribe, postBody, responseText);
  }
}

/**
 * Various variables
 */
var domain = 'https://2p7zpu5xsj.execute-api.ap-southeast-1.amazonaws.com';
var env = '/dev';
var version = '/v1';
var subscribedEmail = document.getElementsByClassName("email-input");
var expiredTime = new Date("2017-08-04T09:00:00.000Z").getTime();
var currentTime = new Date().getTime();
var url = {
  health: `${domain}${env}${version}/mail/health`,
  subscribe: `${domain}${env}${version}/mail/subscribe`,
  subscribers: `${domain}${env}${version}/mail/subscribers`,
  validation: `${domain}${env}${version}/mail/validation`,
};
// console.log(url.health)
// test server
// httpGetAsync(url.health, responseText);
// httpGetAsync(url.subscribers, responseText);
// httpPostAsync(url.subscribe, postBody, responseText);
// httpGetAsync(url.health, responseText);
// httpGetAsync(url.health, responseText);

$('.clock').FlipClock((expiredTime - currentTime) / 1000, {
  clockFace: 'DailyCounter',
  countdown: true,
});

/**
 * The function for Language Switcher
 */
$("select.language-switcher").change(() => {
  let locale = $("select.language-switcher option:selected").val();
  window.location.assign(locale == "en-US" ? `./` : `./index_${locale}.html`);
});

/**
 * The function for buy token modal
 */

$('a[href="#agreeModal"]').click(function(event) {
  event.preventDefault();
  $(this).modal({
    fadeDuration: 300,
    fadeDelay: 0.50
  });
});

$('a[href="#investModal"]').click(function(event) {
  event.preventDefault();
  $(this).modal({
    fadeDuration: 300,
    fadeDelay: 0.50
  });
});

