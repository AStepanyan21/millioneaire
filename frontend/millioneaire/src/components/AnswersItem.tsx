import React, {useState} from 'react';


type AnswerType = {
    correct_answer: boolean
    answer: string
}

type AnswerItemType = {
    answer: AnswerType
}

function AnswerItem(props: AnswerItemType) {
    const [btnColor, setBtnColor] = useState(["btn "])

    const click = () => {
        if (props.answer.correct_answer) {
            setBtnColor(["btn-outline-success", ...btnColor])
            setTimeout(() => {
                const classes = btnColor.filter((classes) => {
                    return classes !== "btn-outline-success"
                })
                setBtnColor(classes)
            }, 2000)
        } else {
            setBtnColor(["btn-outline-danger", ...btnColor])
            setTimeout(() => {
                const classes = btnColor.filter((classes) => {
                    return classes !== "btn-outline-danger"
                })
                setBtnColor(classes)
            }, 2000)
        }

    }
    return (
        <div className="card m-2">
            <button type="button" className={btnColor.join(" ")} onClick={click}>
                {props.answer.answer}
            </button>
        </div>

    );
}

export default AnswerItem;
