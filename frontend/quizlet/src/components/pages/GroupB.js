import React, {useState} from 'react';
import Progress2 from './QnAs/Progress2';
import Question2 from './QnAs/Question2';
import Answer2b from './QnAs/Answer2b';

function GroupB() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [answers, setAnswers] = useState([]);
    const [error, setError] = useState('');
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 1,
            question: "What does CSS stand for?",
            answer_a: "Colorful Style Sheets",
            answer_b: "Computer Style Standards",
            answer_c: "Cascading Style Sheets",
            correct_answer: "c",
        },
        {
            id: 2,
            question: "Which HTML tag is used to define an internal style sheet?",
            answer_a: "<style>",
            answer_b: "<css>",
            answer_c: "<script>",
            correct_answer: "a",
        },
        {
            id: 3,
            question: "Which property is used to change the background color?",
            answer_a: "color",
            answer_b: "background-color",
            answer_c: "bgcolor",
            correct_answer: "b",
        },
        {
            id: 4,
            question: "Which CSS property controls the text size?",
            answer_a: "font-size",
            answer_b: "text-size",
            answer_c: "font-style",
            correct_answer: "a",
        },
        {
            id: 5,
            question: "When using the padding property, are you allowed to use negative values?",
            answer_a: "Yes",
            answer_b: "No",
            answer_c: "Depends",
            correct_answer: "b",
        },
    ];


    const question = questions[currentQuestion];

    const handleClick = e => {
        setCurrentAnswer(e.target.value)
        setError('');

    }; 

    const renderError = () => {
        if (!error) {
            return;
        } 
        return <div className="error">  {error} </div>;
    };

    const renderResultMark = (question, answer) => {
        if (question.correct_answer === answer.answer) {
            return <span className='correct'>Correct!</span>;
        }
        return <span className='fail'>Wrong Answer</span>;
    };


    const renderResultsData = () => {
        return answers.map( answer => {
            const question = questions.find( question => question.id === answer.questionId 
                );
                return <div key={question.id}>{question.question} - {renderResultMark(question, answer)} </div>;
              

            } 
        );

    };

    const restart = () => {
        setAnswers([]);
        setCurrentAnswer('');
        setCurrentQuestion(0);
        setShowResults(false);

    };

    const next = () => {
        const answer = {questionId:question.id, answer: currentAnswer};

        if (!currentAnswer) {
            setError('Please select an answer!');
            return;
        }

        answers.push(answer);
        setAnswers(answers);
        setCurrentAnswer('');

        if (currentQuestion +1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            return;

        }
        
        setShowResults(true);
    };

    if (showResults) {
        return (
            <div className='container text-center py-4' id='results'>
               <div class="row">
                    <div class="col-md-2">

                    </div>
                    <div class="col-md-10 text-center">
                        <h1> Results </h1>
                        <ul>{renderResultsData()}</ul>
                        <button className='btn btn-secondary btn-sm' onClick={restart} >
                        Restart Quiz
                        </button>
                    </div>
                    <div class="col-md-0">

                    </div>                  

                </div>

                <br />
                <br />
                <br />
                <br />
            </div>
        )
    } else {

        return (
            <div className="container">
                <div class="row">
                    <div class="col-md-2">

                    </div>
                    <div class="col-md-10 text-center">
                    <h1 className="py-4"> CSS Quiz </h1>    

                    <Progress2 total={questions.length} current={currentQuestion + 1} /> 
                    <br />
                    <Question2 question={question.question} />
                    <p id='error'> {renderError()} </p>
                    <br />
                    <Answer2b question={question} currentAnswer={currentAnswer} handleClick={handleClick} />
                    <br />
                    <button className='btn btn-secondary btn-sm' onClick={next} >
                    Submit Answer
                    </button>
                    <br />
                    <br />
                    <br />
                    <br />

                    </div>
                    <div class="col-md-0">

                    </div>
                    
                    <br />
                    <br />
                    <br />
                    <br />
                </div>



            </div>
        );
    }

}

export default GroupB;