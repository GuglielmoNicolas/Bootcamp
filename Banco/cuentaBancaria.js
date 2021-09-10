function CuentaBancaria(nombreTitular,apellidoTitular,numeroCuenta){
    this.nombreTitular = nombreTitular;
    this.apellidoTitular = apellidoTitular;
    this.numeroCuenta = numeroCuenta;
    this.sueldo = 0;
    this.movimientos = [];

    this.getNombreCompleto = () => `${this.nombreTitular} ${this.apellidoTitular}`;
    this.getSaldo = () => this.sueldo;
    this.getMov = () => {
        this.movimientos.forEach((mov) => console.log(`${mov.tipo} - ${mov.plata}`))
    }
    this.getMovAcreditado = () => {
        this.movimientos.forEach(mov => {
            if(mov.tipo === "Acreditar") {
                console.log(`${mov.tipo} - ${mov.plata}`);
            }
        })
    }
    this.getMovDebitado = () => {
        this.movimientos.forEach(mov => {
            if(mov.tipo === "Debitar") {
                console.log(`${mov.tipo} - ${mov.plata}`);
            }
        })
    }

    this.debitar = (aDebitar) => {
        if(this.sueldo - aDebitar > 0){
            this.sueldo -= aDebitar;
            this.movimientos.push({tipo: 'Debitar', plata: aDebitar});
            return "Extraccion con exito";
        }else {
            return "Error en la extraccion";
        } 
    }
    this.acreditar = (aAcreditar) => {
        this.sueldo+=aAcreditar;
        this.movimientos.push({tipo:'Acreditar', plata: aAcreditar});
    }
}


const cuentaNico = new CuentaBancaria('Nicolas', 'Guglielmo', 2031);

cuentaNico.acreditar(150);
console.log(cuentaNico.debitar(100))
cuentaNico.acreditar(200);
cuentaNico.getMov();
console.log(cuentaNico.getSaldo());
console.log('----ACREDITADO-----');
cuentaNico.getMovAcreditado();
console.log('----DEBITADO-------');
cuentaNico.getMovDebitado();