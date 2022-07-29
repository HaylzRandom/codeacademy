const team = {
	_players: [
		{ firstName: 'David', lastName: 'Beckham', age: 50 },
		{ firstName: 'Michael', lastName: 'Owen', age: 45 },
		{ firstName: 'Henrik', lastName: 'Larsson', age: 52 },
	],
	_games: [
		{ opponent: 'Puddleducks', teamPoints: 5, opponentPoints: 6 },
		{ opponent: 'Mighty Ducks', teamPoints: 2, opponentPoints: 1 },
		{ opponent: 'Cloudy Skies', teamPoints: 3, opponentPoints: 3 },
	],
	get players() {
		return this._players;
	},
	get games() {
		return this._games;
	},
	addPlayer(newFirstName, newLastName, newAge) {
		let player = {
			firstName: newFirstName,
			lastName: newLastName,
			age: newAge,
		};
		this.players.push(player);
	},
	addGame(newOpponent, newTeamPoints, newOpponentPoints) {
		let game = {
			opponent: newOpponent,
			teamPoints: newTeamPoints,
			opponentPoints: newOpponentPoints,
		};
		this.games.push(game);
	},
};

console.log(team.games);

team.addPlayer('Colin', 'Bishop', 30);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);

console.log(team.players);
console.log(team.games);
