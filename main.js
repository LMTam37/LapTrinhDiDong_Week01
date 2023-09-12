//bai 1
console.log("bai 1");
bmi = function(object) {
    return object.mass / object.height ** 2;
}

markHigherBMI = function(o1, o2) {
    return bmi(o1) > bmi(o2);
}

Mark1 = {
    mass: 78,
    height: 1.69
}

Jhon1 = {
    mass: 92,
    height: 1.95
}

console.log('data 1:', Mark1, Jhon1);

console.log(markHigherBMI(Mark1, Jhon1));

Mark2 = {
    mass: 95,
    height: 1.88
}

Jhon2 = {
    mass: 85,
    height: 1.76
}

console.log('data 2:', Mark2, Jhon2);

console.log(markHigherBMI(Mark2, Jhon2));
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
        console.log("Mark's BMI " + Math.round(bmi(o1) * 10) / 10 + " is higher than John's " + Math.round(bmi(o2) * 10) / 10 + " !");
    } else {
        console.log("John's BMI " + Math.round(bmi(o2) * 10) / 10 + " is higher than Mark's " + Math.round(bmi(o1) * 10) / 10 + " !");
    }
}
console.log("data 1");

printResult(Mark1, Jhon1)

printResultWithBmi(Mark1, Jhon1)

Mark = {
    mass: 95,
    height: 1.88
}

Jhon = {
    mass: 85,
    height: 1.76
}
console.log("data 2");

printResult(Mark2, Jhon2)

printResultWithBmi(Mark2, Jhon2)