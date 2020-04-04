function js4() {
	// body...
	let a = document.getElementById('no1').value;
	let b = document.getElementById('no2').value;
	let c = document.getElementById('no3').value;

	if (a > b && a > c) {
		alert("el numero mas grande es: "+ a);

	}else if (b > a && b > c) {
		alert("El numero mas grande es : "+ b);
	}else if (c > a && c > b) {
		alert("el numero mas grande es:" + c);
	}else if (a == b || b == c || a == c) {
		alert("hay dos o mas numeros q son iugales");
	}
}
/*function js4() {
	let numero1= document.getElementsByTagName('num1').value;
	let numero2= document.getElementsByTagName('num2').value;
	let numero3= document.getElementsByTagName('num3').value;

	if (numero1>numero2 || numero1>numero3) {
		alert(parseFloat(numero1));
	}else if (numero2 > numero1 || numero2>numero3) {
		alert(parseFloat(numero2));
	}else if (numero3>numero1 || numero3>numero2) {
		alert(parseFloat(numero3));
	}
}*/