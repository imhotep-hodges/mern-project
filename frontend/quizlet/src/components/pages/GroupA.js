import React, {useState} from 'react';
import Progress1 from './QnAs/Progress1';
import Question1 from './QnAs/Question1';
import Answer1b from './QnAs/Answer1b';

function GroupA() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [answers, setAnswers] = useState([]);
    const [error, setError] = useState('');
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 1,
            question: "What does HTML stand for?",
            answer_a: "Hyper Tool Machine Language",
            answer_b: "Hyper Text Markup Language",
            answer_c: "Happy Today Mad Later",
            correct_answer: "b",
        },
        {
            id: 2,
            question: "Which HTML element gives us the largest heading?",
            answer_a: "<h4>",
            answer_b: "<heading12>",
            answer_c: "<h1>",
            correct_answer: "c",
        },
        {
            id: 3,
            question: "What is the correct format for creating a Hyperlink in HTML?",
            answer_a: "<a>'http://www.webdevquiz.com'</a>",
            answer_b: "<a href='http://www.webdevquiz.com'>Link Name</a>",
            answer_c: "<a url='http://www.webdevquiz.com'>Link Name</a>",
            correct_answer: "b",
        },
        {
            id: 4,
            question: "Which element is used to create a Table in HTML?",
            answer_a: "<tl>",
            answer_b: "<tbl>",
            answer_c: "<table>",
            correct_answer: "c",
        },
        {
            id: 5,
            question: "Which element is used to create a Dropdown List?",
            answer_a: "<select>",
            answer_b: "<dropdown>",
            answer_c: "<dlist>",
            correct_answer: "a",
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



                    <h1 className="py-4"> HTML Quiz </h1>    
      
                    <Progress1 total={questions.length} current={currentQuestion + 1} /> 
                    <br />
                    <Question1 question={question.question} />
                    <p id='error'> {renderError()} </p>
                    <br />
                    <Answer1b question={question} currentAnswer={currentAnswer} handleClick={handleClick} />
                    <br />
                    <button className='btn btn-secondary btn-sm' onClick={next} >
                    Submit Answer
                    </button>
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



export default GroupA;