import {action, makeObservable, observable, toJS} from "mobx";
import {quizType} from "../settings/types";
import networtServacie from "../services/networkServaces"

class QuizzesStore {
    constructor() {
        makeObservable(this)
    }


    @observable.ref quizzes: Array<quizType> = []
    @observable game_points: number = 0
    @observable active_quiz: number = 0
    @observable.ref game_quizzes: Array<quizType> = []
    @observable isFinished: boolean = false

    @action getQuzzes: any = async () => {
        this.game_points = 0
        this.isFinished = false
        this.active_quiz = 0
        const req = await networtServacie.makeAPIGetRequest("quizzes/")
        this.quizzes = toJS(req)
    }

    @action
    trueClick = () => {
        console.log(this.game_quizzes[this.active_quiz])
        this.game_points = this.game_quizzes[this.active_quiz].point + this.game_points
    }

    @action
    click = () => {
        if (this.active_quiz === 4) {
            this.isFinished = true
        } else
            this.active_quiz++
    }

    @action
    getRandomQuizzes: any = () => {
        let size: number = this.quizzes.length
        const random_elements_list: Array<quizType> = []
        const random_index_list: Array<number> = [size + 1]
        let random_element: number = Math.floor(Math.random() * size)
        var i = 0;
        while (i < 5) {

            let states = (random_index_list.indexOf(random_element) !== -1)
            while (states) {
                random_element = Math.floor(Math.random() * size)
                states = (random_index_list.indexOf(random_element) !== -1)

            }
            random_elements_list.push(this.quizzes[random_element])
            random_index_list.push(random_element)
            random_element = Math.floor(Math.random() * size)
            i++
        }
        this.game_quizzes = random_elements_list
    }


}


export default new QuizzesStore()
