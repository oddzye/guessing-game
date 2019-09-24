class GuessingGame {
    constructor() {
        this.max = null;
        this.min = null;
        this.guessNumber = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        
    }

    guess() {
        this.guessNumber = Math.ceil((this.max + this.min) / 2);
        return this.guessNumber;
    }

    lower() {
        this.max = this.guessNumber;
    }

    greater() {
        this.min = this.guessNumber;
    }
}

module.exports = GuessingGame;
