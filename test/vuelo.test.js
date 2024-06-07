import { Vuelo } from "../entities/vuelo";
import { Avion } from "../entities/avion";
import { Pasajero } from "../entities/pasajero";
// 1. La capacidad de un vuelo ocupada por pasajeros. 
let pasajeroFeliz1;
let pasajeroFeliz2;
let avionFeliz;

beforeEach(() => {
    pasajeroFeliz1 = new Pasajero()
    pasajeroFeliz2 = new Pasajero()
    avionFeliz = new Avion();
    avionFeliz.cantidadAsientos = 4;
})

test("La capacidad de pasajeros es de 50% (avion con 4 asientos)", () => {
    const vueloFeliz = new Vuelo();
    vueloFeliz.avion = avionFeliz;
    vueloFeliz.agregarPasajero(pasajeroFeliz1);
    vueloFeliz.agregarPasajero(pasajeroFeliz2);
    
    const promedio = vueloFeliz.capacidadOcupadaPorPasajeros();
    const promedioEsperado = 50;

    expect(promedio).toBe(promedioEsperado);
});