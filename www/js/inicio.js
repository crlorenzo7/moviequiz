var preguntas = [];
var opcionesPre = [];

var recordsArcade = [];
var recordsContra = [];

function cargar_db() {
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM preguntas', [], function(tx, results) {
            var len = results.rows.length;
            var pp = [];
            for (i = 0; i < len; i++) {
                var pregunta = {
                    enunciado: results.rows.item(i).enunciado,
                    imagen: results.rows.item(i).imagen
                }
                preguntas.push(pregunta);
                tx.executeSql('SELECT * FROM opciones WHERE idPregunta="' + (i + 1) + '" order by id asc', [], function(tx, results1) {
                    var len1 = results1.rows.length;
                    var opciones = [];
                    for (j = 0; j < len1; j++) {
                        var opcion = {
                            idPregunta: results1.rows.item(j).idPregunta,
                            respuesta: results1.rows.item(j).respuesta,
                            correcta: results1.rows.item(j).correcta
                        }
                        opciones.push(opcion);
                    }
                    opcionesPre.push(opciones);

                });
            }
        });
        tx.executeSql('SELECT * FROM record where juego="arcade" order by puntuacion desc', [], function(tx, results3) {
            var len3 = results3.rows.length;
            //console.log(len3);
            if (len3 > 0) {
                for (i = 0; i < len3; i++) {
                    var record = {
                            usuario: results3.rows.item(i).usuario,
                            puntuacion: results3.rows.item(i).puntuacion
                        }
                        //console.log(record);
                    recordsArcade.push(record);
                }
            }
        });
        tx.executeSql('SELECT * FROM record WHERE juego="contrarreloj" order by puntuacion desc', [], function(tx, results4) {
            var len4 = results4.rows.length;
            if (len4 > 0) {
                for (i = 0; i < len4; i++) {
                    var record = {
                        usuario: results4.rows.item(i).usuario,
                        puntuacion: results4.rows.item(i).puntuacion
                    }
                    recordsContra.push(record);
                }
            }
        });

    });
}

var db = openDatabase('mydb', '1.0', 'my first database', 4 * 1024 * 1024);
db.transaction(function(tx) {
    /*tx.executeSql('DELETE FROM  record', [],
        function(tx, results) { //console.log("Successfully Dropped") },
        function(tx, error) { //console.log("Could not delete") }
    );
    tx.executeSql('DELETE  FROM preguntas', [],
        function(tx, results) { //console.log("Successfully Dropped") },
        function(tx, error) { //console.log("Could not delete") }
    );
    tx.executeSql('DELETE  FROM opciones', [],
        function(tx, results) { //console.log("Successfully Dropped") },
        function(tx, error) { //console.log("Could not delete") }
    );*/
    tx.executeSql('CREATE TABLE IF NOT EXISTS preguntas (id integer PRIMARY KEY, enunciado text NOT NULL, imagen text NOT NULL, dificultad integer NOT NULL)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS opciones (idPregunta integer, id integer, respuesta text NOT NULL, correcta text NOT NULL , PRIMARY KEY  (idPregunta,id))');
    tx.executeSql('CREATE TABLE IF NOT EXISTS record (id integer PRIMARY KEY ASC, usuario text NOT NULL, puntuacion integer NOT NULL, juego text NOT NULL)');

    setTimeout('popul()', 3000);


    setTimeout('cargar_index()', 5000);
});

function popul() {
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM preguntas', [], function(tx, results) {
            var len = results.rows.length;
            ////console.log('resultados: ' + len);
            if (len == 0) {
                populate();
                setTimeout('cargar_db()', 1000);
            } else {
                cargar_db();
            }
        });
    });
}

function cargar_index() {
    $('#wrapper').load('templates/cubierta.html');
    $('#cubierta-principal').animate({ "left": "100%" }, 500);
}