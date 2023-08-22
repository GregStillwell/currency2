import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency';

function getCurrency(USD, otherCurr) {
  Currency.getCurrency(USD, otherCurr)
    .then(function (response) {
      if (response.conversion_rates) {
        convert(response, USD, otherCurr)
      } else {
        printError(response);
      }
    });
}




// UI logic
function convert(response, USD, otherCurr) {
  const rates = response.conversion_rates
  const conversion = Math.floor(rates[otherCurr] * USD);
  if (conversion === undefined) {
    document.getElementById("showResponse").innerText = `We couldn't get ${otherCurr} currency`;
  } else if (isNaN(conversion)) {
    document.getElementById("showResponse").innerText = `We couldn't get ${otherCurr} currency`;
  } else {
    document.getElementById("showResponse").innerText = `$${USD} = ${conversion} ${otherCurr}`;
  }


}


function printError(error) {
  document.getElementById("showResponse").innerText`We ran into a problem try again ${error}.`
}

function handleForm(event) {
  event.preventDefault()
  const USD = document.getElementById("Currency").value;
  const otherCurr = document.getElementById("otherCurrency").value;
  document.getElementById("Currency").value = null;
  document.getElementById("otherCurrency").value = null;
  getCurrency(USD, otherCurr);
}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handleForm);
});


