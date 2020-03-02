var firstNameInput = document.getElementById('first-name')
var lastNameInput = document.getElementById('last-name')
var describeBoxInput = document.getElementById('describe-box')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var finalPreview = document.getElementById('final-preview')
var finalGenerated = document.getElementById('final-generated')

var updatefinalPreview = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var describeBox = describeBoxInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  finalPreview.innerHTML =
    '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>' +
    '<p>' + describeBox + '</p>' +
    '<p>If you\'re interested in a date, you can email me at ' +
    '<a href="mailto:email" target="_blank">' + email + '</a>' +
    ' or give me a call at' +
    ' <a href="tel:phone" target="_blank">' + phone + '</a>.' +
    '</p>'
}

var updatefinalGenerated = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var describeBox = describeBoxInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  finalGenerated.textContent =
    '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>' +
    '<p>' + describeBox + '</p>' +
    '<p>If you\'re interested in a date, you can email me at ' +
    '<a href="mailto:email" target="_blank">' + email + '</a>' +
    ' or give me a call at' +
    ' <a href="tel:phone" target="_blank">' + phone + '</a>.' +
    '</p>'
}
firstNameInput.addEventListener('input', updatefinalPreview)
lastNameInput.addEventListener('input', updatefinalPreview)
describeBoxInput.addEventListener('input', updatefinalPreview)
emailInput.addEventListener('input', updatefinalPreview)
phoneInput.addEventListener('input', updatefinalPreview)
firstNameInput.addEventListener('input', updatefinalGenerated)
lastNameInput.addEventListener('input', updatefinalGenerated)
describeBoxInput.addEventListener('input', updatefinalGenerated)
emailInput.addEventListener('input', updatefinalGenerated)
phoneInput.addEventListener('input', updatefinalGenerated)
