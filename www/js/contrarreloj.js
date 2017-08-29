function Contra() {
    //console.log(preguntas);
    this.npreguntas = 50;
    this.npregunta = 1;
    this.intervalo = '';
    this.preguntas = [];
    this.puntuacion = 0;
    this.puntuacionBase = 100;
    this.acumuladoBase = 10;
    this.acumuladoActual = 0;
    this.errorBase = 50;
    this.errores = 0;
    this.aciertos = 0;

    for (i = 0; i < preguntas.length; i++) {
        this.preguntas.push(preguntas[i]);
        this.preguntas[i]['opciones'] = [];
        for (j = 0; j < opcionesPre[i].length; j++) {
            this.preguntas[i]['opciones'].push(opcionesPre[i][j]);
        }
    }
    //console.log(this.preguntas);
}

Contra.prototype.getNpregunta = function() {
    return this.npregunta;
}

Contra.prototype.getPuntuacion = function() {
    return this.puntuacion;
}

Contra.prototype.getAciertos = function() {
    return this.aciertos;
}

Contra.prototype.getErrores = function() {
    return this.errores;
}

Contra.prototype.increasePreguntas = function() {
    this.npregunta++;
}

Contra.prototype.increasePuntuacion = function() {
    this.aciertos++;
    this.puntuacion += (this.acumuladoActual + this.puntuacionBase);
    this.acumuladoActual += this.acumuladoBase;
}

Contra.prototype.getPuntuacionPP = function() {
    return (this.acumuladoActual + this.puntuacionBase);
}

Contra.prototype.decreasePuntuacion = function() {
    this.errores++;
    this.puntuacion -= this.errorBase;
    this.acumuladoActual = 0;
}

Contra.prototype.iniciar = function() {
    var crono = 60;
    $('#inner-progress-bar').css('width', '100%');
    var cronometro = function() {
        crono = crono - 1;
        if (crono == 0) {
            //crono = 20;

            juego.closeInterval();
            juego.increasePreguntas();
            corregir();
            mostrar_winner_contra(juego.getPuntuacion(), juego.getNpregunta() - 2, juego.getAciertos(), juego.getErrores());
        }
        updateCronometroContra(crono);
    }
    this.intervalo = setInterval(cronometro, 1000);
    juego.hacerPregunta();
}

function updateCronometroContra(tiempo) {
    var t = getHour(tiempo);
    $('#cuenta').html(t);
    var per = (tiempo / 60) * 100
    $('#inner-progress-bar').css('width', per + '%');
}

function getHour(segundos) {
    var hora = '';
    var horas = segundos / 3600;
    var minutos = (segundos % 3600) / 60;
    var seg = (segundos % 3600) % 60;

    var hor = Math.floor(horas);
    var min = Math.floor(minutos);
    var segu = Math.floor(seg);

    if (hor > 0) {
        if (horas < 10) {
            hora += '0' + hora + ':';
        } else {
            hora += hora + ':';
        }
    }

    if (min < 10) {
        hora += '0' + min + ':';
    } else {
        hora += min + ':';
    }

    if (segu < 10) {
        hora += '0' + segu;
    } else {
        hora += segu;
    }

    return hora;
}


Contra.prototype.hacerPregunta = function() {


    //$('#inner-progress-bar').css('width', '100%');
    updateContadorContra(juego.getNpregunta());

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
        $('#lista-opciones-pregunta .boton-menu').click(responderContra);
    });

}

function updateContadorContra(t) {
    $('#contador-preguntas').html(t);
}

function responderContra() {
    var respuesta = $(this).attr('correcto');
    if (respuesta == 'si') {
        //$('#inner-progress-bar').css('width', '0%');
        sumar_puntos(juego.getPuntuacionPP());
        juego.increasePuntuacion();
        cambiar_puntuacion(juego.getPuntuacion());
        juego.increasePreguntas();
        corregir();
        window.setTimeout('juego.hacerPregunta()', 250);
    } else {
        $(this).css('background-color', 'red');
        $(this).css('color', 'white');
        //$('#inner-progress-bar').css('width', '0%');
        quitar_puntos(50);
        juego.decreasePuntuacion();
        cambiar_puntuacion(juego.getPuntuacion());
        juego.increasePreguntas();
        corregir();
        window.setTimeout('juego.hacerPregunta()', 250);
    }
}

function transicion() {
    $('#fade').fadeOut(500, function() {
        $('#fade').fadeIn(500);
    });
    $('#contenedor-pregunta').fadeOut(500, function() {
        $('#contenedor-pregunta').fadeIn(500);
    });
}


Contra.prototype.closeInterval = function() {
    clearInterval(this.intervalo);
}

Contra.prototype.reiniciar = function() {
    this.npreguntas = 50;
    this.npregunta = 1;
    clearInterval(this.intervalo);
    this.intervalo = '';
    this.preguntas = [];
    this.puntuacion = 0;
    this.puntuacionBase = 100;
    this.acumuladoBase = 10;
    this.acumuladoActual = 0;
    this.errorBase = 50;

    for (i = 0; i < preguntas.length; i++) {
        this.preguntas.push(preguntas[i]);
        this.preguntas[i]['opciones'] = [];
        for (j = 0; j < opcionesPre[i].length; j++) {
            this.preguntas[i]['opciones'].push(opcionesPre[i][j]);
        }
    }
}

function mostrar_winner_contra(pun, pre, pac, per) {
    $('#pwin').html(pun);
    $('#pre').html(pre);
    $('#pac').html(pac);
    $('#perr').html(per);
    $('#cubierta-winner-contra').fadeIn(500);

}