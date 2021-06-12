import React from 'react';
import Answer1 from './Answer1';


function Answer1b(props){
    return (
        <>
            <Answer1 
            letter="a" 
            answer={props.question.answer_a} 
            handleClick={props.handleClick} 
            selected={props.currentAnswer === 'a'} />
            <br />
            <Answer1 
            letter="b" 
            answer={props.question.answer_b} 
            handleClick={props.handleClick} 
            selected={props.currentAnswer === 'b'} />
            <br />
            <Answer1
            letter="c" 
            answer={props.question.answer_c} 
            handleClick={props.handleClick} 
            selected={props.currentAnswer === 'c'}/>

        </>


    );

}

export default Answer1b;