import { Banco } from './Banco.js';
import { Cliente } from "./Cliente.js";
import { CuentaBancaria } from "./CuentaBancaria.js";

class Principal {

    static main() {

        const banco1 = new Banco();
        const cliente1 = new Cliente();
        const cuentaBancaria1 = new CuentaBancaria();
        
        const banco2 = new Banco("Banco de la moneda", "Argentina", 5, 3460000000000000);
        const cliente2 = new Cliente("Angie Alzate Galvis", "24", "Ahorro");
        const cuentaBancaria2 = new CuentaBancaria("Programación Orientada a Objetos", "Ahorro", 5000000000);
    
        console.log('Código: 7502410040');
        console.log('Juan David Alzate Galvis');
        console.log('************************');
        
        console.log('');
        banco1.mostrarDatos();
        console.log('');
        cliente1.mostrarDatos();
        console.log('');
        cuentaBancaria1.mostrarDatos();
        console.log('');
        
        console.log('************************');
        console.log('');
        
        banco2.mostrarDatos();
        console.log('');
        cliente2.mostrarDatos();
        console.log('');
        cuentaBancaria2.mostrarDatos();
        console.log('');
    }
}

Principal.main()