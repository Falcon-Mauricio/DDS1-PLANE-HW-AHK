export class RankerDeCiudades {
    ciudadQueMasPasajerosRecibioEl(dia, ciudades){
        let ciudadConMasPasajeros;
        let cantidadPasajeros = -1;

        ciudades.forEach(ciudad => {
            const cantidadActual = ciudad.cantidadPasajerosQueLlegaronEl(dia);
            if (cantidadActual > cantidadPasajeros) {
                cantidadPasajeros = cantidadActual;
                ciudadConMasPasajeros = ciudad;
            }            
        });

        return ciudadConMasPasajeros;
    }
}