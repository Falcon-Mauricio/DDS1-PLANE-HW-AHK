export class Vuelo {
    pasajeros = [];
    empleados = [];
    avion;
    fechaHoraPartida;
    fechaHoraSalida;
    aeropuesrtoLlegada;
    duracionAproxEnMin;

    constructor(duracionAproxEnMin){
        this.duracionAproxEnMin = duracionAproxEnMin;
    }

    agregarPasajero(pasajero){
        this.pasajeros.push(pasajero);
    }
    
    capacidadOcupadaPorPasajeros(){
        return (this.pasajeros.length * 100) / this.avion.cantidadAsientos;
    }
}