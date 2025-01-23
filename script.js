const calculatorContainer=document.getElementById('claculator_container');
const displayArea=document.getElementById('display_area');

calculatorContainer.addEventListener('click', (e) => {
    if (e.target.nodeName == 'BUTTON') {
        switch (e.target.textContent) {
            case 'C':
                clear();
                break;
            case 'DEL':
                deleteOneValue();
                break;
            case '=':
                evaluate();
                break;
            default:
                addToDisplayArea(e.target.textContent);
        }
    }
});

function clear() {
    displayArea.textContent = '';
}

function addToDisplayArea(value) {
    displayArea.textContent += value;
}

function deleteOneValue() {
    displayArea.textContent = displayArea.textContent.slice(0, -1);
}

function evaluate() {
    try {
        displayArea.textContent = eval(displayArea.textContent);
    } catch (error) {
        displayArea.textContent = 'Error';
    }
}
function evaluate() {
    try {
       
        let calculation = eval(displayArea.textContent);
        displayArea.textContent = calculation;
    } catch (error) {
        displayArea.textContent = 'Invalid Operation';
        console.error(error);
    }
}
