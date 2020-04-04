function js3() {
	// body...
	let di = document.getElementById('salario').value;
	let an = document.getElementById('year').value;
	var utilidad = 0;
	var p = 0 ;

	if (di < 0) {
		alert("Escribe un salario que exista");
	}
	//utilidad menos de una año (.05)
	if (an == 0) {
		p = di*0.05;
		alert("De tu salario"+ " $ "+ p + "es gracias a tu utilidad");
		utilidad = p/10;
		alert("tu utilidad es del:" + utilidad);
	}
	//utilidad de 1-2 años (.07)
	if (an > 0 && an < 2) {
		p = di*0.07;
		alert("De tu salario"+" $" + p +" es gracias a tu utilidad");
		utilidad = p/10;
		alert("tu utilidad es del:"+ utilidad);
	}
	//utilidad de 2-5 años (.1)
	if (an > 2 && an < 5) {
		p = di*0.1;
		alert("De tu salario"+" $" + p +" es gracias a tu utilidad");
		utilidad = p/10;
		alert("tu utilidad es del:"+ utilidad);
	}
	// utilidad de 5-10 años (.15)
	if (an > 5 && an < 10) {
		p = di*0.15;
		alert("De tu salario"+" $" + p +" es gracias a tu utilidad");
		utilidad = p/10;
		alert("tu utilidad es del:"+ utilidad);
	}
	// utilidad de 10++ (.2)
	if (an >= 10) {
		p = di*0.2;
		alert("De tu salario"+" $" + p +" es gracias a tu utilidad");
		utilidad = p/10;
		alert("tu utilidad es del:"+ utilidad);
	}






}
