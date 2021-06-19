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
    @observable loading: boolean = false

    @action getQuzzes: any = async () => {
        this.game_points = 0
        this.isFinished = false
        this.active_quiz = 0
        const req = await networtServacie.makeAPIGetRequest("quizzes/")
        this.quizzes = toJS(req)
    }

    @action
    trueClick = () => {
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
    getRandomQuizzes: any = async () => {
        this.loading = true
        const req = await networtServacie.makeAPIGetRequest("quizzes/random/")
        this.game_quizzes = toJS(req)
        this.loading = false
    }


}


export default new QuizzesStore()
