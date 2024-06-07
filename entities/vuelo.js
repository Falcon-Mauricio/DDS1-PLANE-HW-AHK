export class Vuelo {
    pasajeros = [];
    empleados = [];
    avion;
    fechaHoraPartida;
    fechaHoraLlegada;
    aeropuertoLlegada;
    aeropuertoPartida;
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

    partisteDe(unAeropuerto){
        return this.aeropuertoPartida == unAeropuerto;
    }

    llegasteA(unAeropuerto){
        return this.aeropuertoLlegada == unAeropuerto;
    }

    salisteEnFecha(fecha){
        return this.fechaHoraPartida == fecha;
    }

    llegasteEnFecha(fecha){
        return this.fechaHoraLlegada == fecha;
    }
}