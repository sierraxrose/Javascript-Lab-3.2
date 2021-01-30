// cost of plain pizza

function plainPizza () {
	alert("The cost will be $15.");
}

// cost of plain pizza split between two people
function plainSplit1 () {
	let cost = 15 / 2;
	alert("It will cost $" + cost + " per person.");
}

// cost of plain pizza split between three people

function plainSplit2 () {
	let cost = 15 / 3;
	alert("It will cost $" + cost + " per person.");
}

// cost of plain pizza split between four people
function plainSplit3 () {
	let cost = 15 / 4;
	alert("It will cost $" + cost + " per person.");
}

// cost of one topping pizza
function pizza1 () {
	let cost = 15 + 1.25;
	alert("The cost will be $" + cost);
}

// cost of one topping pizza split between two people
function pizza1Split1 () {
	let cost = 16.25 / 2;
	let costRound = cost.toFixed(2);
	alert("The cost will be $" + costRound + " per person.");
}

//cost of one topping pizza split between three people
function pizza1Split2 () {
	let cost = 16.25 / 3;
	let costRound = cost.toFixed(2);
	alert("The cost will be $" + costRound + " per person.");
}

// cost of one topping pizza split between four people
function pizza1Split3 () {
	let cost = 16.25 / 4;
	let costRound = cost.toFixed(2);
	alert("The cost will be $" + costRound + " per person.");
}

//cost of two topping pizza
function pizza2 () {
	let cost = 15 + 1.25 + 1.25;
	alert("The cost will be $" + cost);
}

// cost of two topping pizza split between two people
function pizza2Split1 () {
	let cost = 17.5 / 2;
	let costRound = cost.toFixed(2);
	alert("The cost will be $" + costRound + " per person.");
}

// cost of two topping pizza split between three people
function pizza2Split2 () {
	let cost = 17.5 / 3;
	let costRound = cost.toFixed(2);
	alert("The cost will be $" + costRound + " per person.");
}

//cost of two topping pizza split between four people
function pizza2Split3 () {
	let cost = 17.5 / 4;
	let costRound = cost.toFixed(2);
	alert("The cost will be $" + costRound + " per person.");
}
//cost of three topping pizza
function pizza3 () {
	let cost = 15 + 1.25 + 1.25 + 1.25;
	alert("The cost will be $" + cost);
}

//cost of three topping pizza split between two people
function pizza3Split1 () {
	let cost = 18.75 / 2;
	let costRound = cost.toFixed(2);
	alert("The cost will be $" + costRound + " per person.");
}

// cost of three topping pizza split between three people
function pizza3Split2 () {
	let cost = 18.75 / 3;
	let costRound = cost.toFixed(2);
	alert("The cost will be $" + costRound + " per person.");
}

//cost of three topping pizza split between four people
function pizza3Split3 () {
	let cost = 18.75 / 4;
	let costRound = cost.toFixed(2);
	alert("The cost will be $" + costRound + " per person.");
}