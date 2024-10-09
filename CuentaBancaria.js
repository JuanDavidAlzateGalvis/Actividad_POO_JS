export class CuentaBancaria {
   
    constructor(numeroCuenta = "3457621239", tipoCuenta = "Corriente", saldoCuenta = 9000000000) {
        this.numeroCuenta = numeroCuenta;
        this.tipoCuenta = tipoCuenta;
        this.saldoCuenta = saldoCuenta;
    }

    getNumeroCuenta() {
        return this.numeroCuenta;}

    getIpoCuenta() {
        return this.tipoCuenta;}

    getSaldoCuenta() {
        return this.saldoCuenta;}

    setNumeroCuenta(numeroCuenta) {
        this.numeroCuenta = numeroCuenta;}

    setIpoCuenta(tipoCuenta) {
        this.tipoCuenta = tipoCuenta;}

    setSaldoCuenta(saldoCuenta) {
        this.saldoCuenta = saldoCuenta;}

mostrarDatos() {
    console.log('Informacion de la cuenta bancaria');
    console.log('Numero de la cuenta: ' + this.numeroCuenta);
    console.log('Tipo de la cuenta: ' + this.tipoCuenta);
    console.log('El saldo actual de la cuenta es: ' + this.saldoCuenta);
}
}