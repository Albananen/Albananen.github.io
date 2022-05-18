function init() {
     lcd = document.getElementById('lcd');
     let keyBoard = document.getElementById('keyBoard')
     keyBoard.onclick = buttonClick;
 }

 /**
  * Händelsehanterare för kalkylatorns tangentbord
  */

var numbers = document.getElementsByTagName('button')
var calcArr = []
for (var i = 0; i < numbers.length; i++) {
    numbers[i].onclick = buttonClick;

}

function buttonClick(e) {
    let btn = e.target.id; //id för den tangent som tryckte ner
    console.log(e.target.innerText)

    // kollar om siffertangent är nedtryckt
    if (btn.substring(0, 1) === 'b') {
        let digit = btn.substring(1, 2); // plockar ut siffran från id:et

        switch (digit) {
            default:
                lcd.value += btn.substring(1, 2);
        }

    } else { // Inte en siffertangent, övriga tangenter.

        switch (e.target.innerText) {
            case 'CLEAR':
                lcd.value = '';
            break;
            case '+': case '*': case '-': case '/':
                lcd.value += e.target.innerText;
            break;
            case ',':
                lcd.value += e.target.innerText.replace(',', '.');
            break;
            case '=':
                calculate()
            break;
        }
    }
}

/**
  * Beräknar ovh visar resultatet på displayen.
  */
 function calculate() {
    /* Get value displayen */
    const calc = lcd.value;
    if (calc[0] === '+') {

    }
    const arithmetic = [];
    const number = [];

    var x = [];

    /* Loop through and push to either number or arithmetic  */
    for (let i = 0; i < calc.length; i++) {

        switch(calc[i]) {
            case '+': case '-': case '*': case '/':
                arithmetic.push(calc[i])
                number.push(x)
                console.log(number)
                x = []
            break;
            default:
                x = [ x, calc[i]].join("")
                if ( i == calc.length -1) { number.push(x) } /* push last number */
                console.log(x);
        }

    }

    /* reverse order of arrys */
    number.reverse();
    arithmetic.reverse();

    var result = 0

    /* Do as long as arithmetic != empty*/
    do {
        switch(arithmetic.pop()) {
            case '+':
                result = parseFloat(number.pop()) + parseFloat(number.pop())
                number.push(result);
                console.log(number)
            break;
            case '-':
                result = parseInt(number.pop()) - parseInt(number.pop())
                number.push(result);
                console.log(number)
            break;
            case '*':
                result = parseInt(number.pop()) * parseInt(number.pop())
                number.push(result);
                console.log(number)
            break;
            case '/':
                result = parseInt(number.pop()) / parseInt(number.pop())
                number.push(result);
                console.log(number)
            break;

        }

    } while (arithmetic.length != 0)

    /* display result on display */
    lcd.value = result;

}

 window.onload = init;
 
