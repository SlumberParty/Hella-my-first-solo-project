import scoreResult from './score-result.js';

const questionOne = document.getElementById('question-one');
const questionTwo = document.getElementById('question-two');
const questionThree = document.getElementById('question-three');
const questionFour = document.getElementById('question-four');
const questionFive = document.getElementById('question-five');
const submitButton = document.getElementById('submit-button');
const quizResult = document.getElementById('quiz-result');

submitButton.addEventListener('click', () => {
    const questionOneA = questionOne.value;
    const questionTwoA = questionTwo.value;
    const questionThreeA = questionThree.value;
    const questionFourA = questionFour.value;
    const questionFiveA = questionFive.value;

    const score = scoreResult(questionOneA, questionTwoA, questionThreeA, questionFourA, questionFiveA);
   
    const message = 'You got ' + score + '/5 correct';
  
    quizResult.textContent = message;

});
