// Returns a random DNA base
const returnRandBase = () => {
	const dnaBases = ['A', 'T', 'C', 'G'];
	return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
	const newStrand = [];
	for (let i = 0; i < 15; i++) {
		newStrand.push(returnRandBase());
	}
	return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
	return {
		specimenNum,
		dna,
		mutate() {
			const random = Math.floor(Math.random() * this.dna.length);

			let newBase = returnRandBase();

			while (this.dna[random] === newBase) {
				newBase = returnRandBase();
			}

			this.dna[random] = newBase;
			return this.dna;
		},
		compareDNA(otherOrgan) {
			const similarities = this.dna.reduce(
				(accumulator, currentValue, index, arr) => {
					if (arr[index] === otherOrgan.dna[index]) {
						return accumulator + 1;
					} else {
						return accumulator;
					}
				},
				0
			);

			const percentOfDNAShared = (similarities / this.dna.length) * 100;

			// Fixed to 2 decimal places
			const percentageTo2Decimal = percentOfDNAShared.toFixed(2);

			console.log(
				`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Deci}% DNA in common.`
			);
		},
		willLikelySurvive() {
			const cOrG = this.dna.filter(
				(element) => element === 'C' || element === 'G'
			);

			return cOrG.length / this.dna.length >= 0.6;
		},
	};
};

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
	let newOrgan = pAequorFactory(idCounter, mockUpStrand());
	if (newOrgan.willLikelySurvive()) {
		survivingSpecimen.push(newOrgan);
	}
	idCounter++;
}

console.log(survivingSpecimen);
