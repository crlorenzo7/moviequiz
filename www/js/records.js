var recordsARC = [];
var recordsCON = [];


function cargar_db_ra() {
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM record where juego="arcade" order by puntuacion desc', [], function(tx, results) {
            var len = results.rows.length;
            var re = [];
            for (i = 0; i < len; i++) {
                var record = {
                    usuario: results.rows.item(i).usuario,
                    puntuacion: results.rows.item(i).puntuacion
                }
                recordsARC.push(record);
            }
        });

    });
}

function cargar_db_rc() {
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM record where juego="contrarreloj" order by puntuacion desc', [], function(tx, results) {
            var len = results.rows.length;
            var re = [];
            for (i = 0; i < len; i++) {
                var record = {
                    usuario: results.rows.item(i).usuario,
                    puntuacion: results.rows.item(i).puntuacion
                }
                recordsCON.push(record);
            }
        });

    });
}

setTimeout('cargar_db_ra()', 3000);
setTimeout('cargar_db_rc()', 3000);