##  Practica 2 de la asignatura BCDA - Contador con Decremento y Reset

El objetivo de esta práctica es modificar el proyecto Truffle con el que se han creado la dapp que usa el contrato Contador. Hay que añadir dos funcionalidades nuevas para decrementar e inicializar el contador.

### Tarea 1
El Smart Contract a usar en este ejercicio debe ser una modificación del contrato Contador.sol visto en clase.

Debe modificarse añadiendo dos métodos nuevos:

- decr, que disminuye el valor actual del contador en una unidad.
- reset, que pone a 0 el valor actual del contador.

### Tarea 2
Desarrolle tests nuevos en javascript para probar las nuevas funcionalidades.

Los tests deben probar que los nuevos métodos del contador disminuyen su valor en una unidad o que lo ponen a cero cada vez que se ejecuten.

### Tarea 3
Modifique la dapp desarrollada para añadir dos botones nuevos para disminuir en uno y poner a cero el valor del contrato Contador desplegado.

El botón HTML usado para decremento debe tener "Decrementar" como título, y "cdecr" como valor del atributo id.

El botón HTML usado para reiniciar debe tener "Reset" como título, y "creset" como valor del atributo id.

Cree las funciones App.handleDecr() y App.handleReset() para manejar las pulsaciones sobre los nuevos botones. Estas funciones deber crear transacciones para invocar los métodos decr y reset del contrato Contador desplegado.

Use el servidor serve para servir la app desarrollada.

> [Solución](https://github.com/Fer3suarez/BCDA/tree/main/Pr%C3%A1ctica%202.%20Contador%20con%20decremento%20y%20reset)

#### Pasos para ejecutar el contador con Truffle, Ganache y Metamask:
Instalar truffle
```
npm install truffle 
```
Instalar ganache
```
Descargar ganache para Windows https://www.trufflesuite.com/ganach
```
Instalar los paquetes web3 y truffle-contract
```
npm install web3 truffle-contract
```
Compilar el contrato Contador.sol
```
npx truffle compile --all
```
Realizar las migraciones
```
npx truffle migrate --compile-all --reset
```
Lanzar servidor web serve
```
npx serve -S dapp
```
Abrir navegador Chrome con Metamask instalado e importar una cuenta de Ganache
