import { Ciudad } from "../entities/ciudad";
import { Aeropuerto } from "../entities/aeropuerto";
import { Vuelo } from "../entities/vuelo";
import { Pasajero } from "../entities/pasajero";
import { RankerDeCiudades } from "../entities/ranker_ciudades";
/*7. La ciudad que más pasajeros recibió en un día.*/
test("La ciudad que más pasajeros recibió en un día debería ser ciudad2", () => {
    // Crear ciudades
    const ciudad1 = new Ciudad();
    const ciudad2 = new Ciudad();
    const ciudad3 = new Ciudad();

    // Crear aeropuertos
    const aeropuerto1 = new Aeropuerto();
    const aeropuerto2 = new Aeropuerto();
    const aeropuerto3 = new Aeropuerto();
    const aeropuerto4 = new Aeropuerto();

    // Agregar aeropuertos a las ciudades
    ciudad1.agregarAeropuerto(aeropuerto1);
    ciudad2.agregarAeropuerto(aeropuerto2);
    ciudad2.agregarAeropuerto(aeropuerto3);
    ciudad3.agregarAeropuerto(aeropuerto4);

    // Crear vuelos
    const vuelo1 = new Vuelo(120);
    const vuelo2 = new Vuelo(180);
    const vuelo3 = new Vuelo(240);
    const vuelo4 = new Vuelo(300);

    // Configurar aeropuertos de llegada para los vuelos
    vuelo1.aeropuertoLlegada = aeropuerto1;
    vuelo2.aeropuertoLlegada = aeropuerto2;
    vuelo3.aeropuertoLlegada = aeropuerto3;
    vuelo4.aeropuertoLlegada = aeropuerto2;

    // Crear pasajeros
    const pasajero1 = new Pasajero();
    const pasajero2 = new Pasajero();
    const pasajero3 = new Pasajero();
    const pasajero4 = new Pasajero();
    const pasajero5 = new Pasajero();

    // Agregar pasajeros a los vuelos
    vuelo1.agregarPasajero(pasajero1);
    vuelo2.agregarPasajero(pasajero2);
    vuelo3.agregarPasajero(pasajero3);
    vuelo4.agregarPasajero(pasajero4);
    vuelo4.agregarPasajero(pasajero5);

    // Fecha de los vuelos
    const fecha = new Date();

    vuelo1.fechaHoraLlegada = fecha;
    vuelo2.fechaHoraLlegada = fecha;
    vuelo3.fechaHoraLlegada = fecha;
    vuelo4.fechaHoraLlegada = fecha;

    // Agregar vuelos a los aeropuertos
    aeropuerto1.agregarVuelo(vuelo1);
    aeropuerto2.agregarVuelo(vuelo2);
    aeropuerto3.agregarVuelo(vuelo3);
    aeropuerto4.agregarVuelo(vuelo4);

    // Lista de ciudades
    const ciudades = [ciudad1, ciudad2, ciudad3];

    // Encontrar la ciudad que más pasajeros recibió en un día
    const rankeador = new RankerDeCiudades();
    const ciudadConMasPasajeros = rankeador.ciudadQueMasPasajerosRecibioEl(fecha, ciudades);

    // Ciudad2 debería ser la que más pasajeros recibió
    expect(ciudadConMasPasajeros).toBe(ciudad2);
});
