import React from 'react';

function AnswerItem<Type>(props: Type) {
    const classes = ["btn "]
    const click = ()=>{
        classes.push("btn btn-outline-danger")
    }
    return (
        <div className="card m-2">
            <button type="button" className={classes.join(" ")} onClick={click}>
                This is some text within a card body.
            </button>
        </div>

    );
}

export default AnswerItem;
