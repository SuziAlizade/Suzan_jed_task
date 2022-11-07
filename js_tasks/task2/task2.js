
/*1#### JavaScript-də ədədin kvadrat kökünü tapmaq üçün proqram yazın?*/
let number = Number(prompt("Enter number"))
let square = number * number
console.log(square)


/* 2### Selsi dəyərini Fahrenheit-ə çevirin. Düstur: fahrenheit = celsius * 1.8 + 32*/
let selsi = Number(prompt("Selsi deyerini daxil edin"))
let far = selsi * 1.8 + 32
console.log(far)


/* 3### Istifadəçinin daxil etdiyi nömrənin müsbət, mənfi və ya sıfır olduğunu təyin edin və göstərin(console.log)(if...else istifadə edin) */
let number1 = Number(prompt("Please enter the number"))
if (number1 > 0) {
    console.log(`The ${number1} is positive`)
}
else if (number1 < 0) {
    console.log(`The ${number1} is negative`)
}
else {
    console.log(`The ${number1} is equal to zero`)
}

/* 4### Rəqəmin tək və ya cüt olduğunu yoxlamaq üçün JavaScript proqramı yazın.(if...else istifadə edin)*/
let number2 = Number(prompt("Please enter the number"))
if (number2 % 2 == 0) {
    console.log(`The ${number2} is even number`)
}
else {
    console.log(`The ${number2} is odd number`)
}