export class RankerDeCiudades {

    ciudadQueMasPasajerosRecibioEl(dia, ciudades){
        let ciudadConMasPasajeros;
        let cantidadPasajeros = -99999999;

        ciudades.forEach(c => {
            if(a.cantidadPasajerosQueLlegaronEl(dia) < cantidadPasajeros){
                cantidadPasajeros = c.cantidadPasajerosQueLlegaronEl(dia);
                ciudadConMasPasajeros = c;
            }            
        });
 
        return ciudadConMasPasajeros;
    }
}