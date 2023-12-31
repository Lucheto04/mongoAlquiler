# Reto de alquileres con MongoDB

## Base de datos


<img src="./img/f0a1e19f-3e39-4a35-83b8-6b9fce05d285.jpeg" style="zoom:45">

## Dependencias implementadas

<img src="./img/dependencias.png" style="zoom:45">


## Instrucciones

Para usar este proyecto primero tienes que usar la version 18.16.1 de nvm.
Una vez tengas la version en uso, por la terminal debes mandar el comando `npm i`

Lo siguiente seria la configuracion de las variables de entorno, puedes eliminar la parte `.example` del archivo .env.example y luego llenas los campos vacios con sus datos correspondientes.

Ahora vamos a iniciar la transcompilacion del DTO con el comando `npm run tsc`, despues vamos a arrancar nodemon en una terminal diferente con el comando `npm start`. 
Recuerda que para que funcione correctamente debes tener las 2 terminales abiertas al mismo tiempo.


## Base de datos

Para crear la base de datos primero debes dirigiste a la carpeta `db`, ahora primero crearemos los esquemas de las colecciones que estan en el archivo `schema_SQL.mongodb`.
Una vez termines de crear los esquemas ahora si vamos a ir a los insert de cada coleccion que se encuentran en el archivo `mod_SQL.mongodb`.

## Endpoints

Ahora si vamos a utilizar los endpoints para realizar las consultas de nuestra base de datos en mongoDB.

### Tokens

Antes de realizar las consultas tienes que generar el token correspondiente, hay un total de 4 tokens que se generan con los siguientes enpoints
```
http://127.10.10.10:7500/token/alquileres
http://127.10.10.10:7500/token/autos
http://127.10.10.10:7500/token/clientes
http://127.10.10.10:7500/token/empleados
```

### Alquileres 

Aquí te voy a listar los endpoints que puedes manipular con el token de `alquileres`.

```
http://127.10.10.10:7500/alquileres/activos
http://127.10.10.10:7500/alquileres/totales
http://127.10.10.10:7500/alquileres/inicio
http://127.10.10.10:7500/alquileres/:id
http://127.10.10.10:7500/alquileres/total/:id
http://127.10.10.10:7500/alquileres/fecha/filtrada
```

### Autos

Aquí te voy a listar los endpoints que puedes manipular con el token de `autos`.

```
http://127.10.10.10:7500/autos
http://127.10.10.10:7500/autos/disponibles
http://127.10.10.10:7500/autos/camionetas
http://127.10.10.10:7500/autos/ordenados
http://127.10.10.10:7500/autos/total/sucursales
http://127.10.10.10:7500/autos/cantidad
```

### Clientes

Aquí te voy a listar los endpoints que puedes manipular con el token de `clientes`.

```
http://127.10.10.10:7500/clientes
http://127.10.10.10:7500/clientes/reservaron
http://127.10.10.10:7500/clientes/pendientes
http://127.10.10.10:7500/clientes/:DNI
http://127.10.10.10:7500/clientes/pendiente/:id
http://127.10.10.10:7500/clientes/reserva/:id
```

### Empleados

Aquí te voy a listar los endpoints que puedes manipular con el token de `empleados`.

```
http://127.10.10.10:7500/empleados/vendedores
http://127.10.10.10:7500/empleados/cargo
```