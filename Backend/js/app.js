/*
*Una compañía desea transmitir datos a través del teléfono, pero le preocupa que sus teléfonos puedan estar intervenidos. Le ha pedido a usted que escriba un programa que cifre sus datos, de manera que éstos puedan transmitirse con más seguridad. Todos los datos se transmiten como enteros de cuatro dígitos. Su aplicación debe leer un entero de cuatro dígitos introducido por el usuario y cifrarlo de la siguiente manera: reemplace cada dígito con el resultado de sumar 7 al dígito y obtener el residuo después de dividir el nuevo valor entre 10. Luego intercambie el primer dígito con el tercero, e intercambie el segundo dígito con el cuarto. Después imprima el entero cifrado. Escriba una función aparte que reciba como entrada un entero de cuatro dígitos cifrado, y que lo descifre para formar el número original.
 */


let value = 9999;

/** Funcion para generar Numero cifrado*/
const getNumCifrado = (n) => {
	if (typeof n !== 'number') return console.log('El dato ingresado no es un numero');

	if (n >= 10000 && n <= 99999) return console.log('Ingresar un numero de 4 digitos');

	d1 = n % 10;
	n = Math.trunc(n / 10);
	d2 = n % 10;
	n = Math.trunc(n / 10);
	d3 = n % 10;
	n = Math.trunc(n / 10);
	d4 = n;

	d1 = ((d1 + 7) % 10) * 100;
	d2 = ((d2 + 7) % 10) * 1000;
	d3 = ((d3 + 7) % 10) * 1;
	d4 = ((d4 + 7) % 10) * 10;

	let numNew = d2 + d1 + d4 + d3

	return numNew;
}

console.log(getNumCifrado(value));


/** Funcion para generar Numero Original*/
const getNumOriginal = (n) => {

	d1 = n % 10;
	n = Math.trunc(n / 10);
	d2 = n % 10;
	n = Math.trunc(n / 10);
	d3 = n % 10;
	n = Math.trunc(n / 10);
	d4 = n;

	d1 = (d1 + 3) * 100;
	d2 = (d2 + 3) * 1000;
	d3 = (d3 + 3) * 1;
	d4 = (d4 + 3) * 10;

	let numNew = d2 + d1 + d4 + d3;
	return numNew;

}
console.log(getNumOriginal(getNumCifrado(value)));