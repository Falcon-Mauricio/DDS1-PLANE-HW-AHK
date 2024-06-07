export class RankeadorDeAeropuesrtos {
    
    aeropuertoConMenorCantidadDeEscalas(aeropuertos){
        let aeropuertoConMenorEscalas;
        let cantidadMenorEscala = 99999999;

        aeropuertos.forEach(a => {
            if(a.cantidadEscalas() < cantidadMenorEscala){
                cantidadMenorEscala = a.cantidadEscalas();
                aeropuertoConMenorEscalas = a;
            }            
        });

        return aeropuertoConMenorEscalas;
    }
}