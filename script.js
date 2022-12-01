let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');
let myQuestions = [{
        question: "Do you mind __________________ me a hand?",
        answers: {
            a: 'to give',
            b: 'giving',
        },
        correctAnswer: 'b'
    },
    {
        question: "He decided __________________ biology.",
        answers: {
            a: 'to give',
            b: 'giving',
        },
        correctAnswer: 'a'
    }, {
        question: "He enjoys __________________ a bath in the evening.",
        answers: {
            a: 'to have',
            b: 'having',
        },
        correctAnswer: 'b'
    }, {
        question: "I've finished __________________ come and eat!",
        answers: {
            a: 'to cook',
            b: 'cooking',
        },
        correctAnswer: 'b'
    }, {
        question: "She avoided __________________ him about her plans.",
        answers: {
            a: 'to tell',
            b: 'telling',
        },
        correctAnswer: 'b'
    }, {
        question: "They got to the train station too late _______________ the train, so they will have to leave tomorrow.",
        answers: {
            a: 'to catch',
            b: 'catching',
        },
        correctAnswer: 'a'
    }, {
        question: "I need ___________ a quick phone call. I'll be back in a second.",
        answers: {
            a: 'to make',
            b: 'making',
        },
        correctAnswer: 'a'
    }, {
        question: "I tried  ____________ the exotic fruit durian while I was in Malaysia, but I didn't like it at all.",
        answers: {
            a: 'to eat',
            b: 'eating',
        },
        correctAnswer: 'b'
    }, {
        question: "Sam warned me not______________ anything during the tea ceremony, so I didn't say a word.",
        answers: {
            a: 'to say',
            b: 'saying',
        },
        correctAnswer: 'a'
    },
];


function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        // we'll need a place to store the output and the answer choices
        let output = [];
        let answers;

        // for each question...
        for (let i = 0; i < questions.length; i++) {

            // first reset the list of answers
            answers = [];

            // for each available answer to this question...
            for (letter in questions[i].answers) {

                // ...add an html radio button
                answers.push(
                    '<label>' +
                    '<input type="radio" name="question' + i + '" value="' + letter + '">' +
                    letter + ': ' +
                    questions[i].answers[letter] +
                    '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>' +
                '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {

        // gather answer containers from our quiz
        let answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let userAnswer = '';
        let numCorrect = 0;

        // for each question...
        for (let i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].style.color = 'green';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show the questions
    showQuestions(questions, quizContainer);

    // when user clicks submit, show results
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);