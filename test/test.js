import scoreResult from '../index.js';

const test = QUnit.test;

test('all answers are wrong', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const questionOne = 'blue';
    const questionTwo = 'green';
    const questionThree = 'yellow';
    const questionFour = 'hello';
    const questionFive = 'whyyy';
    const expected = 0;

     //Act
     // Call the function you're testing and set the result to a const
    const result = scoreResult(questionOne, questionTwo, questionThree, questionFour, questionFive);
    
    //Assert
    assert.equal(result, expected);
 
});

test('all answers right', (assert) => {
     //Arrange
    const questionOne = 'apples';
    const questionTwo = 'mental health';
    const questionThree = 'sloths';
    const questionFour = 'no';
    const questionFive = 'yes';
    const expected = 5;
    
     //Act
    const result = scoreResult(questionOne, questionTwo, questionThree, questionFour, questionFive);
    
     //Assert
    assert.equal(result, expected);
});

test('does lowercase work correctly', (assert) => {
    //Arrange
    const questionOne = 'NIght';
    const questionTwo = 'rainbOWs';
    const questionThree = 'oNe';
    const questionFour = 'FRuit';
    const questionFive = 'a lOt';
    const expected = 5;

    //Act
    const result = scoreResult(questionOne, questionTwo, questionThree, questionFour, questionFive);
    
    //Assert
    assert.equal(result, expected);
});

