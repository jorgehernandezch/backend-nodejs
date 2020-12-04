PROYECTO NODE BACKEND INICIAL

Backend Node listo para iniciar el desarrollo de su aplicación.
Trae integrado, migración de usuarios (Nombre y Email) - con MYSQL.
carpeta SCR y archivos independientes de Rutas, conexiones y controladores.

Como usarlo?

* Clone el proyecto en su máquina.
* En la terminal digite -- npm install -- para installar todas las dependencias.
* Cree una Base de Datos en su phpmyadmin.
* Edite el archivo -- knexfile.js -- con el nombre de su base de datos y los datos de conexión.
* En la terminal digite -- npx knex migrate:latest -- para correr las migraciones.
* Inicie la App con -- npm start --
* Abra Insominia o Postman para enviar las requisiciones.
* Existe una ruta con dos metodos, get('/users') para listar usuarios y post('users') para crear usuarios.

Ambiente de Desarrollo.
NPM Version 7.0.10