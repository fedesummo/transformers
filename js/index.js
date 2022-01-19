// ---- DEFINICIÓN DE CLASES ----

// Defino la clase a partir de la cual se definirá cada transformador.
class Transformer {

        // Método constructor.
        constructor (id, marca, potencia, tensPrimNom, tensSecVac, grupConex, medioAisl, 
            medioAislLts, dimensiones, peso, ubicacion, ultRev) {
            
            // ID.
            this.id = id;
    
            // Marca.
            this.marca = marca;
    
            // Potencia nominal [kVA].
            this.potencia = potencia;
    
            // Tensión primaria nominal [kV].
            this.tensPrimNom = tensPrimNom;
    
            // Tensión secundaria en vacío [kV].
            this.tensSecVac = tensSecVac;
    
            // Grupo de conexión.
            this.grupConex = grupConex;
    
            // Medio Aislante.
            this.medioAisl = medioAisl;
    
            // Volumen de material aislante [Lts].
            this.medioAislLts = medioAislLts;
    
            // Dimensiones (Largo x Ancho x Alto) [mm].
            this.dimensiones = dimensiones;
    
            // Peso [kg].
            this.peso = peso;
    
            // Ubicación.
            this.ubicacion = ubicacion;
    
            // Fecha de la última revisión.
            this.ultRev = ultRev;
    
            // Estado del transformador.
            // Por defecto, todo transformador será incializado "en servicio" (status = true).
            this.status = true;
    
        }
    
}

// ---- DECLARACIÓN DE DATOS ----

// Defino un objeto.
let transf1 = new Transformer (0, 'ARTRANS', 63, 13.2, 0.4, "Dy11", "ACEITE YPF 64", 120,
 "1650 x 1100 x 1800", 518, "Av. Savio & Av. Falcón", "01/12/2021 - 10:24:06");

// Defino un objeto.
let transf2 = new Transformer (1, 'ARTRANS', 80, 13.2, 0.231, "Dy11", "ACEITE YPF 64", 125,
 "1650 x 1100 x 1800", 587, "Garibaldi & Colón", "24/10/2021 - 09:18:56");

// Defino un objeto.
let transf3 = new Transformer (2, 'ARTRANS', 500, 13.2, 0.4, "Dy11", "ACEITE YPF 64", 380,
 "1700 x 1100 x 1900", 1910, "Maipú & De la Nación", "15/11/2021 - 15:36:18");

// Agrupo todos los objetos en un array.
let transfArray = [transf1, transf2, transf3];    

// ---- SUBIDA U OBTENCIÓN DE LOS DATOS DESDE EL LOCALSTORAGE ----

/* Si en el almacenamiento local no se encuentra guardado el array que contiene la lista de
transformadores, se lo guarda. */
if ( !localStorage.getItem('transfArray') ) {

        // Lo almaceno en el Local Storage.
        localStorage.setItem( 'transfArray', JSON.stringify(transfArray) );

};

// Obtengo desde el almacenamiento local el array que contiene a los objetos.
transfArray = JSON.parse( localStorage.getItem('transfArray') );

// ---- RENDERIZO LA LISTA DE DATOS ----
    
// Itero el array.
for (const element of transfArray) {
    
        // Para cada elemento, creo un <div> que contendrá la lista.
        const listContainer = document.createElement('div');

        listContainer.classList.add('card');
    
        // Incluyo dentro del <div> la lista <ul>, y sus correspondientes items <li>.
        listContainer.innerHTML = 
        `<img src="./imgs/transformador.png" class="card-img-top" alt="...">
        <div class="card-body">
                <h5 class="card-title">ID: ${element.id}</h5>
                <ul class="card-text">
                        <li>Marca: ${element.marca}</li>
                        <li>Potencia: ${element.potencia} Watts</li>
                        <li>Tensión Primaria Nominal: ${element.tensPrimNom} Volts</li>
                        <li>Tensión Secundaria en Vacío: ${element.tensSecvac} Volts</li>
                        <li>Grupo de Conexión: ${element.grupConex}</li>
                        <li>Medio Aislante: ${element.medioAisl}</li>
                        <li>Volumen de Aislante: ${element.medioAislLts} Lts</li>
                        <li>Dimensiones: ${element.dimensiones} mm</li>
                        <li>Peso: ${element.peso} Kg</li>
                        <li>Ubicación: ${element.ubicacion}</li>
                        <li>Última Revisión: ${element.ultRev}</li>
                </ul>
        </div>`
    
        // Obtengo el contenedor al cual asignaré la lista.
        const generalContainer = document.getElementById('grid-container');

        // Agrego el contenedor con la lista al <body> del documento.
        generalContainer.appendChild( listContainer );

}

/* ---- DEFINICIÓN DE EVENTOS ---- */

// Muestra la grilla de transformadores al presionar el ícono de la flecha que apunta hacia abajo.
document.getElementById('arrow-show-content').onclick = function() {
        // Muestro la grilla de transformadores
        document.getElementById('grid-container').style.display = 'flex';
        // Escondo el ícono de la flecha que apunta hacia abajo.
        document.getElementById('arrow-show-content').style.display = 'none';
        // Muestro el ícono de la flecha que apunta hacia arriba.
        document.getElementById('arrow-hide-content').style.display = 'block';
}

// Esconde la grilla de transformadoresal presionar el ícono de la flecha que apunta hacia arriba.
document.getElementById('arrow-hide-content').onclick = function() {
        // Escondo la grilla de transformadores.
        document.getElementById('grid-container').style.display = 'none';
        // Escondo el ícono de la flecha que apunta hacia arriba.
        document.getElementById('arrow-hide-content').style.display = 'none';
        // Muestro el ícono de la flecha que apunta hacia arriba.
        document.getElementById('arrow-show-content').style.display = 'block';
}