// 1. Realizar un Algoritmo que realice la suma entre dos numeros dados por el usuario
function suma(){
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));
    console.log(`La suma es ${numero1 + numero2}`);
    alert(`La suma es ${numero1 + numero2}`);
}

// 2. Realizar un Algoritmo que determina la suma, resta, multiplicacion y division de dos numeros datos por el usuario
function operacionMatematicas(){
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2;

    console.log(`La suma es = ${suma}, la resta es = ${resta}, la multiplicacion es = ${multiplicacion}, la division es = ${division}`);
    alert(`La suma es = ${suma}, la resta es = ${resta}, la multiplicacion es = ${multiplicacion}, la division es = ${division}`);
}

// 3. Realizar un Algoritmo que calcula el cuadrado de un numero dado por el usuario
function cuadrado(){
    let numero = parseInt(prompt('Ingrese un numero: '));
    console.log(`El cuadrado es ${numero**2}`);
    alert(`El cuadrado es ${numero**2}`);

}

// 4. Realizar un Algoritmo que determine el area de un triagunlo a partir de la base y la altura ingresada por el usuario
function areaTriangulo(){
    let base = parseInt(prompt("Ingrese la medida de la base del triangulo en cm: "));
    let altura = parseInt(prompt("Ingrese la medida de la altura del triangulo en cm: "));
    let area = (base * altura) / 2;

    console.log(`El triangulo tiene un area de ${area}cm.`);
    alert(`El triangulo tiene un area de ${area}cm.`);
}


// 5. Realizar un Algoruitmo que determine la conversion en kilometros, pulgadas y metros de un valor dado en centuimetros por el usuario
function conversionMedidas(){
    let medida = parseInt(prompt('Ingrese la medida en centimetros(cm): '));
    let kilometros = medida * 0.00001;
    let pulgadas = medida * 0.3937;
    let metro = medida * 0.01;

    console.log(`${medida}cm son: ${kilometros}km, ${pulgadas}in, ${metro}m`);
    alert(`${medida}cm son: ${kilometros}km, ${pulgadas}in, ${metro}m`);

}

// 6. Realizar un Algoritmo que determine el numero mayor entre dos numeros dados por el usuario
function numeroMayor(){
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));
    if (numero1 >= numero2){
        console.log(`${numero1} es mayor que ${numero2}`);
        alert(`${numero1} es mayor que ${numero2}`);
    }
    else{
        console.log(`${numero2} es mayor que ${numero1}`);
        alert(`${numero2} es mayor que ${numero1}`);
    }
}

// 7. Realizar un Algoritmo que determina el numero mayor entre 3 numeros ingresados por el usuario
function menorTres(){
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));
    let numero3 = parseInt(prompt('Ingrese el tercer numero: '));
    if (numero1 > numero2 && numero2 > numero3) {
        alert(`El numero menor es ${numero3}`);
        console.log(`El numero menor es ${numero3}`);
    }
    else if (numero2 > numero3 && numero3 > numero1){
        alert(`El numero menor es ${numero1}`);
        console.log(`El numero menor es ${numero1}`);
    }
    else{
        alert(`El numero menor es ${numero2}`);
        alert(`El numero menor es ${numero2}`);
    }

}

// 8. Realizar un Algoritmo que solicite al estudiante su nombre, la materia y 8 calificaciones de la misma
// Las calificaciones tienen un valor entre 1 y 10. Con la informacion proporcionada por el usuario
// Determinar si este aprovo la materia o no, teniendo en cuenta que se aprueba con 6.2
function aprovarMateria(){
    const numeroNotas = 8;
    let nombre = prompt('Ingrese su nombre: ');
    let materia = prompt('Ingrese el nombre de la materia: ')
    let promedio = 0; 
    for (let i = 0; i < numeroNotas;  i++){
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}`));
        promedio += nota;    
    }
    promedio /= numeroNotas;
    if (promedio < 6.2){
        prompt(`${nombre} por desgracia no aprovaste la materia ${materia}. Tu promedio fue de ${promedio}`)
    }
    else{
        prompt(`${nombre} felicidades aprovaste la materia ${materia}. Tu promedio fue de ${promedio}`)

    }  

}
// 9. Realizar un Algoritmo que determina si un numero ingresado por un usuario es par o impar
function parImpar(){
    let numero = parseInt(prompt('Ingresa el numero'));
    if (numero % 2 != 0){
        alert('El numero es impar.');
    }
    else{
        alert('El numero es par');
    }
}

// 10. Realizar un Algoritmo para un individuo que desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de n numeros de años teniendo encuenta que pagan un interes mensual del 0,7%
function calcularBeneficio(){
    let capitalInicial = parseFloat(prompt('Ingresa el capital que quieres invertir: $'));
    let anos = parseInt(prompt('Ingrese la cantidad de años que quiere invertir el capital: '));
    let meses = anos * 12;
    let interes = capitalInicial * 0.7;
    console.log(interes);
    let beneficio = interes * meses;
    let capitalFinal = capitalInicial + beneficio

    alert(`El capital final despues de ${anos} años de inversion(${meses} meses), es de \$${capitalFinal}. Por ende el beneficio es de \$${beneficio}`);
}

// 11. Realizar un Algorimo que muestre los numero intermedios entre el rango de 2 numeros dados por el usuario
function rangoNumeros(){
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));
    let numeros = ""
    for (let numero=numero1 + 1; numero < numero2; numero ++){
        numeros += `${numero}, `;
    }

    alert(numeros)
}

// 12. Realizar un Algoritmo que devuelva el resultado del factorial de un numero dado por el usuario
function factorialNumero(){
    let numero = parseInt(prompt('Ingresa numero: '));
    alert(`El factorial es ${factorial(numero)}`);
}

function factorial(numero){
    if (numero === 1){
        return numero;
    }
    return numero * factorial(numero - 1);
}

// 13. Realizar un Algoritmo que convierta un numero decimal a uno binario
function binario(){
    let numero = parseInt(prompt('Ingresa un numero: '));
    let bin = [];
    while (numero >= 1){
        bin.unshift(numero % 2);
        numero = Math.floor(numero / 2);

    }
    alert(`El numero en binario es: ${bin.join("")}`);
}
// 14. Realizar un Algoritmo que realice la resta entre dos numeros dados por el usuario
function resta(){
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));
    console.log(`La resta es ${numero1 - numero2}`);
    alert(`La resta es ${numero1 - numero2}`);
}

