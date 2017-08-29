function control_articulo() {
    $('.cabecera-seccion').unbind();
    $('.cabecera-seccion').click(cerrar_juego);
    $('.cabecera-seccion').click(volver);

}

function control_articulo_record() {
    $('.cabecera-seccion').unbind();
    $('.cabecera-seccion').click(volver);

}

function control_rec_inner() {
    $('.cabecera-seccion-rec').unbind();
    $('.cabecera-seccion-rec').click(volver_rec_inner);

}

function menuPrincipal() {
    $('#menu-app .boton-menu').click(cargar_juego);

}

function menu_win() {
    $('#menu-winner .boton-menu').click(analizar_boton_win);
}

function menu_records() {
    $('#lista-opciones-pregunta .boton-menu').click(analizar_boton_rec);
}

function analizar_boton_win() {
    var id = $(this).attr('id');
    if (id == 'volverm') {
        volver();
    } else {
        if ($('#pwin').length > 0) {
            mostrar_pantalla_save('arcade');
        } else {
            mostrar_pantalla_save('contrarreloj');
        }

    }
}

function mostrar_pantalla_save(game) {
    window.location.hash = 'saveR.html?par=' + game;
    $('#aux2').load('templates/saveR.html?par=' + game);
    $('#aux2').animate({ "left": "0" }, 500);
}

function ocultar_pantalla_save() {
    $('#aux2').animate({ "left": "100%" }, 500);
}

function analizar_boton_rec() {
    var id = $(this).attr('id');
    cargar_record(id);
}

function srecord() {
    $('#menu-aux2 .boton-menu').unbind();
    $('#menu-aux2 .boton-menu').click(guardar_record);
}

function guardar_record() {
    var userR = $('#iniciales').val();
    if (userR != '') {
        var puntuacion = '';
        if ($('#mensaje-aux2').attr('juego') == 'arcade') {
            puntuacion = parseInt($('#pwin').html());
        } else {
            puntuacion = parseInt($('#pwina').html());
        }
        var record = {
            usuario: userR,
            puntuacion: puntuacion,
            juego: $('#mensaje-aux2').attr('juego')
        }
        if ($('#mensaje-aux2').attr('juego') == 'arcade') {
            recordsArcade.push(record);
            //console.log(recordsArcade);
        } else {
            recordsContra.push(record);
            //console.log(recordsContra);
        }
        saveR(record);
        ocultar_pantalla_save();
        volver();
    }
}

function saveR(r) {
    db.transaction(function(tx) {
        tx.executeSql('INSERT INTO record(usuario,puntuacion,juego) values(\'' + r.usuario + '\',\'' + r.puntuacion + '\',\'' + r.juego + '\')');
    });
}

/****************arcade */

var juego = '';

function cerrar_juego() {
    juego.reiniciar();
}

function arc() {
    /*var npregunta = 1;
    iniciar_pregunta()*/
    juego = new Arcade();
    juego.hacerPregunta(10);
}

function contra() {
    /*var npregunta = 1;
    iniciar_pregunta()*/
    juego = new Contra();
    juego.iniciar();
}

function getG() {
    var a = document.location.href;
    var parte_variables = a.split('?')[1];
    var variables_individuales = parte_variables.split('&');
    var valores = [];
    for (i = 0; i < variables_individuales.length; i++) {
        valores[variables_individuales[i].split('=')[0] + ''] = variables_individuales[i].split('=')[1];
    }

    return valores;

}