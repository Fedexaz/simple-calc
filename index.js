/*

	CLASE CALCULADORA

*/

class Calculadora {
	operandoUno = [0];
	operandoDos = [];
	operacion = '';
	resultado = false;

	constructor(){

	}

	setResultado (value = false) {
		this.resultado = value;
	}

	setOperandoUno (value) {
		if(this.resultado) {
			this.operandoUno = [value];
			this.operacion = '';
			this.operandoDos = [];
			this.resultado = false;
		}
		else {
			if(this.operandoUno.length === 1 && this.operandoUno[0] === 0){
				this.operandoUno = [];
				return this.operandoUno.push(value);
			}
			return this.operandoUno.push(value);
		}
	}

	getOperandoUno () {
		return this.operandoUno;
	}

	setOperandoDos (value) {
		return this.operandoDos.push(value);
	}

	setOperador (value) {
		return this.operacion = value;
	}

	cleanOperandoUno () {
		return this.setOperandoUno = [];
	}

	setScreenContent () {
		if(this.operacion === ''){
			return `${this.operandoUno.join('')}`
		}
		else {
			return `${this.operandoUno.join('')} ${this.operacion} ${this.operandoDos.join('')}`
		}
	}

	deleteItem () {
		this.operandoUno = [0];
		this.operacion = '';
		this.operandoDos = [];
	}

	resolver() {
		return eval(`${this.operandoUno.join('')} ${this.operacion} ${this.operandoDos.join('')}`);
	}
}

/*

	VARIABLES Y CONTROL DE LA CALCULADORA

*/

const calc = new Calculadora();

let pantalla = calc.setScreenContent();

const elPantalla = document.querySelector('#pantalla');

elPantalla.innerText = pantalla;

function addNumber(value) {
	if(calc.operacion === ''){
		calc.setOperandoUno(value);
		elPantalla.innerText = calc.setScreenContent();
	}
	else {
		calc.setOperandoDos(value);
		elPantalla.innerText = calc.setScreenContent();
	}
}

function addOperator(value) {
	calc.setOperador(value);
	elPantalla.innerText = calc.setScreenContent();
}

function clearScreen () {
	calc.deleteItem();
	elPantalla.innerText = calc.setScreenContent();
}

function apply () {
	calc.setResultado(true);
	calc.setOperandoUno(calc.resolver());
	elPantalla.innerText = calc.setScreenContent();
}