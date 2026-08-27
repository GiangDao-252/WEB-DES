//lab 1

const predictionSamples = [
    {id: 1, name: "Toán", score: 9},
    {id: 2, name: "Văn", score: 9},
    {id: 3, name: "Anh", score: 8.2},
    {id: 4, name: "Lý", score: 9.5},
    {id: 5, name: "Hoá", score: 6.25},
];

const passedSamples = [];

for (let i = 0; i < predictionSamples.length; i++) {
    if (predictionSamples[i].score > 7) {
        passedSamples.push(predictionSamples[i]);
    }
}

console.log("Các mẫu đạt yêu cầu:", passedSamples);

function sumScores(sample) {
    let total = 0;
    for (let i = 0; i < sample.length; i++) {
        total += sample[i].score;
    }
    return total;
}

console.log("Tổng điểm 5 môn: ", sumScores(predictionSamples));

function highestScore(sample) {
    if (sample.length === 0) return null;

    let max = sample[0]

    for (let i = 0; i < sample.length; i++) {
        if (sample[i].score > max.score) {
            max = sample[i];
        }
    }
    return max
}

console.log("Điểm cao nhất là môn: ", highestScore(predictionSamples));

const sumArrow = (sample) =>{
    let total = 0;
    for ( let i = 0; i < sample.length; i++) {
        total += sample[i].score;
    }
    return total;
}

console.log("Tổng (dùng Arrow Function):", sumArrow(predictionSamples));


//lab2
const form = document.getElementById("scoreForm");
const errorArea = document.getElementById("errorArea");

function getPassedSubjects(samples) {
    const passedNames = [];
    for (let i = 0; i < samples.length; i++) {
        if (samples[i].score > 7) {
            passedNames.push(samples[i].name);
        }
    }
    return passedNames.join(", "); // Gộp mảng thành chuỗi cách nhau bởi dấu phẩy
}

function updateDisplay() {
    document.getElementById("passedSubjectsResult").textContent = getPassedSubjects(predictionSamples);
    document.getElementById("totalScoreResult").textContent = sumArrow(predictionSamples);
    const bestSubject = highestScore(predictionSamples);
    if (bestSubject) {
        document.getElementById("highestScoreResult").textContent = `${bestSubject.name} (${bestSubject.score} điểm)`;
    }
}

updateDisplay();

form.addEventListener("submit", function(event){
    event.preventDefault();
    errorArea.innerHTML = "";

    const nameInput = document.getElementById("subjectName").value.trim();
    const scoreInput = Number(document.getElementById("subjectScore").value);

    if (scoreInput<0 || scoreInput > 10) {
        errorArea.innerHTML = "<p class='error'>Điểm số phải từ 0 đến 10.</p>";
        return;
    }

    predictionSamples.push({
        id: predictionSamples.length + 1,
        name: nameInput,
        score: scoreInput
    });

    updateDisplay();

    form.reset();
})
