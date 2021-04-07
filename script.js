const quizDB = [
    {
        question: "Q1:Smaple Queation 1?",
        a: "option1",
        b: "option2",
        c: "option3",
        d: "option4",
        ans: "ans4"
    },
    {
        question: "Q1:Smaple Queation 2?",
        a: "option1",
        b: "option2",
        c: "option3",
        d: "option4",
        ans: "ans1"
    },
    {
        question: "Q1:Smaple Queation 3?",
        a: "option1",
        b: "option2",
        c: "option3",
        d: "option4",
        ans: "ans4"
    },
    {
        question: "Q1:Smaple Queation 4?",
        a: "option1",
        b: "option2",
        c: "option3",
        d: "option4",
        ans: "ans1"
    }
]
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
// console.log(answers);
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
   question.innerText =  questionList.question;
   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.c;
   option4.innerText = questionList.d;
}
loadQuestion();
const getCheckAnswer = () => {
    let answer ;
    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
}
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    }
    questionCount++;
    deselectAll()
    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDB.length} :)</h3>
        <button class = "btn" onclick = "location.reload()">Play Again</button>
        `;
        showScore.classList.remove('showArea')
    }
});
