import React from 'react';
import Answer3 from './Answer3';


function Answer3b(props){
    return (
        <>
            <Answer3 
            letter="a" 
            answer={props.question.answer_a} 
            handleClick={props.handleClick} 
            selected={props.currentAnswer === 'a'} />
            <br />
            <Answer3 
            letter="b" 
            answer={props.question.answer_b} 
            handleClick={props.handleClick} 
            selected={props.currentAnswer === 'b'} />
            <br />
            <Answer3
            letter="c" 
            answer={props.question.answer_c} 
            handleClick={props.handleClick} 
            selected={props.currentAnswer === 'c'}/>

        </>


    );

}

export default Answer3b;