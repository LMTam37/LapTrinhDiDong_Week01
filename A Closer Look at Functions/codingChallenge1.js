const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const input = Number(
            prompt(
                `${this.question}
                ${this.options.join("\n")}\n
                (Write option number)`
            )
        );

        if (input >= 0 && input < this.options.length && !isNaN(input)) {
            this.answers[input]++;
            this.displayResults();
        } else {
            alert("Invalid input. Please choose a valid option.");
        }
    },
    displayResults(type) {
        if (type === "string") {
            console.log(`Poll results are ${this.answers.join(", ")}`);
        }
        if (type === "array") {
            console.log(this.answers);
        }
    },
}

poll.registerNewAnswer();
poll.displayResults();

var testData1 = [5, 2, 3];
var testData2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: testData1 }, "array");
poll.displayResults.call({ answers: testData1 }, "string");

poll.displayResults.call({ answers: testData2 }, "array");
poll.displayResults.call({ answers: testData2 }, "string");