import React, {useState} from 'react';
import Progress3 from './QnAs/Progress3';
import Question3 from './QnAs/Question3';
import Answer3b from './QnAs/Answer3b';

function GroupC() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [answers, setAnswers] = useState([]);
    const [error, setError] = useState('');
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 1,
            question: '"Javascript the same as Java"',
            answer_a: "True",
            answer_b: "False",
            answer_c: "Depends",
            correct_answer: "b",
        },
        {
            id: 2,
            question: "Inside which HTML element do we put the JavaScript?",
            answer_a: "<script>",
            answer_b: "<javascript>",
            answer_c: "<code>",
            correct_answer: "a",
        },
        {
            id: 3,
            question: "How do we write an IF statement in JavaScript?",
            answer_a: "if x == y then",
            answer_b: "if x = y",
            answer_c: "if (x === y)",
            correct_answer: "c",
        },
        {
            id: 4,
            question: "How does a WHILE loop start?",
            answer_a: "while (x = 10)",
            answer_b: "while x = 1 to 10",
            answer_c: "while (x <= 20)",
            correct_answer: "c",
        },
        {
            id: 5,
            question: "What is the correct way to write a JavaScript array?",
            answer_a: 'let x = (1: "1", 2: "2", 3: "3" )',
            answer_b: "let x = [1, 4, 7, 10]",
            answer_c: "let x = {1, 3, 5, 7}",
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


                        <h1 className="py-4"> Javascript Quiz </h1>    
    
      
                        <Progress3 total={questions.length} current={currentQuestion + 1} /> 
                        <br />
                        <Question3 question={question.question} />
                        <p id='error'> {renderError()} </p>
                        <br />
                        <Answer3b question={question} currentAnswer={currentAnswer} handleClick={handleClick} />
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



export default GroupC;