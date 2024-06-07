export class Vuelo {
    pasajeros = [];
    empleados = [];
    avion;
    fechaHoraPartida;
    fechaHoraSalida;
    aeropuesrtoLlegada;
    agregarPasajero(pasajero){
        this.pasajeros.push(pasajero);
    }
    capacidadOcupadaPorPasajeros(){
        return (this.pasajeros.length * 100) / this.avion.cantidadAsientos;
    }
}