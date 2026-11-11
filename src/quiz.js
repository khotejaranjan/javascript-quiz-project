class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor (questions, timeLimit,timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    // 2. getQuestion()
   getQuestion(){
        return this.questions[this.currentQuestionIndex];
    } 
    // 3. moveToNextQuestion()
      moveToNextQuestion(){
        this.currentQuestionIndex++;
    }
    // 4. shuffleQuestions()
    shuffleQuestions(){
            this.questions.forEach((_, i) => {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
            });
    }

    // 5. checkAnswer(answer)
    checkAnswer(answer) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (answer === currentQuestion.answer) {
            this.correctAnswers++;
        }
    }

    // 6. hasEnded()
    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false
        }
        return true
    }

    filterQuestionsByDifficulty(difficulty) {
        if (difficulty >= 1 && difficulty <= 3) {
            this.questions = this.questions.filter(question => question.difficulty === difficulty);
        }
    }

    averageDifficulty() {
        let totalAvg = 0;
        this.questions.forEach(question => {
            totalAvg += question.difficulty;
        }) 
        return totalAvg / this.questions.length
    }
}
