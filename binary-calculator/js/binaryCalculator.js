function isWriteable(currentView, candidate) {
    let operators = ['+', '-', '*', '/'];
    let inputs = ['1', '0'];
    let lastCharacter = currentView.slice(-1);
    if (!operators.includes(lastCharacter) && !currentView.match(/[\+\-\/\*]/gi)) {
        return true;
    } else {
        if (inputs.includes(candidate)) {
            return true;
        } else {
            return false;
        }
    }
}

function getOperands(currentView) {
    let operatorLoc = currentView.search(/[\+\-\/\*]/gi);
    return {
        op1: currentView.slice(0, operatorLoc),
        op2: currentView.slice(operatorLoc + 1),
        operator: currentView[operatorLoc]
    };
}

function calculateResult(op1, op2, operator) {
    switch (true) {
        case operator === '+':
            return (parseInt(op1, 2) + parseInt(op2, 2)).toString(2);
        case operator === '-':
            return (parseInt(op1, 2) - parseInt(op2, 2)).toString(2);
        case operator === '*':
            return (parseInt(op1, 2) * parseInt(op2, 2)).toString(2);
        case operator === '/':
            return (parseInt(op1, 2) / parseInt(op2, 2)).toString(2);
    }
}

let btnIds = [
    ['btn0', '0'],
    ['btn1', '1'],
    ['btnClr', 'C'],
    ['btnEql', '='],
    ['btnSum', '+'],
    ['btnSub', '-'],
    ['btnMul', '*'],
    ['btnDiv', '/']
];

let container = document.getElementById('btns');

// add the buttons to the container
const viewport = document.getElementById('res');

let btns = btnIds.map(btn => {
    let [id, innerHtml] = btn;
    let btnElem = document.createElement('button');
    btnElem.id = id;
    btnElem.className = "btns";
    btnElem.innerHTML = innerHtml;
    if (['+', '-', '*', '/'].includes(innerHtml)) {
        btnElem.className += ' operator';
    }
    if (!['C', '='].includes(innerHtml)) {
        btnElem.onclick = function (e) {
            e.preventDefault();
            if (isWriteable(viewport.innerHTML, e.target.innerHTML)) {
                viewport.innerHTML += innerHtml;
            }
            return;
        }
    } else if (innerHtml === 'C') {
        btnElem.onclick = function (e) {
            e.preventDefault();
            viewport.innerHTML = '';
            return;
        }

    } else if (innerHtml === '=') {
        btnElem.onclick = function (e) {
            e.preventDefault();
            let {
                op1,
                op2,
                operator
            } = getOperands(viewport.innerHTML);
            let result = calculateResult(op1, op2, operator);
            viewport.innerHTML = result;
            return;
        }
    }

    container.appendChild(btnElem);
    return btnElem;
});