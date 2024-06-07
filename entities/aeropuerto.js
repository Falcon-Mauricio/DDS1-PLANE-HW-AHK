export class Aeropuerto {
    nombre;
    vuelos = [];

    agregarVuelo(vuelo){
        this.vuelos.push(vuelo);
    }

    vuelosQuePartieronDeMi(){
        return this.vuelos.filter((v) => v.partisteDe(this));
    }

    vuelosQueLlegaronHastaAqui(){
        return this.vuelos.filter((v) => v.llegasteA(this));

    }

    cantidadVuelosQuePartieron(fecha){
        let cant = 0;
        const vuelosDeLaFecha = this.vuelosQuePartieronDeMi().filter(v => v.salisteEnFecha(fecha));
        cant = vuelosDeLaFecha.length;
        return cant;
    }
    
    cantidadVuelosQueLlegaron(fecha){
        return this.vuelosQueLlegaronHastaAqui().filter(v => v.llegasteEnFecha(fecha)).length;
    }
}