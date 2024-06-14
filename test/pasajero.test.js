import { Pasajero } from "../entities/pasajero";
import { Vuelo } from "../entities/vuelo";
import { Ciudad } from "../entities/ciudad";
import { Aeropuerto } from "../entities/aeropuerto";
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

/*8. La cantidad de veces que un pasajero visitó una ciudad.*/

test("La cantidad de veces que un pasajero visitó una ciudad debería ser 3", () => {
    // Crear ciudad de interés
    const ciudad = new Ciudad();

    // Crear aeropuerto de la ciudad
    const aeropuerto = new Aeropuerto();
    ciudad.agregarAeropuerto(aeropuerto);

    // Crear vuelos
    const vuelo1 = new Vuelo(120);
    const vuelo2 = new Vuelo(180);
    const vuelo3 = new Vuelo(240);

    // Configurar vuelos con aeropuerto de partida que pertenece a la ciudad
    vuelo1.aeropuertoPartida = aeropuerto;
    vuelo2.aeropuertoPartida = aeropuerto;
    vuelo3.aeropuertoPartida = aeropuerto;

    // Crear pasajero
    const pasajero = new Pasajero();

    // Asignar vuelos al pasajero
    pasajero.agregarVuelo(vuelo1);
    pasajero.agregarVuelo(vuelo2);
    pasajero.agregarVuelo(vuelo3);

    // Verificar la cantidad de veces que el pasajero visitó la ciudad
    const cantidadVisitas = pasajero.cantidadVecesQueVisitaste(ciudad);

    // Se espera que el pasajero haya visitado la ciudad 3 veces
    expect(cantidadVisitas).toBe(3);
});