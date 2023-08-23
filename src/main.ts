// Este es el archivo principal que contendrá la lógica de JS cue
//****************    C A L C U L A D O R A ****************************** */
// **************** SELECCIÓN de botones:
const botonSuma = document.getElementById("buttonSuma");
const botonResta = document.getElementById("buttonResta");
const botonMulti = document.getElementById("buttonMulti");
const botonDivi = document.getElementById("buttonDivi");

//*************  FUNCIÓN PARA CAPTURAR LOS INPUTS  **********************
function inputs() {
  // ** Capturador del div de resultados, el que los muestra...
  let resultado = document.getElementById('idResultado');

  //** Capturador en una sola línea */
  let num1 = parseInt((document.getElementById('input1') as HTMLInputElement).value)
  
  
  //** Capturador no simplificado */
  let numm2 = document.getElementById('input2') as HTMLInputElement
  let num2 = parseInt(numm2.value);
 
  return {num1,num2,resultado}
}

// *************** EVENTOS con los botones:
// *********  SUMA ******

botonSuma?.addEventListener("click", () => {
  const {num1,num2,resultado} = inputs();

  let igual = num1 + num2;
 
  // let resultado = document.getElementById('idResultado');

    if (resultado) {
        resultado.innerHTML = `<br>El resultado de la Suma es: ${igual}`;
        
    } else {
        console.log("No existe el div")
    }
})

//************* RESTA *******
botonResta?.addEventListener("click",()=>{
  const {num1,num2,resultado} = inputs();
  
  let igual = num1 - num2;

    if (resultado) {
        resultado.innerHTML = `<br>El resultado de la Resta es: ${igual}`;
        
    } else {
        console.log("No existe el div")
    }
})

//************* MULTIPLICACIÓN *******
botonMulti?.addEventListener("click", ()=>{
  const {num1,num2,resultado} = inputs();

  let igual = num1 * num2;

    if (resultado) {
      resultado.innerHTML = `<br>El resultado de la Multiplicación es: ${igual}`
    
    } else {
      console.log("No existe el div")
    }
})

//************* DIVISIÓN *******
botonDivi?.addEventListener("click", ()=>{
  const {num1,num2,resultado} = inputs();

  let igual = num1 / num2;

    if (resultado) {
      resultado.innerHTML = `<br>El resultado de la División es: ${igual}`
    
    } else {
      console.log("No existe el div")
    }
})

//********************* CONTADOR DE NÚMEROS PARES E IMPARES **************************** */
//Capturador de inputs:
function inputsConta() {
  // ** Capturador del div de resultados, el que los muestra...
  let resultadoConta = document.getElementById('idResultadoConta');

  let numConta1 = parseInt((document.getElementById('rango1') as HTMLInputElement).value)
  
  let numConta2 = parseInt((document.getElementById('rango2') as HTMLInputElement).value)
  
  console.log(numConta1,numConta2);
 
  return {numConta1,numConta2,resultadoConta}
}

//*** Selector de botón ***** */
const botonConta = document.getElementById("buttonConta");

botonConta?.addEventListener("click", ()=>{
  const {resultadoConta, numConta1, numConta2} = inputsConta()
  
  let array: number[] = [];
  let pares: number[] = [];
  let impares: number[]= [];

  for (let index = numConta1; index <= numConta2 ; index++) {
    array.push(index)
  }

  for (let i = numConta1; i <= numConta2 ; i++) {

    if (i%2===0) {
      pares.push(i)
    } else {
      impares.push(i)
    }
  }

  console.log(pares)
  console.log(impares)


  if (resultadoConta) {
    //JOIN convierte los valores del arraig en string, y lo concatena en función de lo que yo quiera, en este caso por comas.
    resultadoConta.innerHTML = `<br>El rango de números es el siguiente:  ${array.join(", ")}. 
    <br><br>Los números pares son: ${pares}
    <br><br>Los números impares son: ${impares}
    `
    
  } else {
    console.log("No existe el div")
  }
})

//**********************    TABLA DE MULTIPLICAR   ********************************
// idTablaMulti
const botonTabla = document.getElementById('buttonTabla')

botonTabla?.addEventListener("click", ()=>{
  const idTabla = document.getElementById('idTablaMulti')
  const inputTabla = parseInt((document.getElementById('tablaMulti') as HTMLInputElement).value)

    if (idTabla) {
      for (let index = 0; index < 11; index++) {
        const resultado = inputTabla * index;
        console.log(resultado)
        idTabla.innerHTML += `<br>Tabla de Multiplicar: ${inputTabla} x ${index} = ${resultado}`   
      }
    } else {
      console.log("No existe el div")
    }
})

//************************  SUCESIÓN DE FIBONACCI  ******************************* */
const n = 10; 
const bottonFibo = document.getElementById('buttonFibo'); 
const ideFibo = document.getElementById('idFibo')

function fibonacci(n: number): number[] {
  const sequence: number[] = [];
  
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      sequence.push(i);
    } else {
      const nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
  }
  return sequence;
}

bottonFibo?.addEventListener('click', function() {
  const sequence = fibonacci(n);

  if (ideFibo) {
    ideFibo.innerHTML += `Secuencia de Fibonacci: `  + sequence.join(', ');
  }else{
    console.log('No Existe el div')
  }

});

//  *********************    CONVERTIDOR DE TEMPERATURAS    ***********************
// idConverti
//°F = (°C x 1,8) + 32
// [°C] = ([°F] − 32) × 5 ⁄ 9
const idConverti = document.getElementById('idConverti');

const buttonCelsius = document.getElementById('buttonCelsius');
const buttonFaren = document.getElementById('buttonFaren');

// ***** A GRADOS CELSIUS *******
buttonCelsius?.addEventListener('click',()=>{
  const inputTempe = parseInt((document.getElementById('inputTempe')as HTMLInputElement).value)
 
  const resulCel = ((inputTempe-32)*1.8);
  
  if (idConverti) {
    idConverti.innerHTML = `${inputTempe}°F equivalen a ${resulCel}°C`
    
  } else {
     console.log('No existe el div')
  }
})

//**** A GRADOS FAHRENHEIT **** */
buttonFaren?.addEventListener('click',()=>{
  const inputTempe = parseInt((document.getElementById('inputTempe')as HTMLInputElement).value)

  const resulFare = ((inputTempe *1.8) + 32);

  if (idConverti) {
    idConverti.innerHTML = `${inputTempe}°C equivalen a ${resulFare}°F`
  } else {
    console.log('No existe el div')
  }
})

//********************   CONTADOR DE PALABRAS   ******************************

// const buttonContaPal = document.getElementById('buttonContaPal');
// const idContaPal = document.getElementById('idContaPal');

// const arrayPalab: string[]= [];

// buttonContaPal?.addEventListener("click", ()=>{
//   const inputContaPal = (document.getElementById('inputContaPal')as HTMLInputElement).value;
//   arrayPalab.push(inputContaPal)
//   console.log(arrayPalab)

//   const arraySeparado = arrayPalab.inputContaPal(",")
//   console.log(arraySeparado)
// })

const buttonContaPal = document.getElementById('buttonContaPal');
const idContaPal = document.getElementById('idContaPal');

buttonContaPal?.addEventListener("click", () => {
  const inputContaPal = (document.getElementById('inputContaPal') as HTMLInputElement).value;

  const arraySeparado = inputContaPal.split(" ");
  console.log(arraySeparado.length);

  if (idContaPal) {
    idContaPal.innerHTML = `La oración escrita contiene ${arraySeparado.length} palabras`
  } else {
    console.log('El div no existe')
  }
});






















// export{}
// class Person{
//   name: string
//   age: number
//   // private age: number

//   constructor (para_name: string, para_age: number){
//     this.age= para_age
//     this.name = para_name
//   }

  //una accion q puede hacer una persona... es un método
  // hablar(){
  //   console.log("hablando....")
  // }

  //con esto puedo impedir q una persona venga y me cambia la edad
  // persona.age = 54897994;
  // puedo ponerla como privada... asi no puedo acceder a la misma..
  // esto tb se puede definir en el constructor...
//   getAge (){
//     return this.age
//   }
// }

// const persona = new Person("asdas", 1234)

// persona.hablar()

//para ver la edad es..
// persona.getAge()

//persona.age 