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

console.log("data 2");

printResult(Mark2, Jhon2)

printResultWithBmi(Mark2, Jhon2);
//bai 3
console.log("bai 3");

Dolphins1 = [96, 108, 89]

Koalas1 = [88, 91, 110]

Dolphins2 = [97, 112, 101]

Koalas2 = [109, 95, 123]

Dolphins3 = [97, 112, 101]

Koalas3 = [109, 95, 106]

getAvgScore = (team) => {
    total = 0;
    for (score of team) {
        total += score;
    }
    return total / 3
}

getTheWinner = (team1, team2) => {
    avgTeam1Score = getAvgScore(team1);
    avgTeam2Score = getAvgScore(team2);
    if (avgTeam1Score < 100 && avgTeam2Score < 100) {
        return "No team win";
    }
    if (avgTeam1Score == avgTeam2Score) {
        return "Draw";
    }
    return avgTeam1Score > avgTeam2Score ? "Dolphin win" : "Koalas win"
}

console.log("Data 1: " + getTheWinner(Dolphins1, Koalas1));
console.log("Data Bonus 1: " + getTheWinner(Dolphins2, Koalas2));
console.log("Data Bonus 2: " + getTheWinner(Dolphins3, Koalas3));
//bai 4
console.log("bai 4");
bill = [275, 40, 430]

getTip = (cost) => {
    return cost >= 50 && cost <= 300 ? cost * 0.15 : cost * 0.2;
}

for (cost of bill) {
    var tip = getTip(cost);
    console.log(`The bill was ${cost}, the tip was ${tip}, and the total value ${cost + tip}`);
}