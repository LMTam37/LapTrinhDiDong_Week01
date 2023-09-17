//Coding challeng 1
console.log("Coding challeng 1");
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

var players1 = [...game.players[0]];
var players2 = [...game.players[1]];

const gk = players1[0];
const fieldPlayers1 = players1.slice(1);

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, x: draw, team2 } = game.odds;

function printGoals(...playerNames) {
    playerNames.forEach((player) => {
        var goals = game.scored.filter((name) => name === player).length;
        console.log(`${player}: ${goals}`);
    })
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

const teamWin = team1 < team2 ? 'Team 1' : 'Team 2';
console.log(`${teamWin} win`);