// عمليات الآلة الحاسبة
function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = `النتيجة: ${num1 + num2}`;
}

function subtract() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = `النتيجة: ${num1 - num2}`;
}

function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = `النتيجة: ${num1 * num2}`;
}

function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('result').innerText = "لا يمكن القسمة على صفر!";
    } else {
        document.getElementById('result').innerText = `النتيجة: ${num1 / num2}`;
    }
}

// حقائق رياضية عشوائية
const facts = [
    "الصفر هو الرقم الوحيد الذي لا يعتبر موجباً أو سالباً.",
    "باي (π) هو رقم غير نسبي وقيمته تقريباً 3.14159.",
    "الأعداد الأولية هي الأعداد التي لا تقبل القسمة إلا على نفسها وعلى الواحد.",
    "فيثاغورس كان أول من اكتشف العلاقة بين أطوال أضلاع المثلث القائم."
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').innerText = facts[randomIndex];
}
