function scoreResult(questionOne, questionTwo, questionThree, questionFour, questionFive) {
    
    questionOne = questionOne.toLowerCase();
    questionTwo = questionTwo.toLowerCase();
    questionThree = questionThree.toLowerCase();
    questionFour = questionFour.toLowerCase();
    questionFive = questionFive.toLowerCase();
    

    let score = 0;   


    if(questionOne === 'apples') {
        score += 1;
    }

    if(questionTwo === 'mental health') {
        score += 1;
    }

    if(questionThree === 'sloth' || questionThree === 'sloths') {
        score += 1;
    }

    if(questionFour === 'no') {
        score += 1;
    }

    if(questionFive === 'yes') {
        score += 1;
    }

    return score;

}
export default scoreResult;