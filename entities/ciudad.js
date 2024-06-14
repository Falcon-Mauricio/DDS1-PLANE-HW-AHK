export class Ciudad {
    nombre;
    aeropuertos = [];

    agregarAeropuerto(aeropuerto){
        this.aeropuertos.push(aeropuerto);
    }

    cantidadAeropuertos(){
        return this.aeropuertos.length;
    }

    cantidadPasajerosQueLlegaronEl(dia){
        let cantidadPasajeros = 0;

        this.aeropuertos.forEach(a => {
            a.vuelosQueLlegaronHastaAquiElDia(dia).forEach(v => {
                cantidadPasajeros += v.cantidadPasajeros();
            });
        });
        return cantidadPasajeros;
    }

    tenesAeropuerto(unAeropuerto){
        return this.aeropuertos.includes(unAeropuerto);

    }
}