import { Viaje } from "../entities/viaje";
import { Escala } from "../entities/escala";
import { Vuelo } from "../entities/vuelo";
/**
 * 2. La duración total aproximada de un vuelo,
 * teniendo en cuenta que, de existir,
 *  en cada escala se demora un tiempo diferente.
 */
let primerEscala;
let segundaEscala;
let primerVuelo;
let segundoVuelo;

beforeEach(() => {
    primerEscala = new Escala(40);
    segundaEscala = new Escala(40);
    primerVuelo = new Vuelo(60);
    segundoVuelo = new Vuelo(60);
})

test("Consulto la cantidad de minutos del viaje y deberia ser 200 minutos", () => {
    const viajeFeliz = new Viaje();
    viajeFeliz.agregarEscala(primerEscala);
    viajeFeliz.agregarEscala(segundaEscala);
    viajeFeliz.agregarVuelo(primerVuelo);
    viajeFeliz.agregarVuelo(segundoVuelo);

    const minutos = viajeFeliz.duracionTotalAproxEnMins();
    const minutosEsperados = 200;

    expect(minutos).toBe(minutosEsperados);
});

