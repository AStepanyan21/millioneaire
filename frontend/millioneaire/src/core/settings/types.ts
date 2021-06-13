export type AnswerType = {
    correct_answer: boolean
    answer: string
}
export type quizType = {
    question: string
    answer: AnswerType
    point: number
}
