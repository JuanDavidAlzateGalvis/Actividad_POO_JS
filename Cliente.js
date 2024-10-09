export class Cliente {
   
    constructor(nombre = "Juan David Alzate Galvis", edad = "20", tipoCuenta = "Corriente") {
        this.nombre = nombre;
        this.edad = edad;
        this.tipoCuenta = tipoCuenta;
    }

    getNombre() {
        return this.nombre;}

    getEdad() {
        return this.edad;}

    getIpoCuenta() {
        return this.tipoCuenta;}

    setNombre(nombre) {
        this.nombre = nombre;}

    setEdad(edad) {
        this.edad = edad;}

    setIpoCuenta(tipoCuenta) {
        this.tipoCuenta = tipoCuenta;}

mostrarDatos() {
    console.log('Informacion del cliente');
    console.log('El nombre del cliente es: ' + this.nombre);
    console.log('La edad del cliente es: ' + this.edad);
    console.log('Tipo de cuenta: ' + this.tipoCuenta);
}
}