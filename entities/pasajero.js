export class Pasajero {
    nombre;
    apellido;
    vuelos = [];

    agregarVuelo(unVuelo){
        this.vuelos.push(unVuelo);
    }

    cantVuelos(){
        return this.vuelos.length;
    }
//consideramos que un pasajeros visito una ciudad partio de un aeropuerto
//si partio de un aeropuesyo que estaba en esa ciudad
    cantidadVecesQueVisitaste(unaCiudad){
        return this.vuelos.filter(v => unaCiudad.tenesAeropuerto(v.aeropuertoPartida)).length
    }
}