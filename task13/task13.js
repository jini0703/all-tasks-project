function calculateGrade() {
    const s1 = parseFloat(document.getElementById('s1').value);
    const s2 = parseFloat(document.getElementById('s2').value);
    const s3 = parseFloat(document.getElementById('s3').value);
    const s4 = parseFloat(document.getElementById('s4').value);
    const s5 = parseFloat(document.getElementById('s5').value);

    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || isNaN(s4) || isNaN(s5)) {
        alert("Please enter scores for all 5 subjects.");
        return;
    }

    const average = (s1 + s2 + s3 + s4 + s5) / 5;
    let letterGrade = "";

    if (average >= 90 && average <= 100) {
        letterGrade = "A";
    } else if (average >= 80 && average < 90) {
        letterGrade = "B";
    } else if (average >= 70 && average < 80) {
        letterGrade = "C";
    } else if (average >= 60 && average < 70) {
        letterGrade = "D";
    } else if (average >= 0 && average < 60) {
        letterGrade = "F";
    } else {
        letterGrade = "Invalid Scores";
    }

    document.getElementById('average-text').innerText = `Average: ${average.toFixed(2)}`;
    document.getElementById('grade-text').innerText = `Grade: ${letterGrade}`;
}