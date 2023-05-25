/**
 * Se detta som en grund att utgå ifrån.
 * Det är helt fritt att ändra och ta bort kod om ni
 * önskar lösa problemen med andra metoder.
 */
let lcd = null; // displayen

let isComma = false;

let memory = 0; // Lagrat/gamlat värdet från display
let arithmetic = null; // Vilken beräkning som skall göras +,-, x eller /

function init() {
    lcd = document.getElementById('lcd');
    let keyBoard = document.getElementById('keyBoard')
    keyBoard.onclick = buttonClick;
}

/**
 * Händelsehanterare för kalkylatorns tangentbord
 */
function buttonClick(e) {
    let btn = e.target.id; //id för den tangent som tryckte ner


    // kollar om siffertangent är nedtryckt
    if (btn.substring(0, 1) === 'b') {
        let digit = btn.substring(1, 2); // plockar ut siffran från id:et   
        addDigit(digit);
    }

    else { // Inte en siffertangent, övriga tangenter.
        if (btn === "clear") {
            memClear();
        }

        else if (btn === "enter") {
            calculate();
        }

        else if (btn === "comma") {
            addComma();
        }

        else {
            setOperator(btn);
        }
    }
}

/**
 *  Lägger till siffra på display.
 */
function addDigit(digit) {
    lcd.value += digit;
    console.log(digit);
}

/**
 * Lägger till decimaltecken
 */
function addComma() {
    if (!isComma) {
        lcd.value += ".";
        isComma = true;
        
    }
}

/**
 * Sparar operator.
 * +, -, *, /
 */
function setOperator(operator) {
    console.log(operator);
    memory = Number(lcd.value);
    arithmetic = operator;
    clearLCD();
}

/**
 * Beräknar ovh visar resultatet på displayen.
 */
function calculate() {
    if (arithmetic === null || memory === null || lcd.value === null)
        return;

    let finalValue;

    if (arithmetic === "add") {
        finalValue = memory + Number(lcd.value);
    }

    else if (arithmetic === "mul") {
        finalValue = memory * Number(lcd.value);
    }

    else if (arithmetic === "div") {
        finalValue = memory / Number(lcd.value);

    }

    else if (arithmetic === "sub") {
        finalValue = memory - Number(lcd.value);

    }
    console.log(finalValue);
    lcd.value = finalValue;
}

/** Rensar display */
function clearLCD() {
    lcd.value = '';
    isComma = false;
}

/** Rensar allt, reset */
function memClear() {
    memory = 0;
    arithmetic = null;
    clearLCD();
}

window.onload = init;
