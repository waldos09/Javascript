function js1() {
	let a= document.getElementsByTagName("num1").value;
	let b= document.getElementsByTagName("num2").value;
	let c=0;
	
	if (a == b) {
		c = a*b;
	}
	else if (a>b) {
		c=a-b;
	}
	else{
		c=a+b;
	}
	alert(c;
	/*if (no1==no2) {
		alert(parseFloat(no1*no2));
	}else if (parseFloat(no1<no2)) {
		alert(parseFloat(no2-no1));
	}else if (no1>no2) {
		alert(parseFloat(no2+no1));
	}*/


}
function js2() {
	let salario= document.getElementsByTagName('sueldo').value;
	let hrs= document.getElementsByTagName('horas').value;
	let total=0;
	let extra2=0;
	let estra3=0;
	alert(salario);
	if (hrs>120) {
		alert("Eso no esta permitido");
	}else{	
		if (hrs>40) {
			hrs=hrs-40;
			extra2=hrs*2;
			total=40*salario;
			if (hrs>8) {
				hrs=hrs-8;
				extra3=hrs*3
				total=extra3
				total=total+(salario*extra2)+(salario*extra3);
				alert(parseFloat(total));
			}else{
				total=total+salario*extra2;
				alert(parseFloat(total));
			}

		}else{
			total=hrs*salario;
			alert(parseFloat(total));
		}
	}


}
function js4() {
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
}
function js3() {
	let salario= document.getElementsByTagName('salario').value;
	let anio= document.getElementsByTagName('year').value;
	let utilidad=0;

	if (anio==0) {
		utilidad=salario*.5;
	}else if (anio<2 || anio>0) {
		utilidad=salario*.7;
	}else if (anio<5 ||anio>2) {
		utilidad=salario*.10;
	}else if (anio>5 || anio<10) {
		utilidad=salario*.15;
	}else if (anio>10) {
		utilidad=salario*.20;
	}else if (anio>63) {
		alert("no se puede trabajar tanto");
	}
	alert(parseInt(utilidad));

}