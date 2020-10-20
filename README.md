# Asignatura Blockchain. Desarrollo de aplicaciones

##  Práctica 1. Crear un contrato inteligente llamado Asignatura para representar una asignatura de la carrera.

El profesor de la asignatura será el usuario que despliega el contrato.

El constructor tomará como parámetros el nombre de la asignatura, y el curso académico. Ambos son strings.

Deben existir métodos para poder consultar el nombre y el curso academico de la asignatura creada. Y también para acceder a la dirección del profesor.

Crear el método creaEvaluacion para crear una prueba de evaluacion de la asignatura. Por ejemplo, el primer parcial, o la práctica 3. Tomará como parámetros el nombre de la evaluación (string), la fecha de evaluación (uint) y los puntos que proporcionará a la nota final. Las evaluaciones se meterán en un array, y nos referiremos a ellas por su posición en el array.

Cree el método evaluacionesLength que devuelve el número de evaluaciones creadas.

Los alumnos pueden automatricularse con el metodo automatricula, que toma como parámetros el nombre y el email del alumno. Ambos son strings. Impedir que se pueda meter un nombre vacio.

El método matriculasLength devuelve el número de alumnos matriculados.

Las direcciones de los alumnos matriculados se guardarán en un array público llamado matriculas.

Crear el método quienSoy que devuelve el nombre y el email del alumno que invoca el método.

Crear un método que devuelva los datos del alumno (nombre y email) dada su dirección.

Crear el método califica para poner una nota a un alumno en una asignatura. Tiene 4 parámetros:

  - la dirección del alumno.

  - el índice de una evaluación (en el array de evaluaciones).

  - tipo de nota: 0 es NP, 1 es una nota normal, y 2 es MH. Crear un enumerado para el tipo.

  - un uint con la calificación (multipilicada por 100 porque no hay decimales).

Crear el método miNota que devuelve el tipo de nota (el enumerado anterior) y la calificación que ha sacado el alumno que invoca el método en la evaluación pasada como parámetro (el índice de la evaluación).

Crear el método calificaciones que devuelve la nota de una alumno en una evaluación. Toma como parámetros la dirección del alumno y el índice de la evaluación.

Crear un modificador, llamado soloProfesor, para que las funciones creaEvaluacion y califica solo pueda ejecutarlas el profesor.

Crear un modificador, llamado soloMatriculados, para que las funciones quienSoy y miNota solo pueda ejecutarlas un alumno matriculado.

Crear un modificador, llamado noMatriculados, para que la función automatricula solo pueda ejecutarla un alumno que no se ha matriculado aun.

> [Solución](https://github.com/Fer3suarez/BCDA/blob/main/asignatura.sol)

