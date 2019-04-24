let btnIds = [['res',''], ['btn0', '0'], ['btn1', '1'], ['btnClr', 'C'],['btnEql', '='],['btnSum', '+'],['btnSub','-'],['btnMul','*'],['btnDiv','/']];

let container = document.getElementById('btns');

// add the buttons to the container
let btns = btnIds.map(btn => {
    let id, innerHtml = btn;
    let btnElem = document.createElement('button');
    btnElem.id = id;
    btnElem.innerHTML = innerHtml;
    if(['=', '+', '-', '*'].includes(innerHtml)){
        btnElem.className = 'operator';
    }
    container.appendChild(btnElem);
    return btnElem;
});

