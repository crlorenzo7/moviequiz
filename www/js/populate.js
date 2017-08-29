function populate() {
    db.transaction(function(tx) {
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(1,"En la serie &quot;Person of Interest&quot;, ¿ Qué actor interpreta el personaje de &quot;Harold Finch&quot; ?","img/preguntas/personofinterest.jpg",1)');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(2,"¿Quien es el protagonista de la serie de AMC &quot;Breaking Bad&quot;","img/preguntas/breakingbad.jpg",0)');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(3,"¿Qué dos espadas surgieron del acero valyrio de la espada &quot;Hielo&quot;?","img/preguntas/juegodetronos.jpg",3)');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(4,"¿Quien canto bajo la lluvia?","img/preguntas/bajolalluvia.jpg",3)');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(5,"En &quot;Breaking bad&quot;, ¿Que familiar muere por culpa de Walter White?","img/preguntas/breakingbad2.jpg",3)');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(6,"¿Cómo se llama el lobo huargo de Rickon Stark, el hijo pequeño de Eddard?","img/preguntas/juegodetronos.jpg",2)');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(1,2,"Michael Emerson","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(1,1,"Jim Caviezel","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(1,3,"Kevin Chapman","no")');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(2,2,"Walter White","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(2,1,"Saul Goodman","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(2,3,"Jesse Pinkman","no")');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(3,3,"Lamento de Viuda y Guardajuramentos","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(3,2,"Guardacorazones y Matalobos","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(3,1,"Garra y aguja","no")');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(4,2,"Gene Kelly","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(4,3,"Cary Grant","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(4,1,"Fred Astaire","no")');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(5,1,"Hank","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(5,3,"Skyler","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(5,2,"Walter Jr.","no")');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(6,2,"Peludo","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(6,1,"Verano","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(6,3,"Fantasma","no")');

        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(7, "¿Quién dirigió &quot;El club de los poetas muertos&quot?;","img/preguntas/poetas.jpg", 3)');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(7,2,"Peter Weir","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(7,3,"Robert Benton","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(7,1,"Gus Van Sant","no")');

        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(8, "¿De qué año es la pelicula &quot;Doce hombres sin piedad&quot;?","img/preguntas/12sin.jpg", 3)');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(8,1,"1957","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(8,2,"1951","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(8,3,"1961","no")');


        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(9, "¿Como se llama el malvado vecino de &quot;Toy Story&quot;?","img/preguntas/toystory2.jpg", 2)');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(9,2,"Sid","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(9,3,"Max","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(9,1,"Tom","no")');

        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(10, "¿Qué significa la  &quot;J&quot; de Homer J. Simpson?","img/preguntas/simpsons.jpg", 3)');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(10,3,"Jay","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(10,1,"Jey","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(10,2,"Jesse","no")');


        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(11, "¿Quién creo el personaje de James Bond?","img/preguntas/jamesbond.jpg", 3)');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(11,2,"Ian Fleming","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(11,1,"George Orwell","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(11,3,"Isaac Asimov","no")');

        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(12,"¿Quién crea a Ultron en &quot;Los Vengadores: la era de Ultron&quot;?","img/preguntas/vengadoresultron.jpg",1)');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(12,1,"Tony Stark","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(12,2,"Dr. Hank Pym","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(12,3,"Doctor Extraño","no")');

        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(13,"En &quot;El señor de los anillos: El retorno del rey&quot;,¿Cómo se llama la espada de Aragorn durante la Guerra del Anillo?","img/preguntas/anillos.jpg",1)');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(13,2,"Anduril","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(13,1,"Narsil","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(13,3,"Glamdring","no")');

        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(14,"¿Qué tipo de unidad es el droide R2-D2?","img/preguntas/r2d2.jpg",2)');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(14,1,"Astromecanico","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(14,3,"Reparaciones","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(14,2,"Utilitario","no")');


        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(15,"¿Cómo se llama el personaje de &quot;Orlando Bloom&quot; en &quot;Piratas del Caribe&quot;?","img/preguntas/piratasdelcaribe.jpg",1)');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(15,2,"Will Turner","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(15,3,"Will Sander","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(15,1,"Will Foster","no")');


        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(16,"¿En Quien se inspira el personaje de &quot;Gregory House&quot;?","img/preguntas/house.jpg",2)');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(16,3,"Sherlock Holmes","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(16,1,"Howard Shore","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(16,2,"Patch Adams","no")');


        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(17,"¿cuales son los numeros que aparecen a lo largo de la serie &quot;Perdidos&quot;?","img/preguntas/perdidos.jpg",2)');

        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(17,2,"4-8-15-16-23-42","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(17,1,"4-8-14-16-23-42","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(17,3,"4-5-15-16-23-42","no")');

        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(18,"¿Cuántas películas componen la saga de &quot;El padrino&quot;?","img/preguntas/padrino.jpg",1)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(18,1,"una","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(18,2,"tres","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(18,3,"cuatro","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(19,"¿Cómo se llama el caballo de &quot;Toy Story 2&quot;?","img/preguntas/toystory.jpg",1)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(19,1,"Tiro Loco","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(19,2,"Fresky","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(19,3,"Perdigon","si")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(20,"¿Cómo se llama el jorobado de notre dame?","img/preguntas/jorobado.jpg",1)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(20,1,"Quasimodo","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(20,2,"Casimodo","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(20,3,"Notredame","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(21,"¿Cuál era el personaje de Olivia Williams en &quot;X-Men: La decisión final&quot;?","img/preguntas/xmen3.jpg",2)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(21,1,"Emma Silverfox","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(21,2,"Kavita Rao","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(21,3,"Moira Mactaggert","si")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(22,"¿Contra quien luchaba William Wallace en &quot;Braveheart&quot;?","img/preguntas/braveheart.jpg",3)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(22,1,"Rey Ricardo","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(22,2,"Rey Eduardo","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(22,3,"Rey Enrique VIII","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(23,"¿En qué año se estreno Matrix?","img/preguntas/matrix.jpg",2)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(23,1,"1998","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(23,2,"1999","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(23,3,"1997","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(24,"¿Quién interpreta a Evey Hammond en &quot;V de Vendetta&quot;?","img/preguntas/vendetta.jpg",1)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(24,1,"Natalie Portman","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(24,2,"Keira Knightley","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(24,3,"Sharon Stone","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(25,"¿Cuantos Oscar gano &quot;El Señor de los Anillos: El retorno del rey&quot;?","img/preguntas/anillos3.jpg",3)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(25,1,"8","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(25,2,"10","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(25,3,"11","si")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(23,"¿En qué año se estreno Matrix?","img/preguntas/matrix.jpg",2)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(23,1,"1998","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(23,2,"1999","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(23,3,"1997","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(24,"¿Quién interpreta a Evey Hammond en &quot;V de Vendetta&quot;?","img/preguntas/vendetta.jpg",1)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(24,1,"Natalie Portman","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(24,2,"Keira Knightley","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(24,3,"Sharon Stone","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(25,"¿Cuantos Oscar gano &quot;El Señor de los Anillos: El retorno del rey&quot;?","img/preguntas/anillos3.jpg",3)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(25,1,"8","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(25,2,"10","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(25,3,"11","si")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(26,"¿A qué especie de criatura pertenece el Maestro Yoda?","img/preguntas/starwars.jpg",2)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(26,1,"no se conoce","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(26,2,"Gasgana","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(26,3,"Yaddle","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(27,"¿Qué le contesta Han Solo a la princesa Leia cuando ésta le dice que le ama?","img/preguntas/starwars4.jpg",3)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(27,1,"yo tambien","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(27,2,"lo se","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(27,3,"yo a ti mas","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(28,"¿Cómo se llama el actor que interpreta a Luke Skywalker?","img/preguntas/starwars5.jpg",1)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(28,1,"Harrison Ford","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(28,2,"Mark Hamill","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(28,3,"Alec Guiness","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(29,"¿Como se llama el actor, compañero de John Travolta en Pulp Fiction?","img/preguntas/pulp.jpg",1)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(29,1,"johnny depp","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(29,2,"Martin Lawrence","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(29,3,"Samuel L. Jackson","si")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(30,"¿De qué compañia es la película Las Cronicas de Narnia: el león, la bruja y el armario?","img/preguntas/narnia.jpg",2)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(30,1,"Walt Disney Pictures","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(30,2,"Dreamworks","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(30,3,"Warner Brothers","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(31,"Noche en el museo: ¿de qué trabajaba Larry Daley antes de su trabajo como guardia del museo?","img/preguntas/museo.jpg",2)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(31,1,"jefe editorial","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(31,2,"desempleado","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(31,3,"limpia cristales","no")');

        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(32,"¿Qué personajes nunca coinciden en la misma escena en &quot;Breaking bad&quot;","img/preguntas/breakingbad3.jpg",3)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(32,1,"Jesse Pinkman y Saul Goodman","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(32,2,"Jesse Pinkman y Skyler White","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(32,3,"Walter Jr. y Jesse Pinkman","si")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(33,"¿Qué marca de cerveza bebe el personaje de Matthew McConaughey en &quot;True Detective&quot;?","img/preguntas/truedetective.jpg",3)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(33,1,"Duff","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(33,2,"Lone Star","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(33,3,"Budweiser","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(34,"¿Cómo se llaman las barritas de chocolate que aparecen en varios capítulos de &quot;Lost&quot;?","img/preguntas/perdidos2.jpg",3)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(34,1,"Apollo","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(34,2,"Jumbo","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(34,3,"Oceanic","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(35,"¿Qué ojo pierde el personaje conocido como El Gobernador en &quot;The Walking Dead&quot;?","img/preguntas/twd.jpg",1)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(35,1,"el derecho","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(35,2,"el izquierdo","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(35,3,"ninguno","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(36,"¿Cuál es la cantidad de dinero del botín en torno al cual gira la trama de &quot;Vis a vis&quot;?","img/preguntas/visavis.jpg",2)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(36,1,"1 millon de euros","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(36,2,"5 millones de euros","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(36,3,"9 millones de euros","si")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(37,"¿Qué chef español es el asesor culinario de &quot;Hannibal&quot;?","img/preguntas/hannibal.jpg",3)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(37,1,"José Andrés","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(37,2,"Ferran Adria","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(37,3,"Alberto Chicote","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(38,"¿Cómo se llama la prisión en la que está encerrado el hermano de Michael Scofield en &quot;Prison Break&quot;?","img/preguntas/prisonbreak2.jpg",2)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(38,1,"Scylla","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(38,2,"Sona","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(38,3,"Fox River","si")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(39,"¿Cuál de estos personajes sí aparece en la quinta temporada de &quot;Juego de tronos&quot;?","img/preguntas/juegodetronos2.jpg",2)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(39,1,"Bran Stark","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(39,2,"Hodor","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(39,3,"Olly","si")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(40,"¿Cómo se llama la localidad ficticia en la que se ambienta &quot;Crematorio&quot;?","img/preguntas/crematorio.jpg",2)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(40,1,"Macondo","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(40,2,"Benitondeta","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(40,3,"Misent","si")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(41,"¿Cómo se llama el restaurante en el que trabaja de camarera Penny en &quot;The Big Bang Theory&quot;?","img/preguntas/bigbang.jpg",1)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(41,1,"La cocina cuantica","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(41,2,"La Fabrica de Tartas de Queso","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(41,3,"Central Perk","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(42,"¿En qué año llegaron a nuestras vidas los Simpson?","img/preguntas/simpsons.jpg",3)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(42,1,"1985","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(42,2,"1989","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(42,3,"1991","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(43,"¿Cuantos premios Oscar gano Titanic?","img/preguntas/titanic.jpg",2)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(43,1,"14","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(43,2,"9","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(43,3,"11","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(44,"¿Quien dirigió Toy Story?","img/preguntas/toystory.jpg",3)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(44,1,"John Lasseter","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(44,2,"Paul Dano","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(44,3,"James Lasseter","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(45,"¿A partir de qué hora no se le podía dar comer a un gremlin?","img/preguntas/gremlin.jpg",1)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(45,1,"00:00","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(45,2,"07:07","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(45,3,"12:00","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(46,"¿A que familiar de Iñigo Montoya habían matado en &quot;La princesa prometida&quot;?","img/preguntas/laprincesa.jpg",2)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(46,1,"A su abuela","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(46,2,"A su padre","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(46,3,"A su madre","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(47,"¿En qué novela de Philip K. Dick se basó &quot;Blade Runner&quot;?","img/preguntas/bladerunner.jpg",3)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(47,1,"¿Sueñan los androides con ovejas eléctricas?","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(47,2,"Muñecos Cósmicos","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(47,3,"Ubik","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(48,"¿Qué tienen en común Indiana Jones y ET?","img/preguntas/et.jpg",2)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(48,1,"Se estrenaron el mismo año","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(48,2,"Participa Harrison Ford","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(48,3,"Ambas las dirigió George Lucas","no")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(49,"En la escena del atraco al banco de &quot;Le llaman Bodhi&quot;, los ladrones llevaban máscaras de...","img/preguntas/lellaman.jpg",2)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(49,1,"Actores clasicos","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(49,2,"Personajes del cine de terror","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(49,3,"Presidentes de E.E.U.U.","si")');
        tx.executeSql('INSERT OR REPLACE INTO preguntas(id,enunciado,imagen,dificultad) values(50,"¿Qué actor ganó el Oscar por &quot;Sospechosos habituales&quot;?","img/preguntas/sospechosos.jpg",3)');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(50,1,"Kevin Spacey","si")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(50,2,"Benicio del Toro","no")');
        tx.executeSql('INSERT OR REPLACE INTO opciones(idPregunta,id,respuesta,correcta) values(50,3,"Gabriel Byrnel","no")');

    });

}