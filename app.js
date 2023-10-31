var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submit = document.querySelector('#submit-btn');
var outputBox = document.getElementById('resultText');
var Reset = document.querySelector('.reset');
function submitHandler(e) {
    e.preventDefault();
    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;
    calculateProfitAndLoss(ip, qty, curr)
}
function calculateProfitAndLoss(initial, quantity, current) {
   
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial * 100);
        outputBox.style.color = 'red'
        outputBox.innerHTML = `Hey the loss is ${loss} and the percentage is ${Math.abs(lossPercentage.toFixed(2))}% 😭`
    }
    else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        outputBox.style.color = 'green'
        outputBox.innerHTML = `Hey the Profit is ${profit} and the percentage is ${Math.abs(profitPercentage.toFixed(2))}% 😄`
    }
    else {
        outputBox.style.color = 'yellow'
        outputBox.innerHTML = `No pain no gain no gain no pain ! 😃`;
    }
}
function resetInputs(event) {
    event.preventDefault();
    initialPrice.value = ''
    stocksQuantity.value = ''
    currentPrice.value = ''
}
Reset.addEventListener('click', resetInputs);
submit.addEventListener('click', submitHandler);