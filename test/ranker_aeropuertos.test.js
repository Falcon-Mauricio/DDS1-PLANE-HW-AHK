import { RankeadorDeAeropuertos } from "../entities/ranker_aeropuertos";
import { Aeropuerto } from "../entities/aeropuerto";
import { Escala } from "../entities/escala";
/**
 * 4. El aeropuerto que recibió menos vuelos en escalas.
 */
test("El aeropuerto con menos escalas debería ser el aeropuerto2", () => {
    const aeropuerto1 = new Aeropuerto();
    const aeropuerto2 = new Aeropuerto();
    const aeropuerto3 = new Aeropuerto();

    // Crear escalas
    const escala1 = new Escala(60);
    const escala2 = new Escala(90);
    const escala3 = new Escala(30);

    // Agregar escalas a los aeropuertos
    aeropuerto1.agregarEscala(escala1);
    aeropuerto1.agregarEscala(escala2);
    aeropuerto2.agregarEscala(escala1);
    aeropuerto3.agregarEscala(escala1);
    aeropuerto3.agregarEscala(escala2);
    aeropuerto3.agregarEscala(escala3);

    // Lista de aeropuertos
    const aeropuertos = [aeropuerto1, aeropuerto2, aeropuerto3];

    // Encontrar aeropuerto con menos escalas
    const rankeador = new RankeadorDeAeropuertos();
    const aeropuertoConMenosEscalas = rankeador.aeropuertoConMenorCantidadDeEscalas(aeropuertos);

    expect(aeropuertoConMenosEscalas).toBe(aeropuerto2);
})