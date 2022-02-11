var initialPrice = document.getElementById("initial-price");
var stocksQuantity = document.getElementById("stocks-quantity");
var currentPrice = document.getElementById("current-price");
var calculate = document.getElementById("calculate");
var outputBox = document.getElementById("output-box");

calculate.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  var diff = curr - ip
 
  if (diff < 0) {
    var loss = diff * qty * (-1);
    var lossPercentage = (diff / ip) * 100 * (-1);

    outputBox.innerHTML = (
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
    );
  } else if (diff > 0) {
    var profit = diff * qty;
    var profitPercentage = (diff / ip) * 100;

    outputBox.innerHTML = (
      `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    outputBox.innerHTML = (`No pain no gain and no gain no pain`);
  }
}
