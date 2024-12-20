const mathGradeInput = document.getElementById('mathGrade');
const englishGradeInput = document.getElementById('englishGrade');
const submitBtn = document.getElementById('submitBtn');
const gradesTable = document.getElementById('gradesTable').querySelector('tbody');
const mathAvgCell = document.getElementById('mathAvg');
const englishAvgCell = document.getElementById('englishAvg');
const overallAvgCell = document.getElementById('overallAvg');

let mathTotal = 0;
let englishTotal = 0;
let rowCount = 0;

submitBtn.addEventListener('click', () => {
    const mathGrade = parseFloat(mathGradeInput.value);
    const englishGrade = parseFloat(englishGradeInput.value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert('Please enter valid numbers for both grades.');
        return;
    }

    const rowAverage = ((mathGrade + englishGrade) / 2).toFixed(2);

    const newRow = document.createElement('tr');
    const rowIndex = rowCount + 1;
    newRow.innerHTML = `
        <td>${rowIndex}</td>
        <td>${mathGrade}</td>
        <td>${englishGrade}</td>
        <td>${rowAverage}</td>
    `;
    gradesTable.appendChild(newRow);

    mathTotal += mathGrade;
    englishTotal += englishGrade;
    rowCount++;

    mathAvgCell.textContent = (mathTotal / rowCount).toFixed(2);
    englishAvgCell.textContent = (englishTotal / rowCount).toFixed(2);
    overallAvgCell.textContent = ((mathTotal + englishTotal) / (rowCount * 2)).toFixed(2);

    mathGradeInput.value = '';
    englishGradeInput.value = '';
});
