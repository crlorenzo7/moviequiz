function cargar_juego() {
    var juego = $(this).attr('id');
    if (juego == 'salir') {

    } else {
        iniciar_juego(juego);
        $('#main-scroller').animate({ "left": "-100%" }, 500);
    }

}

function volver() {

    $('#main-scroller').animate({ "left": "0px" }, 500);
    $('#main-scroller').promise().done(function() {
        if ($('#cubierta-winner').length > 0) {
            $('#cubierta-winner').fadeOut(0);
        }
        if ($('#cubierta-winner-contra').length > 0) {
            $('#cubierta-winner-contra').fadeOut(0);
        }
    });

}

function volver_rec_inner() {
    $('#aux').animate({ "left": "100%" }, 500);
}

function iniciar_juego(juego) {
    $('#articulo').load('templates/' + juego + '.html');
}

function cargar_record(id) {
    window.location.hash = 'record_inner.html?par=' + id;
    $('#aux').load('templates/record_inner.html?par=' + id);
    mostrar_aux();
}

function mostrar_aux() {
    $('#aux').animate({ "left": "0" }, 500);
}