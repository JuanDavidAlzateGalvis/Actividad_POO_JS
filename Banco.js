export class Banco {
   
    constructor(nombre = "International PES", pais = "Colombia", numeroSucursales = 3, numeroClientes = 7643000000000000) {
        this.nombre = nombre;
        this.pais = pais;
        this.numeroSucursales = numeroSucursales;
        this.numeroClientes = numeroClientes;
    }

    getNombre() {
        return this.nombre;}

    getPais() {
        return this.pais;}

    getNumeroSucursales() {
        return this.numeroSucursales;}

    getNumeroClientes() {
        return this.numeroClientes;}

    setNombre(nombre) {
        this.nombre = nombre;}

    setPais(pais) {
        this.pais = pais;}

    setNumeroSucursales(numeroSucursales) {
        this.numeroSucursales = numeroSucursales;}

    setNumeroClientes(numeroClientes) {
        this.numeroClientes = numeroClientes;}

mostrarDatos() {
    console.log('Informacion del banco');
    console.log('El nombre del banco es: ' + this.nombre);
    console.log('El pais donde se encuentra el banco es: ' + this.pais);
    console.log('El numero de sucursales que tiene el banco es de: ' + this.numeroSucursales);
    console.log('El numero de clientes del banco es de: ' +this.numeroClientes);
}
}