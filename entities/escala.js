import { Aeropuerto } from "./aeropuerto";
export class Escala {
    aeropuerto;
    duracionAproxEnMin;
    constructor(aeropuerto, duracionAproxEnMin){
        this.aeropuerto = aeropuerto;
        this.duracionAproxEnMin = duracionAproxEnMin;
    }
}