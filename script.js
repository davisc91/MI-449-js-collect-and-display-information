var firstNameInput = document.getElementById('first-name')
var lastNameInput = document.getElementById('last-name')
var describeBoxInput = document.getElementById('describe-box')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var finalPreview = document.getElementById('final-preview')
var finalGenerated = document.getElementById('final-generated')

var paraFunction = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var describeBox = describeBoxInput.value
  var email = emailInput.value
  var phone = phoneInput.value
  var para =
  '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>' +
  '<p>' + describeBox + '</p>' +
  '<p>If you\'re interested in a date, you can email me at ' +
  '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' +
  ' or give me a call at' +
  ' <a href="tel:' + phone + '" target="_blank">' + phone + '</a>.' +
  '</p>'
  finalPreview.innerHTML = para
  finalGenerated.textContent = para
}

firstNameInput.addEventListener('input', paraFunction)
lastNameInput.addEventListener('input', paraFunction)
describeBoxInput.addEventListener('input', paraFunction)
emailInput.addEventListener('input', paraFunction)
phoneInput.addEventListener('input', paraFunction)
