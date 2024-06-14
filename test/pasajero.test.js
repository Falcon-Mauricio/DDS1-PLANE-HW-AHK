import { Pasajero } from "../entities/pasajero";
import { Vuelo } from "../entities/vuelo";
/*5. La cantidad de vuelos totales que realizó un pasajero.*/
test("La cantidad de vuelos totales que realizó un pasajero debería ser 4", () => {
    // Crear un pasajero
    const pasajero = new Pasajero();

    // Crear vuelos
    const vuelo1 = new Vuelo(120);
    const vuelo2 = new Vuelo(180);
    const vuelo3 = new Vuelo(240);
    const vuelo4 = new Vuelo(60);

    // Agregar vuelos al pasajero
    pasajero.agregarVuelo(vuelo1);
    pasajero.agregarVuelo(vuelo2);
    pasajero.agregarVuelo(vuelo3);
    pasajero.agregarVuelo(vuelo4);

    // Verificar la cantidad de vuelos
    const cantidadVuelos = pasajero.cantVuelos();
    expect(cantidadVuelos).toBe(4);
});