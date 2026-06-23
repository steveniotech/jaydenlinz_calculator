let evaluate = "";
let last = "";
for (let i = 0; i < 10; i++) {
	document.getElementById("b" + new String(i)).addEventListener("click", () => {
		evaluate += new String(i);
		update();
	});
}
function stringHasOperators(n) {
	const characters = n.split(" ");
	console.log(characters);
	if (characters.includes("*")) {
		return "*";
	}
	if (characters.includes("+")) {
		return "+";
	}
	if (characters.includes("-")) {
		return "-";
	}
	if (characters.includes("/")) {
		return "/";
	}
	return false;
}
function parse(n, operator) {
	let total = 0;
	if (!operator) {
		return n;
	}
	const characters = n.split(" ");
	let a = new Number(characters[0]);
	let b = new Number(characters[2]);
	switch (operator) {
		case "*":
			total = a * b;
			break;
		case "/":
			if (b == 0) {
				alert("Cannot divide by zero");
				break;
			}
			total = a / b;
			break;
		case "+":
			total = a + b;
			break;
		case "-":
			total = a - b;
			break;
		default:
			break;
	}
	last = total;
	return new String(total);
}
let mult = () => {
	let ops = stringHasOperators(evaluate);
	if (ops) {
		evaluate = parse(evaluate, ops);
	}
	evaluate += " ";
	evaluate += "*";
	evaluate += " ";
	update();
};
let div = () => {
	let ops = stringHasOperators(evaluate);
	if (ops) {
		evaluate = parse(evaluate, ops);
	}
	evaluate += " ";
	evaluate += "/";
	evaluate += " ";
	update();
};
let sub = () => {
	let ops = stringHasOperators(evaluate);
	if (ops) {
		evaluate = parse(evaluate, ops);
	}
	evaluate += " ";
	evaluate += "-";
	evaluate += " ";
	update();
};
let add = () => {
	let ops = stringHasOperators(evaluate);
	if (ops) {
		evaluate = parse(evaluate, ops);
	}
	evaluate += " ";
	evaluate += "+";
	evaluate += " ";
	update();
};
let eq = () => {
	evaluate = parse(evaluate, stringHasOperators(evaluate));
	update();
};
let period = () => {
	let ops = stringHasOperators(evaluate);
	if (!ops) {
		if (evaluate.indexOf(".") == -1) {
			evaluate += ".";
		}
		update();
		return;
	}
	if (evaluate.split(ops)[1].indexOf(".") == -1) {
		evaluate += ".";
		update();
		return;
	}
};
document.getElementById("multiply").addEventListener("click", mult);
document.getElementById("divide").addEventListener("click", div);
document.getElementById("subtract").addEventListener("click", sub);
document.getElementById("plus").addEventListener("click", add);
document.getElementById("equal").addEventListener("click", eq);
document.getElementById("Clear").addEventListener("click", () => {
	evaluate = "0";
	update();
});
document.getElementById("Delete").addEventListener("click", () => {
	evaluate = evaluate.slice(0, Math.max(evaluate.length - 1, 1));
	update();
});
document.getElementById("point").addEventListener("click", period);
window.addEventListener("keydown", (event) => {
	console.log(event.key);
	if (new Number(event.key) >= 0 && new Number(event.key) < 10) {
		evaluate += event.key;
		update();
		return;
	}
	switch (event.key) {
		case "C":
		case "c":
			evaluate = "0";
			update();
			break;	
		case "Backspace":
			evaluate = evaluate.slice(0, Math.max(evaluate.length - 1, 1));
			if (evaluate[-1] == " ") {
				evaluate = evaluate.slice(0, Math.max(evaluate.length - 1, 1));
			}
			update();
			break;
		case "*":
			mult();
			break;
		case "/":
			div();
			break;
		case "-":
			sub();
			break;
		case "+":
			add();
			break;
		case "=":
			eq();
			break;
		case ".":
			period();
			break;
		default:
			break;
	}
});
update = () => {
	document.getElementById("calct1").innerHTML = evaluate;
	document.getElementById("calct0").innerHTML = last;
};
