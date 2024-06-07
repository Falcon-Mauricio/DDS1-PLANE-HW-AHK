export class Viaje {
    vuelos = [];
    escalas = [];

    agregarVuelo(vuelo){
        this.vuelos.push(vuelo);
    }

    agregarEscala(escala){
        this.escalas.push(escala);
    }

    duracionTotalAproxEnMinDelVuelo(){
        let duracionDelVueloAprox = 0;
        for(let i = 0; i < this.vuelos.length; i++){
            duracionDelVueloAprox += this.vuelos[i].duracionAproxEnMin;
        }
        return duracionDelVueloAprox;
    }

    duracionTotalAproxEnMinDeLaEscala(){
        let duracionDeLaEscalaAprox = 0;
        for(let i = 0; i < this.escalas.length; i++){
            duracionDeLaEscalaAprox += this.escalas[i].duracionAproxEnMin;
        }
        return duracionDeLaEscalaAprox;
    }

    duracionTotalAproxEnMins(){
        return this.duracionTotalAproxEnMinDelVuelo() + this.duracionTotalAproxEnMinDeLaEscala();
    }
}