// Calculator obyekti yaradin. 5 methodu olsun: read(), sum(), multiply(), divide(), subtract()

// read() -> prompt-la 2 eded alsin, ve onlari calculator-da proeprty kimi yadda saxlasin,
// qalanlari da neticeni console-a cixarsin.

// istifade edeceyiniz seylerden biri de   [ ] dynamic property-dir, ya da this.

const calculator = {
    read: function read(num1, num2) {
        this.num1 = +prompt('Enter number 1')
        this.num2 = +prompt('Enter number 2')
    },
    sum: function sum() {
        let s = this.num1 + this.num2
        console.log(`Sum numbers:${s}`)
    },
    multiply: function multiply() {
        let m = this.num1 * this.num2
        console.log(`Multipy numbers:${m}`)
    },
    divide: function divide() {
        let d = this.num1 - this.num2
        console.log(`Divide numbers:${d}`)
    },
    subtract: function subtract() {
        let sb = this.num1 / this.num2
        console.log(`Subtract numbers:${sb}`)
    }
}
calculator.read()
calculator.sum()
calculator.multiply()
calculator.divide()
calculator.subtract()
