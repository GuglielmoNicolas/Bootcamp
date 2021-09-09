//Crear una funcion Constructora Computadora

function Computadora (ram,cpu,disco,monitor,gpu){
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;

    this.getDetalles = () => `Componentes: 
    RAM: ${this.ram}
    CPU: ${this.cpu}
    DISCO: ${this.monitor}
    MONITOR: ${this.monitor}
    Tiene GPU?:${this.gpu ? 'Si': 'No'}  
    `;
}
const computadora1 = new Computadora("16GB","Ryzen5 3600","ssd","Philips de 24p",true);
const computadora2 = new Computadora("16GB","Ryzen5 3600","ssd","Philips de 24p",true);
const computadora3 = new Computadora("16GB","Ryzen3 3200g","ssd","Philips de 24p",false);
const computadora4 = new Computadora("16GB","Ryzen3 3400g","ssd","Philips de 24p",false);
const computadora5 = new Computadora("16GB","Ryzen5 3600","ssd","Philips de 24p",true);

const arrayCompu = [computadora1,computadora2,computadora3,computadora4,computadora5];

arrayCompu.forEach((compu) => {console.log(compu.getDetalles())})

let arrayGPU = []
arrayCompu.forEach((compu) => {
    if(compu.gpu){
        arrayGPU.push(compu)
    }
})

console.log('--------------------------')
arrayGPU.forEach((compu) => {console.log(compu.getDetalles())})


// Crear una función que calcule cuántos litros de nafta gasta un auto que consume 2 litros cada 100km, ingresando por parámetro la cantidad de kilómetros del recorrido a realizar. Luego crear una función que, a partir de ese dato, devuelva cuánto significa eso en pesos ingresando por parámetro el precio del litro de nafta.

const calcularLitros = (cantKM) => cantKM*2/100
const litrosGastados = calcularLitros(100);
const precioNafta = (litrosGastados, precioLitro) => '$' + precioLitro*litrosGastados 

console.log(calcularLitros(120))
console.log(precioNafta(litrosGastados,20))