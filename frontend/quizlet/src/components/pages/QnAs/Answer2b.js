import React from 'react';
import Answer2 from './Answer2';


function Answer2b(props){
    return (
        <>
            <Answer2 
            letter="a" 
            answer={props.question.answer_a} 
            handleClick={props.handleClick} 
            selected={props.currentAnswer === 'a'} />
            <br />
            <Answer2 
            letter="b" 
            answer={props.question.answer_b} 
            handleClick={props.handleClick} 
            selected={props.currentAnswer === 'b'} />
            <br />
            <Answer2
            letter="c" 
            answer={props.question.answer_c} 
            handleClick={props.handleClick} 
            selected={props.currentAnswer === 'c'}/>

        </>


    );

}

export default Answer2b;