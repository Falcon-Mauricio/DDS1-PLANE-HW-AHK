import { Aeropuerto } from "../entities/aeropuerto";
import { Vuelo } from "../entities/vuelo";

test("Dos vuelos salieron el 2024/06/07 de Buenos Aires", () => {
    const aeropuertoBsAS = new Aeropuerto();

    const unVuelo = new Vuelo(40);
    unVuelo.aeropuertoPartida = aeropuertoBsAS;
    unVuelo.fechaHoraPartida = "2024-06-07"

    aeropuertoBsAS.agregarVuelo(unVuelo);

    const otroVuelo = new Vuelo(50);
    otroVuelo.aeropuertoPartida = aeropuertoBsAS;
    otroVuelo.fechaHoraPartida = "2024-06-07"

    aeropuertoBsAS.agregarVuelo(otroVuelo);

    const cantidadObtenida = aeropuertoBsAS.cantidadVuelosQuePartieron("2024-06-07");

    expect(cantidadObtenida).toBe(2)

})

test("Un vuelo llegó el 2024/06/07 a Berlin", () => {
    const aeropuertoBerlin = new Aeropuerto();

    const unVuelo = new Vuelo(80);
    unVuelo.aeropuertoLlegada = aeropuertoBerlin;
    unVuelo.fechaHoraLlegada = "2024/06/07";

    aeropuertoBerlin.agregarVuelo(unVuelo);

    const cantObtenida = aeropuertoBerlin.cantidadVuelosQueLlegaron("2024/06/07");

    expect(cantObtenida).toBe(1);
})