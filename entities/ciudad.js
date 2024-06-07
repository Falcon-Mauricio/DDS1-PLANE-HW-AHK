import { Aeropuerto } from "./aeropuerto";
export class Ciudad {
    nombre;
    aeropuertos = [];

    agregarAeropuerto(aeropuerto){
        this.aeropuertos.push(aeropuerto);
    }

    cantidadAeropuesrtos(){
        return this.aeropuertos.length;
    }
}