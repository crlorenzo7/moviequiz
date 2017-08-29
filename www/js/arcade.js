function mostrar_opciones(opciones) {
    var contenido = '';
    for (i = 0; i < opciones.length; i++) {
        contenido += '<li class="boton-menu anim-g" correcto="' + opciones[i].correcta + '">' + opciones[i].respuesta + '</li>';
    }
    $('#lista-opciones-pregunta').html(contenido);
}

function Arcade() {
    //console.log(preguntas);
    this.npreguntas = 50;
    this.npregunta = 1;
    this.nvidas = 3;
    this.intervalo = '';
    this.preguntas = [];
    this.puntuacion = 0;
    this.puntuacionBase = 150;

    for (i = 0; i < preguntas.length; i++) {
        this.preguntas.push(preguntas[i]);
        this.preguntas[i]['opciones'] = [];
        for (j = 0; j < opcionesPre[i].length; j++) {
            this.preguntas[i]['opciones'].push(opcionesPre[i][j]);
        }
    }
    //console.log(this.preguntas);
}

Arcade.prototype.getVidas = function() {
    return this.nvidas;
}

Arcade.prototype.getNpregunta = function() {
    return this.npregunta;
}

Arcade.prototype.decreaseVidas = function() {
    this.nvidas--;
}

Arcade.prototype.increasePreguntas = function() {
    this.npregunta++;
}

Arcade.prototype.getPuntuacionBase = function() {
    return this.puntuacionBase;
}

Arcade.prototype.getPuntuacion = function() {
    return this.puntuacion;
}

Arcade.prototype.increasePuntuacion = function(p) {
    this.puntuacion += p;
}


Arcade.prototype.hacerPregunta = function(t) {
    $('#cubierta-p').css('display', 'none');
    if (juego.getVidas() > -1 && juego.getNpregunta() < 21) {

        $('#inner-progress-bar').css('width', '100%');
        updateCronometro(10);
        updateContador(juego.getNpregunta());

        var n = 0;
        var pregunta = '';
        pregunta = this.preguntas[0];
        ////console.log(preguntas);
        if (this.preguntas.length >= 2) {
            //console.log(Math.random());
            var f = new Date();
            var fi = f.getTime();
            n = parseInt(Math.random() * 1000 * fi) % (this.preguntas.length);
            pregunta = this.preguntas[n];
            //console.log(n);
        }

        this.preguntas.splice(n, 1);
        $('#fade').fadeOut(500, function() {
            $('#impregunta').attr('src', pregunta.imagen);
            $('#enunciado').html(pregunta.enunciado);
            $('#fade').fadeIn(500);
        });

        var opciones = pregunta.opciones;
        $('#contenedor-pregunta').fadeOut(500, function() {
            mostrar_opciones(opciones);
            $('#contenedor-pregunta').fadeIn(500);
        });
        $('#contenedor-pregunta').promise().done(function() {
            $('#lista-opciones-pregunta .boton-menu').unbind();
            $('#lista-opciones-pregunta .boton-menu').click(responder);
        });

        var crono = t;
        var cronometro = function() {
            crono = crono - 1;
            if (crono == 0) {
                //crono = 20;
                $('#cubierta-p').css('display', 'block');
                juego.closeInterval();
                juego.decreaseVidas();
                juego.increasePreguntas();
                corregir();
                quitarVidas(juego.getVidas());
                window.setTimeout('juego.hacerPregunta(10)', 1000);
            }
            updateCronometro(crono);
        }
        this.intervalo = setInterval(cronometro, 1000);
        $('#lista-opciones-pregunta .boton-menu').unbind();
        $('#lista-opciones-pregunta .boton-menu').click(responder);
    } else {
        if (juego.getNpregunta() == 21) {
            mostrar_winner_arcade(juego.getPuntuacion());
        } else {
            mostrar_loser_arcade(juego.getPuntuacion());
        }
    }
}

function responder() {
    juego.closeInterval();
    var respuesta = $(this).attr('correcto');
    if (respuesta == 'si') {
        //$('#inner-progress-bar').css('width', '0%');
        sumar_puntos(puntuar());
        juego.increasePuntuacion(puntuar());
        cambiar_puntuacion(juego.getPuntuacion());
        juego.increasePreguntas();
        corregir();
        window.setTimeout('juego.hacerPregunta(10)', 1000);
    } else {
        $(this).css('background-color', 'red');
        $(this).css('color', 'white');
        //$('#inner-progress-bar').css('width', '0%');
        juego.decreaseVidas();
        juego.increasePreguntas();
        corregir();
        quitarVidas(juego.getVidas());
        window.setTimeout('juego.hacerPregunta(10)', 1000);
    }
}

function puntuar() {
    var p = Math.ceil(juego.getPuntuacionBase() * (parseInt($('#cuenta').html()) / 10));
    return p;
}

function sumar_puntos(p) {
    $('#suma-puntos-a').html('+' + p);
    $('#suma-puntos-a').fadeIn(250);
    $('#suma-puntos-a').promise().done(function() {
        setTimeout('ocultar_suma_puntos()', 250);
    });
}

function quitar_puntos(p) {
    $('#quitar-puntos-a').html('-' + p);
    $('#quitar-puntos-a').fadeIn(250);
    $('#quitar-puntos-a').promise().done(function() {
        setTimeout('ocultar_resta_puntos()', 250);
    });
}

function ocultar_suma_puntos() {
    $('#suma-puntos-a').fadeOut(250);
}

function ocultar_resta_puntos() {
    $('#quitar-puntos-a').fadeOut(250);
}


Arcade.prototype.closeInterval = function() {
    if (this.intervalo != '') {
        clearInterval(this.intervalo);
    }
    this.intervalo = '';
}

Arcade.prototype.reiniciar = function() {
    this.npreguntas = 50;
    this.npregunta = 1;
    this.nvidas = 3;
    clearInterval(this.intervalo);
    this.intervalo = '';
    this.preguntas = [];
    this.puntuacion = 0;
    this.puntuacionBase = 150;

    for (i = 0; i < preguntas.length; i++) {
        this.preguntas.push(preguntas[i]);
        this.preguntas[i]['opciones'] = [];
        for (j = 0; j < opcionesPre[i].length; j++) {
            this.preguntas[i]['opciones'].push(opcionesPre[i][j]);
        }
    }
}

function cambiar_puntuacion(p) {
    $('#pwina').html(p);
}

function quitarVidas(n) {
    if (n >= 0) {
        for (i = 0; i < n; i++) {
            $('#v' + (i + 1)).addClass('vida').removeClass('vida-e');
        }
        for (i = n; i < 4; i++) {
            $('#v' + (i + 1)).addClass('vida-e').removeClass('vida');
        }
    }
}

function updateCronometro(tiempo) {
    $('#cuenta').html(tiempo);
    var per = (tiempo / 10) * 100
    $('#inner-progress-bar').css('width', per + '%');
}

function updateContador(t) {
    $('#contador-preguntas').html(t + ' of 20');
}

function corregir() {
    var botones = $('#lista-opciones-pregunta .boton-menu');
    for (i = 0; i < botones.length; i++) {
        var correcta = $(botones[i]).attr('correcto');
        if (correcta == 'si') {
            $(botones[i]).css('background-color', 'green');
            $(botones[i]).css('color', 'white');
        }
    }
}

function mostrar_winner_arcade(p) {
    $('#mensaje-ganador').html('Enhorabuena ¡¡Has Ganado!!');
    $('#pwin').html(p);
    $('#cubierta-winner').fadeIn(500);

}

function mostrar_loser_arcade(p) {
    $('#mensaje-ganador').html('Fin del Juego');
    $('#pwin').html(p);
    $('#cubierta-winner').fadeIn(500);
}

function wait(nsegundos) {
    objetivo = (new Date()).getTime() + 1000 * Math.abs(nsegundos);
    while ((new Date()).getTime() < objetivo) {}
};