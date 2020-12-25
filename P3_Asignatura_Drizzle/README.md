##  Práctica final de la asignatura BCDA - Dapp Asignatura usando Drizzle.

En esta práctica hay que desarrollar una dapp para un contrato asignatura desplegado en una red Ethereum.

La práctica hay que hacerla usando una dapp que ya está parcialmente hecha: muestra todos los datos del contrato Asignatura, muestra las calificaciones del alumno conectado (se identifica por la dirección seleccionada en Metamask), y permite que el profesor ponga notas a los alumnos.

La dapp de partida está disponible en https://github.com/sanpago/P3_Asignatura_Drizzle.

Se pide ampliar la dapp proporcionada con las siguientes nuevas funcionalidades:

### Funcionalidad 1 (30%)
Crear un botón para que un alumno se pueda matricular.  La dirección seleccionada en Metamask identifica al alumno que se está matriculando.

### Funcionalidad 2 (30%)
Crear un formulario para que el profesor cree nuevas evaluaciones.

### Funcionalidad 3 (40%)
Permitir obtener un listado con las notas de todos los alumnos en una determinada evaluación.

Deben implementarse por lo menos dos funcionalidades. 

> [Solución](https://github.com/Fer3suarez/BCDA/tree/master/P3_Asignatura_Drizzle)

### Ejecución de la aplicación

Clonar el repositorio

```
git clone htpps://github.com/Fer3suarez/BCDA
```

Moverse al directorio del proyecto

```
cd P3_Asignatura_Drizzle
```

Instalar las dependencias del proyecto

```
npm install
```

Abrir Ganache y crear un workspace apuntando al archivo truffle-config del proyecto


En el navegador, importar las cuentas de Ganache a Metamask


Compilar y migrar los contraros inteligentes

```
npx truffle migrate --compile-all --reset
```

Ejecutar el script rellenar.js para crear alumnos iniciales y un profesor

```
npx truffle exec .\scripts\rellenar.js
```

Moverse a la carpeta dapp

```
cd dapp
```

Instalar las dependencias de la aplicación descentralizada

```
npm install
```

Arrancar la aplicación

```
npm start
```