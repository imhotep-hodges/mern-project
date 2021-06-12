import React from 'react';


function Answer2(props) {
    let classes = ['answer'];
    if (props.selected) {
        classes.push('selected');

    }
    return (
        <div className="answerall">       
            <button value={props.letter} className={classes.join(' ')} onClick={props.handleClick} >  
            <span> {props.letter}. </span> {props.answer}
        
            </button>
        </div>
        

    );

}

export default Answer2;