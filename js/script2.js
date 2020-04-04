function js2() {
	// body...
	let h = document.getElementById('hrs').value;
	let s = document.getElementById('sueldo').value;
	var dxp = 0;
	var tot = 0;
	var txp = 0;

	if (s < 0) {
		alert('Ingrese numeros positivos po favo');
	}
	//si las horas exeden de 45 hrs lo demas es extra
	if (h > 45) {
		dxp=(h - 45);
		if (dxp < 9) {
			alert("la cantidad de horas extra que tienes es de:"
				+ (dxp));
			tot = (dxp*s*2)+(45*s);
			alert("por lo tanto la el dinero que reciviras en total es de:"
				+ (tot));
		}
		// si las horas extra son mas de 9 se triplica
		if (dxp > 9 ) {
			txp= dxp-9;
			alert("la cantidad de horas extra exede de 9 horas"
				+"la diferencia de horas es de:"+ txp);
			tot = (txp*s*3)+(45*s)+(dxp*s*2);
			alert("por lo tanto el dinero que reciviras en total es de:"
				+tot);

		}
	}else{
		tot= h*s;
		alert("el dinero que reciviras es de:" + tot);
	}

}