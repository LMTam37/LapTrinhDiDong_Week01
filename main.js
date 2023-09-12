//bai 1
console.log("bai 1");
bmi = function(object) {
    return object.mass / object.height ** 2;
}

markHigherBMI = function(o1, o2) {
    return bmi(o1) > bmi(o2);
}

Mark = {
    mass: 78,
    height: 1.69
}

Jhon = {
    mass: 92,
    height: 1.95
}

console.log('test data 1:', Mark, Jhon);

console.log(markHigherBMI(Mark, Jhon));

Mark = {
    mass: 95,
    height: 1.88
}

Jhon = {
    mass: 85,
    height: 1.76
}

console.log('test data 2:', Mark, Jhon);

console.log(markHigherBMI(Mark, Jhon));
//bai 2
console.log("bai 2");
printResult = (o1, o2) => {
    result = markHigherBMI(o1, o2)
    if (result) {
        console.log("Mark's BMI is higher than John's!");
    } else {
        console.log("John's BMI is higher than Mark's!");
    }
}

printResultWithBmi = (o1, o2) => {
    result = markHigherBMI(o1, o2)
    if (result) {
        console.log("Mark's BMI " + bmi(o1) + " is higher than John's " + bmi(o2) + " !");
    } else {
        console.log("John's BMI " + bmi(o2) + " is higher than Mark's " + bmi(o1) + " !");
    }
}

Mark = {
    mass: 78,
    height: 1.69
}

Jhon = {
    mass: 92,
    height: 1.95
}

printResult(Mark, Jhon)

printResultWithBmi(Mark, Jhon)

Mark = {
    mass: 95,
    height: 1.88
}

Jhon = {
    mass: 85,
    height: 1.76
}
printResult(Mark, Jhon)

printResultWithBmi(Mark, Jhon)