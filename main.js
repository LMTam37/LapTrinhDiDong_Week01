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
    return markHigherBMI(o1, o2) ? console.log("Mark's BMI is higher than John's!") : console.log("John's BMI is higher than Mark's!");
}

printResultWithBmi = (o1, o2) => {
    return markHigherBMI(o1, o2) ?
        `Mark's BMI  + Math.round(bmi(o1) * 10) / 10 + " is higher than John's " + Math.round(bmi(o2) * 10) / 10 + " !")` :
        `John's BMI ${Math.round(bmi(o2) * 10) / 10} is higher than Mark's ${Math.round(bmi(o1) * 10) / 10} !`;
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
//bai 5
console.log("bai 5");
Dolphins1 = [44, 23, 71]
Koalas1 = [65, 54, 49]

Dolphins2 = [85, 54, 41]
Koalas2 = [23, 34, 27]
calcAverage = (team) => {
    total = 0
    for (score of team) {
        total += score;
    }
    return total / team.length
}

checkWinner = (dolphin, koalas) => {
    avgDolhins = calcAverage(dolphin);
    avgKoalas = calcAverage(koalas);
    return avgDolhins > avgKoalas ? `Dolphins win (${avgDolhins} vs. ${avgKoalas})` : `Koalas win (${avgKoalas} vs. ${avgDolhins})`
}

console.log(checkWinner(Dolphins1, Koalas1));
console.log(checkWinner(Dolphins2, Koalas2));
//bai 6
console.log("bai 6");

calcTip = (bill) =>{
    return bill > 50 && bill < 300 ? bill*0.15 : bill*0.2;
}

bills = [125, 555, 44]
tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
total = []
for(i = 0; i < 3; i++){
    total.push(bill[i] + tips[i]);
}
console.log(total);