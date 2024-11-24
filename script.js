let currentInput = '';
let previousInput = '';
let operation = null;

const display = document.getElementById('display');

// إضافة رقم إلى شاشة الآلة الحاسبة
function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

// إضافة نقطة عشرية
function appendDecimalPoint() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

// تعيين العملية الحسابية (جمع، طرح، ضرب، قسمة، رفع للأس، جذر تربيعي)
function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

// حساب النتيجة بناءً على العملية المختارة
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error'; // التعامل مع القسمة على صفر
            } else {
                result = prev / current;
            }
            break;
        case '^': // عملية رفع للأس
            result = Math.pow(prev, current);
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    display.value = currentInput;
}

// حساب الجذر التربيعي
function calculateSquareRoot() {
    if (currentInput === '') return;
    const current = parseFloat(currentInput);
    if (current < 0) {
        display.value = 'Error'; // لا يمكن حساب الجذر التربيعي لعدد سالب
    } else {
        currentInput = Math.sqrt(current).toString();
        display.value = currentInput;
    }
}

// مسح شاشة الآلة الحاسبة
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    display.value = '';
}
